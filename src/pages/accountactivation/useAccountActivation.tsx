import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AccountActivationDataType } from "./AccountActivationZod";

export const useAccountActivation = () => {
  const navigate = useNavigate();

  const [accountActivationLoading, setAccountActivationLoading] =
    React.useState(false);
  const [accountActivationError, setAccountActivationError] =
    React.useState(false);

  const sendAccountActivationRequest = React.useCallback(
    async (accountActivationFormData: AccountActivationDataType) => {
      setAccountActivationLoading(true);
      setAccountActivationError(false);

      try {
        await axios({
          method: "POST",
          url: process.env.REACT_APP_BASE_URL! + "/auth/account-activate/",
          headers: {
            "Content-Type": "application/json",
          },
          data: accountActivationFormData,
        });

        navigate("/account-activation");
      } catch (error) {
        setAccountActivationError(true);
      }
      setAccountActivationLoading(false);
    },
    [navigate]
  );

  return {
    accountActivationLoading,
    accountActivationError,
    sendAccountActivationRequest,
  };
};
