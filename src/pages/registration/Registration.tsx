import React from "react";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "./RegistrationZod";
import { useRegistration } from "./useRegistration";
import { MainLayout } from "../../components/layout/MainLayout";
import { RegistrationInputField } from "./RegistrationInputField";
import { CustomInput } from "../../components/custominput/CustomInput";
import { LoadingDots } from "../../components/loadingdots/LoadingDots";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "../../theme/useTheme";
import Typography from "@mui/material/Typography";

export const Registration = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      password2: "",
    },
  });

  const { registrationLoading, registrationError, sendRegistrationRequest } =
    useRegistration();

  return (
    <MainLayout>
      {registrationLoading ? (
        <LoadingDots loading={registrationLoading} message="Registering User" />
      ) : (
        <Stack justifyContent="center" alignItems="center">
          <Paper
            elevation={0}
            sx={{
              width: smallScreen ? "90vw" : 400,
            }}
          >
            <Typography variant="h4" textAlign="center">
              Registration
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
              Please register new account to enjoy member-only benefits.
            </Typography>
            <FormProvider {...methods}>
              <Stack
                component="form"
                noValidate
                gap={2}
                onSubmit={methods.handleSubmit(sendRegistrationRequest)}
              >
                {RegistrationInputField.map((item) => (
                  <CustomInput key={item.id} {...item} />
                ))}
                {registrationError && (
                  <Alert severity="error">
                    The email address you entered is already in use. Please try
                    a different email address.
                  </Alert>
                )}
                <Button variant="contained" type="submit">
                  Register
                </Button>
                <Divider sx={{ my: 2 }}>or</Divider>
                <Typography variant="body1" textAlign="center">
                  Already have an account? <Link to="/login">Login</Link>
                </Typography>
              </Stack>
            </FormProvider>
          </Paper>
        </Stack>
      )}
    </MainLayout>
  );
};
