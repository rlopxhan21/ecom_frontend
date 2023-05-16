import React from "react";
import axios from "axios";

import { RegistrationDataType } from "./RegistrationZod";
import { useAccountActivation } from "../accountactivation/useAccountActivation";

export const useRegistration = () => {
  const [registrationLoading, setRegistrationLoading] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState(false);

  const { sendAccountActivationRequest } = useAccountActivation();

  const sendRegistrationRequest = React.useCallback(
    async (registrationFormData: RegistrationDataType) => {
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

        sendAccountActivationRequest({ email: registrationFormData.email });
      } catch (error) {
        setRegistrationError(true);
      }
      setRegistrationLoading(false);
    },
    [sendAccountActivationRequest]
  );

  return { registrationLoading, registrationError, sendRegistrationRequest };
};
