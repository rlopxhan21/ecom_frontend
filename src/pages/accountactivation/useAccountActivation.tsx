import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authActions } from "../../store/authSlice";
import { AccountActivationDataType } from "./AccountActivationZod";

export const useAccountActivation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accountActivationLoading, setAccountActivationLoading] =
    React.useState<boolean>(false);
  const [accountActivationError, setAccountActivationError] = React.useState<
    string | undefined
  >(undefined);

  const sendAccountActivationRequest = async (
    accountActivationFormData: AccountActivationDataType
  ) => {
    setAccountActivationLoading(true);
    setAccountActivationError(undefined);

    try {
      await axios({
        method: "POST",
        url: process.env.REACT_APP_BASE_URL! + "/auth/account-activate/",
        headers: {
          "Content-Type": "application/json",
        },
        data: accountActivationFormData,
      });

      dispatch(
        authActions.updateUnactivatedAccountEmail(
          accountActivationFormData.email
        )
      );
      navigate("/check-email");
    } catch (error: any) {
      setAccountActivationError(error.response.data.email.message);
    }
    setAccountActivationLoading(false);
  };
  return {
    accountActivationLoading,
    accountActivationError,
    sendAccountActivationRequest,
  };
};
