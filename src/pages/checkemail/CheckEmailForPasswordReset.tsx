import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { theme } from "../../theme/Theme";
import { MainLayout } from "../../components/layout/MainLayout";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery } from "@mui/material";
import { RootState } from "../../store/redux";
import Typography from "@mui/material/Typography";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const CheckEmailForPasswordReset = () => {
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { unactivatedAccountEmail } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <MainLayout>
      <Stack justifyContent="center" alignItems="center">
        <Paper
          elevation={0}
          sx={{
            width: smallScreen ? "90vw" : 500,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Avatar
            sx={{ m: "auto", bgcolor: "secondary.main", width: 56, height: 56 }}
          >
            <MailOutlineIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" textAlign="center">
            Check your email
          </Typography>
          <Typography variant="body1" textAlign="center">
            We've sent an email to {unactivatedAccountEmail} to reset your
            account password. The link in the email will expire in 24 hours.
          </Typography>
          <Typography variant="body1" textAlign="center">
            <Link to="/reset-password">Click here</Link> if you did not recieve
            an email or would like to recieve the password reset link again.
          </Typography>
        </Paper>
      </Stack>
    </MainLayout>
  );
};
