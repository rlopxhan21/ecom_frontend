import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authActions } from "../../store/authSlice";
import { RegistrationDataType } from "./RegistrationZod";

export const useRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registrationLoading, setRegistrationLoading] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState(false);

  const sendRegistrationRequest = async (
    registrationFormData: RegistrationDataType
  ) => {
    setRegistrationLoading(true);
    setRegistrationError(false);

    try {
      await axios({
        method: "POST",
        url: process.env.REACT_APP_BASE_URL! + "/auth/register/",
        headers: {
          "Content-Type": "application/json",
        },
        data: registrationFormData,
      });

      await axios({
        method: "POST",
        url: process.env.REACT_APP_BASE_URL! + "/auth/account-activate/",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: registrationFormData.email },
      });

      dispatch(
        authActions.updateUnactivatedAccountEmail(registrationFormData.email)
      );
      navigate("/check-email");
    } catch (error) {
      setRegistrationError(true);
    }
    setRegistrationLoading(false);
  };

  return { registrationLoading, registrationError, sendRegistrationRequest };
};
