import React from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

export const useTokenRefresh = () => {
  const dispatch = useDispatch();

  const [tokenRefreshLoading, setTokenRefreshLoading] = React.useState(false);

  const sendTokenRefreshRequest = React.useCallback(
    async (refreshToken: string) => {
      setTokenRefreshLoading(true);
      try {
        const response = await axios({
          method: "POST",
          url: process.env.REACT_APP_BASE_URL! + "/auth/token-refresh/",
          headers: {
            "Content-Type": "application/json",
          },
          data: { refresh: refreshToken },
        });

        dispatch(authActions.updateToken(response.data));
      } catch (error) {
        dispatch(authActions.deleteToken());
      }

      setTokenRefreshLoading(false);
    },
    [dispatch]
  );

  return { tokenRefreshLoading, sendTokenRefreshRequest };
};
