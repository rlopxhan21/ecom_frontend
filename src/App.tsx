import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { RootState } from "./store/redux";
import { useTheme } from "./theme/useTheme";
import { Login } from "./pages/login/Login";
import { useProfile } from "./hooks/useProfile";
import { Profile } from "./pages/profile/Profile";
import { CheckEmail } from "./pages/checkemail/CheckEmail";
import { YourOrders } from "./pages/yourorders/YourOrders";
import { TrackOrders } from "./pages/trackorders/TrackOrders";
import { Registration } from "./pages/registration/Registration";
import { YourPayments } from "./pages/yourpayments/YourPayments";
import { ResetPassword } from "./pages/resetpassword/ResetPassword";
import { AccountActivation } from "./pages/accountactivation/AccountActivation";
import { AccountConfirmation } from "./pages/accountconfirmation/AccountConfirmation";
import { ResetPasswordSuccess } from "./pages/resetpasswordsucess/ResetPasswordSuccess";
import { CheckEmailForPasswordReset } from "./pages/checkemail/CheckEmailForPasswordReset";
import { ResetPasswordConfirmation } from "./pages/resetpasswordconfirmation/ResetPasswordConfirmation";

import { ThemeProvider } from "@mui/material";

function App() {
  const { theme } = useTheme();

  const { token } = useSelector((state: RootState) => state.auth);

  const { sendProfileRequest } = useProfile();

  React.useEffect(() => {
    sendProfileRequest();
  }, [sendProfileRequest]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track-orders" element={<TrackOrders />} />

        {/* -------------------------- Authentication Routes
        ------------------------- */}
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/registration"
          element={!token ? <Registration /> : <Navigate to="/" />}
        />
        <Route
          path="/account-activation"
          element={!token ? <AccountActivation /> : <Navigate to="/" />}
        />
        <Route
          path="/check-email"
          element={!token ? <CheckEmail /> : <Navigate to="/" />}
        />
        <Route
          path="/account-confirmation/:userID/:tokenID"
          element={!token ? <AccountConfirmation /> : <Navigate to="/" />}
        />
        <Route
          path="/reset-password"
          element={!token ? <ResetPassword /> : <Navigate to="/" />}
        />
        <Route
          path="/password-confirmation/:userID/:tokenID"
          element={!token ? <ResetPasswordConfirmation /> : <Navigate to="/" />}
        />
        <Route
          path="/password-confirmation/:userID/:tokenID/result"
          element={!token ? <ResetPasswordSuccess /> : <Navigate to="/" />}
        />
        <Route
          path="/check-email-for-password-reset"
          element={
            !token ? <CheckEmailForPasswordReset /> : <Navigate to="/" />
          }
        />
        {/* -------------------------- Authentication Routes
        ------------------------- */}

        <Route path="/yourorders" element={<YourOrders />} />
        <Route path="/yourpayments" element={<YourPayments />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
