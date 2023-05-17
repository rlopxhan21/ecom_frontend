import React from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { useTheme } from "../../theme/useTheme";
import { schema } from "./AccountActivationZod";
import { useAccountActivation } from "./useAccountActivation";
import { MainLayout } from "../../components/layout/MainLayout";
import { EmailInputField } from "../resetpassword/EmailInputField";
import { CustomInput } from "../../components/custominput/CustomInput";
import { LoadingDots } from "../../components/loadingdots/LoadingDots";

import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

export const AccountActivation = () => {
  const navigate = useNavigate();

  const { theme } = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    accountActivationLoading,
    accountActivationError,
    sendAccountActivationRequest,
  } = useAccountActivation();

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <MainLayout>
      {accountActivationLoading ? (
        <LoadingDots
          loading={accountActivationLoading}
          message="Sending Activation Link"
        />
      ) : (
        <Stack justifyContent="center" alignItems="center">
          <Paper
            elevation={0}
            sx={{
              width: smallScreen ? "90vw" : 400,
            }}
          >
            <Typography variant="h4" textAlign="center">
              Activate Your Account
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
              To activate your account, please provide the email address below.
            </Typography>
            <FormProvider {...methods}>
              <Stack
                gap={2}
                component={"form"}
                noValidate
                onSubmit={methods.handleSubmit(sendAccountActivationRequest)}
              >
                {EmailInputField.map((item) => (
                  <CustomInput key={item.id} {...item} />
                ))}
                {accountActivationError && (
                  <Alert severity="error">{accountActivationError}</Alert>
                )}
                <Button variant="contained" type="submit" fullWidth>
                  Send Activation Link
                </Button>
                <Button
                  variant="outlined"
                  type="submit"
                  color="error"
                  onClick={() => navigate("/login")}
                  fullWidth
                >
                  Back to Login
                </Button>
              </Stack>
            </FormProvider>
          </Paper>
        </Stack>
      )}
    </MainLayout>
  );
};
