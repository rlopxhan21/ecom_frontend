import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ResetPasswordConfirmationDataType } from "./ResetPasswordConfirmationZod";

export const useResetPasswordConfirmation = () => {
  const navigate = useNavigate();

  const [
    resetPasswordConfirmationLoading,
    setResetPasswordConfirmationLoading,
  ] = React.useState<boolean>(false);
  const [resetPasswordConfirmationError, setResetPasswordConfirmationError] =
    React.useState<boolean>(false);

  const sendPasswordResetConfirmationRequest = async (
    resetPasswordConfirmationFormData: ResetPasswordConfirmationDataType,
    params: {
      userID: string;
      tokenID: string;
    }
  ) => {
    setResetPasswordConfirmationError(false);
    setResetPasswordConfirmationLoading(true);

    try {
      await axios({
        method: "PUT",
        url:
          process.env.REACT_APP_BASE_URL! +
          `/auth/password-reset/${params.userID}/${params.tokenID}/`,
        headers: {
          "Content-Type": "application/json",
        },
        data: resetPasswordConfirmationFormData,
      });

      navigate(
        `/password-confirmation/${params.userID}/${params.tokenID}/result`
      );
    } catch (error) {
      setResetPasswordConfirmationError(true);
    }

    setResetPasswordConfirmationLoading(false);
  };

  return {
    resetPasswordConfirmationLoading,
    resetPasswordConfirmationError,
    sendPasswordResetConfirmationRequest,
  };
};
