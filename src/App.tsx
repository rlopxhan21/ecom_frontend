import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { RootState } from "./store/redux";
import { useTheme } from "./theme/useTheme";
import { Login } from "./pages/login/Login";
import { useProfile } from "./hooks/useProfile";
import { CheckEmail } from "./pages/checkemail/CheckEmail";
import { TrackOrders } from "./pages/trackorders/TrackOrders";
import { Registration } from "./pages/registration/Registration";
import { AccountActivation } from "./pages/accountactivation/AccountActivation";

import { ThemeProvider } from "@mui/material";
import { ResetPassword } from "./pages/resetpassword/ResetPassword";
import { AccountConfirmation } from "./pages/accountconfirmation/AccountConfirmation";

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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
