import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { schema } from "./LoginZod";
import { useLogin } from "./useLogin";
import { useTheme } from "../../theme/useTheme";
import { LoginInputField } from "./LoginInputField";
import { MainLayout } from "../../components/layout/MainLayout";
import { CustomInput } from "../../components/custominput/CustomInput";
import { LoadingDots } from "../../components/loadingdots/LoadingDots";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Login = () => {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loginLoading, loginError, sendLoginRequest } = useLogin();

  const { theme } = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {loginLoading ? (
        <LoadingDots loading={loginLoading} message="Logging In" />
      ) : (
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
                onSubmit={methods.handleSubmit(sendLoginRequest)}
              >
                {LoginInputField.map((item) => (
                  <CustomInput key={item.id} {...item} />
                ))}
                <Typography variant="body1" textAlign="end">
                  <Link to="/reset-password">Forget password?</Link>
                </Typography>
                {loginError && (
                  <Alert severity="error">
                    Please double check your credentials and try again.
                  </Alert>
                )}
                <Button variant="contained" type="submit" fullWidth>
                  Sign In
                </Button>
              </Stack>
            </FormProvider>
            <Divider sx={{ my: 2 }}>or</Divider>
            <Button
              variant="outlined"
              onClick={() => navigate("/account-activation")}
              fullWidth
            >
              Activate Your Account
            </Button>
            <Divider sx={{ my: 2 }}>or</Divider>
            <Typography variant="body1" textAlign="center">
              Don't have an account? <Link to="/registration">Register</Link>
            </Typography>
          </Paper>
        </Stack>
      )}
    </MainLayout>
  );
};
