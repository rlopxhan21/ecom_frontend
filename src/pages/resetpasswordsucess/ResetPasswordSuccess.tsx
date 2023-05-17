import React from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../../theme/useTheme";
import { MainLayout } from "../../components/layout/MainLayout";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

import DoneIcon from "@mui/icons-material/Done";

export const ResetPasswordSuccess = () => {
  const navigate = useNavigate();

  const { theme } = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MainLayout>
      <Stack justifyContent="center" alignItems="center">
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
              bgcolor: "secondary.main",
              width: 56,
              height: 56,
            }}
          >
            <DoneIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" textAlign="center">
            Password Reset Confirmation
          </Typography>
          <Typography variant="body1" textAlign="center">
            You are all set! Your account password has been reset.
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
      </Stack>
    </MainLayout>
  );
};
