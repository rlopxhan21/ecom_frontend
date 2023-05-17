import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useTheme } from "../../theme/useTheme";
import { MainLayout } from "../../components/layout/MainLayout";
import { useAccountConfirmation } from "./useAccountConfirmation";
import { LoadingDots } from "../../components/loadingdots/LoadingDots";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const AccountConfirmation = () => {
  const navigate = useNavigate();

  const { userID, tokenID } = useParams();

  const { theme } = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    accountConfirmationLoading,
    accountConfirmationError,
    sendAccountConfirmationRequest,
  } = useAccountConfirmation();

  React.useEffect(() => {
    const confirmationData = {
      userID: userID!,
      tokenID: tokenID!,
    };

    sendAccountConfirmationRequest(confirmationData);
  }, [sendAccountConfirmationRequest, tokenID, userID]);

  return (
    <MainLayout>
      {accountConfirmationLoading ? (
        <LoadingDots
          loading={accountConfirmationLoading}
          message="Activating Your Account"
        />
      ) : (
        <Stack justifyContent="center" alignItems="center">
          {!accountConfirmationError ? (
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: smallScreen ? "90vw" : 500,
              }}
            >
              <Avatar
                sx={{
                  m: "auto",
                  bgcolor: "success.main",
                  width: 56,
                  height: 56,
                }}
              >
                <VerifiedUserIcon fontSize="large" />
              </Avatar>
              <Typography variant="h4" textAlign="center">
                Account Activation Confirmation
              </Typography>
              <Typography variant="body1" textAlign="center">
                Your account has been successfully activated!
              </Typography>
              <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
                You can log in to your account and start using members-only
                benefits.
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/login")}
                fullWidth
              >
                Navigate to Login
              </Button>
            </Paper>
          ) : (
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: smallScreen ? "90vw" : 500,
              }}
            >
              <Avatar
                sx={{
                  m: "auto",
                  bgcolor: "error.main",
                  width: 56,
                  height: 56,
                }}
              >
                <GppMaybeIcon fontSize="large" />
              </Avatar>
              <Typography variant="h4" textAlign="center">
                Account Activation Confirmation
              </Typography>
              <Typography variant="body1" textAlign="center">
                Can't verify the user. Activation Failed!
              </Typography>
              <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
                Something went wrong with your activation, Please try again.
              </Typography>
              <Button
                variant="contained"
                color="warning"
                onClick={() => navigate("/account-activation")}
                fullWidth
              >
                Try Again
              </Button>
            </Paper>
          )}
        </Stack>
      )}
    </MainLayout>
  );
};
