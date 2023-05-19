import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/redux";
import { systemActions } from "../../store/systemSlice";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartDrawerState } = useSelector((state: RootState) => state.system);

  return (
    <Drawer
      variant="temporary"
      open={cartDrawerState}
      onClose={() => dispatch(systemActions.updateCartDrawerState(false))}
      anchor="right"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 325,
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
          Your Cart Items
        </Typography>
        <Divider />
        <List
          onClick={() => dispatch(systemActions.updateCartDrawerState(false))}
        >
          <ListItem onClick={() => navigate("/track-orders")} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Track Orders"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
