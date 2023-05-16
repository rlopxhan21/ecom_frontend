import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/redux";
import { authActions } from "../store/authSlice";

export const useLogout = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state: RootState) => state.auth);

  const [logoutLoading, setLogoutLoading] = React.useState<boolean>(false);

  const sendLogoutRequest = async () => {
    setLogoutLoading(true);
    await axios({
      method: "POST",
      url: process.env.REACT_APP_BASE_URL! + "/auth/token-blacklist/",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        refresh: token?.refresh,
      },
    });

    dispatch(authActions.deleteToken());
    setLogoutLoading(false);
  };

  return { logoutLoading, sendLogoutRequest };
};
