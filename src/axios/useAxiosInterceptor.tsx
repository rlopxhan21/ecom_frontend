import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/redux";
import { authActions } from "../store/authSlice";

export interface DecodedAccessTokenDataType {
  token_type: string;
  exp: number;
  jti: string;
  user_id: number;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
}

export const useAxiosInterceptor = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootState) => state.auth);

  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token?.access}`,
    },
  });

  axiosInstance.interceptors.request.use(async (request: any): Promise<any> => {
    const decodedAccessToken: DecodedAccessTokenDataType = jwtDecode(
      token?.access!
    );
    const expTime: number = decodedAccessToken.exp * 1000;
    const timeRemaining = (expTime - new Date().getTime()) / 1000;
    const isExpired = timeRemaining < 20;

    if (!isExpired) return request;

    try {
      const response = await axios({
        url: process.env.REACT_APP_BASE_URL! + "/auth/token-refresh/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          refresh: token?.refresh,
        },
      });

      dispatch(authActions.updateToken(response.data));
      request.headers.Authorization = `Bearer ${response.data.access}`;
    } catch (error) {
      dispatch(authActions.deleteToken());
    }
    return request;
  });

  return { axiosInstance };
};
