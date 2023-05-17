import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAccountConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accountConfirmationLoading, setAccountConfirmationLoading] =
    React.useState<boolean>(false);
  const [accountConfirmationError, setAccountConfirmationError] =
    React.useState<boolean>(false);

  const sendAccountConfirmationRequest = React.useCallback(
    async (confirmationData: { userID: string; tokenID: string }) => {
      setAccountConfirmationLoading(true);
      setAccountConfirmationError(false);

      try {
        await axios({
          method: "GET",
          url:
            process.env.REACT_APP_BASE_URL! +
            `/auth/account-activate/${confirmationData.userID}/${confirmationData.tokenID}/`,
        });
      } catch (error) {
        setAccountConfirmationError(true);
      }
      setAccountConfirmationLoading(false);
    },
    []
  );

  return {
    accountConfirmationLoading,
    accountConfirmationError,
    sendAccountConfirmationRequest,
  };
};
