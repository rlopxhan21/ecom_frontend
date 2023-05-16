import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useLogin } from "./useLogin";
import { LoginDataType } from "./LoginZod";
import { useTheme } from "../../theme/useTheme";
import { LoginInputField } from "./LoginInputField";
import { MainLayout } from "../../components/layout/MainLayout";
import { CustomInput } from "../../components/custominput/CustomInput";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LoadingDots } from "../../components/loadingdots/LoadingDots";

export const Login = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loginLoading, loginError, sendLoginRequest } = useLogin();

  const onLoginFormSubmitHandler = (loginFormData: LoginDataType) => {
    sendLoginRequest(loginFormData);
  };

  const { theme } = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loginLoading)
    return <LoadingDots loading={loginLoading} message="Logging In" />;

  return (
    <MainLayout>
      <Stack justifyContent="center" alignItems="center">
        <Paper
          elevation={0}
          sx={{
            width: smallScreen ? "90vw" : 400,
          }}
        >
          <Typography variant="h4" textAlign="center">
            Sign In
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
            Please sign in to your account to enjoy member-only benefits.
          </Typography>
          <FormProvider {...methods}>
            <Stack
              gap={2}
              component={"form"}
              noValidate
              onSubmit={methods.handleSubmit(onLoginFormSubmitHandler)}
            >
              {LoginInputField.map((item) => (
                <CustomInput key={item.id} {...item} />
              ))}
              <Typography variant="body1">Forget password?</Typography>
              {loginError && (
                <Alert severity="error">
                  Please double check your credential and try again.
                </Alert>
              )}
              <Button variant="contained" type="submit" fullWidth>
                Sign In
              </Button>
            </Stack>
          </FormProvider>
          <Divider sx={{ my: 2 }}>or</Divider>
          <Typography variant="body1" textAlign="center">
            Don't have an account? Register
          </Typography>
        </Paper>
      </Stack>
    </MainLayout>
  );
};
