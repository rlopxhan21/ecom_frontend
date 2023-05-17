import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartDrawer } from "./CartDrawer";
import { RootState } from "../../store/redux";
import { AccountDrawer } from "./AccountDrawer";
import { WishlistDrawer } from "./WishlistDrawer";
import { systemActions } from "../../store/systemSlice";

import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state: RootState) => state.auth);
  const { profileData } = useSelector((state: RootState) => state.auth);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar elevation={0} sx={{ background: "#dbe4ff", color: "#000" }}>
        <Toolbar>
          <LocalGroceryStoreIcon
            onClick={() => navigate("/")}
            color="secondary"
          />
          <Typography
            variant="h6"
            color="secondary"
            sx={{
              flexGrow: 1,
              "&:hover": {
                cursor: "pointer",
              },
              fontWeight: 700,
            }}
            onClick={() => navigate("/")}
          >
            Ecom Store
          </Typography>
          <Tooltip title="View your Wishlist">
            <IconButton
              size="large"
              aria-label="wishlist items"
              onClick={() =>
                dispatch(systemActions.updateWishlistDrawerState(true))
              }
            >
              <Badge badgeContent={10} max={9} color="error" overlap="circular">
                <FavoriteIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip
            title={
              token
                ? `Welcome, ${profileData?.full_name}`
                : "Login to enjoy full features"
            }
          >
            <IconButton
              size="large"
              aria-label="account"
              onClick={() =>
                dispatch(systemActions.updateAccountDrawerState(true))
              }
            >
              <Badge
                variant="dot"
                color={token ? "success" : "error"}
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <AccountBoxIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="View Cart">
            <IconButton
              size="large"
              aria-label="cart items"
              onClick={() =>
                dispatch(systemActions.updateCartDrawerState(true))
              }
            >
              <Badge badgeContent={1} max={9} overlap="circular" color="error">
                <LocalGroceryStoreIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <CartDrawer />
        <AccountDrawer />
        <WishlistDrawer />
      </Box>
      <Toolbar />
    </Box>
  );
};
