import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/redux";
import { useLogout } from "../../hooks/useLogout";
import { systemActions } from "../../store/systemSlice";
import { LoadingDots } from "../loadingdots/LoadingDots";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

export const AccountDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state: RootState) => state.auth);
  const { profileData } = useSelector((state: RootState) => state.auth);
  const { accountDrawerState } = useSelector(
    (state: RootState) => state.system
  );

  const { logoutLoading, sendLogoutRequest } = useLogout();

  if (logoutLoading) {
    return <LoadingDots loading={logoutLoading} message="Logging Out" />;
  }

  return (
    <Drawer
      variant="temporary"
      open={accountDrawerState}
      onClose={() => dispatch(systemActions.updateAccountDrawerState(false))}
      anchor="right"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          background: "#dbe4ff",
          height: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
          {token
            ? `Hello, ${profileData?.full_name}`
            : "Account (Not Logged In)"}
        </Typography>
        <Divider />
        <List
          onClick={() =>
            dispatch(systemActions.updateAccountDrawerState(false))
          }
        >
          <ListItem onClick={() => navigate("/track-orders")} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Track Orders"} />
            </ListItemButton>
          </ListItem>
          {token && (
            <>
              <ListItem onClick={() => navigate("/orders")} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Your orders"} />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => navigate("/settings")} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Your Payments"} />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => navigate("/settings")} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Manage Your Profile"} />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => sendLogoutRequest()} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            </>
          )}
          {!token && (
            <>
              <ListItem onClick={() => navigate("/login")} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Sign In"} />
                </ListItemButton>
              </ListItem>
              <ListItem
                onClick={() => navigate("/registration")}
                disablePadding
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Registration"} />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};
