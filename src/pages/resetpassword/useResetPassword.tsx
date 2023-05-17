import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { EmailDataType } from "./ResetPasswordZod";
import { authActions } from "../../store/authSlice";

export const useResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        url: process.env.REACT_APP_BASE_URL! + "/auth/password-reset/",
        headers: {
          "Content-Type": "application/json",
        },
        data: resetPasswordFormData,
      });

      dispatch(
        authActions.updateUnactivatedAccountEmail(resetPasswordFormData.email)
      );
      navigate("/check-email-for-password-reset");
    } catch (error) {
      setResetPasswordError(true);
    }

    setResetPasswordLoading(false);
  };

  return { resetPasswordLoading, resetPasswordError, sendPasswordResetRequest };
};
