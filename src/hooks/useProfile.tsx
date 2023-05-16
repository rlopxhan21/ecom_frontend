import React from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/authSlice";
import { useAxiosInterceptor } from "../axios/useAxiosInterceptor";

export const useProfile = () => {
  const dispatch = useDispatch();

  const [profileLoading, setProfileLoading] = React.useState(false);
  const [profileError, setProfileError] = React.useState(false);

  const { axiosInstance } = useAxiosInterceptor();

  const sendProfileRequest = React.useCallback(async () => {
    setProfileError(false);
    setProfileLoading(true);
    try {
      const response = await axiosInstance({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL! + "/auth/me/",
      });

      dispatch(authActions.updateProfileData(response.data[0]));
    } catch (error) {
      setProfileError(true);
    }

    setProfileLoading(false);
  }, [dispatch]);

  return { profileLoading, profileError, sendProfileRequest };
};
