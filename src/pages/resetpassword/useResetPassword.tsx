import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import { EmailDataType } from "./ResetPasswordZod";

export const useResetPassword = () => {
  const navigate = useNavigate();

  const [resetPasswordLoading, setResetPasswordLoading] = React.useState(false);
  const [resetPasswordError, setResetPasswordError] = React.useState(false);

  const sendPasswordResetRequest = async (
    resetPasswordFormData: EmailDataType
  ) => {
    setResetPasswordError(false);
    setResetPasswordLoading(true);

    try {
      await axios({
        method: "POST",
        url: process.env.REACT_APP_BASE_URL! + "/auth/reset-password/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: resetPasswordFormData,
        },
      });

      navigate("/");
    } catch (error) {
      setResetPasswordError(true);
    }

    setResetPasswordLoading(false);
  };

  return { resetPasswordLoading, resetPasswordError, sendPasswordResetRequest };
};
