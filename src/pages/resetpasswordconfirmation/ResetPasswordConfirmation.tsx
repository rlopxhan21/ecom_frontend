import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { useTheme } from "../../theme/useTheme";
import {
  ResetPasswordConfirmationDataType,
  schema,
} from "./ResetPasswordConfirmationZod";
import { MainLayout } from "../../components/layout/MainLayout";
import { CustomInput } from "../../components/custominput/CustomInput";
import { LoadingDotsModal } from "../../components/loadingdots/LoadingDotsModal";
import { useResetPasswordConfirmation } from "./useResetPasswordConfirmation";
import { ResetPasswordConfirmationInputField } from "./ResetPasswordConfirmationInputField";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

export const ResetPasswordConfirmation = () => {
  const navigate = useNavigate();
  const { userID, tokenID } = useParams();

  const params = {
    userID: userID!,
    tokenID: tokenID!,
  };

  const { theme } = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    resetPasswordConfirmationLoading,
    resetPasswordConfirmationError,
    sendPasswordResetConfirmationRequest,
  } = useResetPasswordConfirmation();

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      password2: "",
    },
  });

  const onResetPasswordConfirmationFormSubmitHandler = (
    data: ResetPasswordConfirmationDataType
  ) => {
    sendPasswordResetConfirmationRequest(data, params);
  };

  return (
    <MainLayout>
      {resetPasswordConfirmationLoading ? (
        <LoadingDotsModal
          loading={resetPasswordConfirmationLoading}
          message="Resetting Your Password"
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
              Reset Your Password
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
              Lost your password? Please enter your email address. You will
              recieve a link to create a new password via email.
            </Typography>
            <FormProvider {...methods}>
              <Stack
                gap={2}
                component={"form"}
                noValidate
                onSubmit={methods.handleSubmit(
                  onResetPasswordConfirmationFormSubmitHandler
                )}
              >
                {ResetPasswordConfirmationInputField.map((item) => (
                  <CustomInput key={item.id} {...item} />
                ))}
                {resetPasswordConfirmationError && (
                  <Alert severity="error">
                    Something went wrong while completing your request. Please
                    try again.
                  </Alert>
                )}
                <Button variant="contained" type="submit" fullWidth>
                  Reset Password
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
