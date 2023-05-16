import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { LoginDataType } from "./LoginZod";
import { authActions } from "../../store/authSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginLoading, setLoginLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);

  const sendLoginRequest = React.useCallback(
    async (loginFormData: LoginDataType) => {
      setLoginError(false);
      setLoginLoading(true);
      try {
        const response = await axios({
          method: "POST",
          url: process.env.REACT_APP_BASE_URL! + "/auth/token-create/",
          headers: {
            "Content-Type": "application/json",
          },
          data: loginFormData,
        });

        dispatch(authActions.updateToken(response.data));

        const profileResponse = await axios({
          method: "GET",
          url: process.env.REACT_APP_BASE_URL! + "/auth/me/",
          headers: {
            Authorization: `Bearer ${response.data.access}`,
          },
        });

        dispatch(authActions.updateProfileData(profileResponse.data[0]));
        navigate("/");
      } catch (error) {
        setLoginError(true);
      }

      setLoginLoading(false);
    },
    [dispatch, navigate]
  );

  return { loginLoading, loginError, sendLoginRequest };
};
