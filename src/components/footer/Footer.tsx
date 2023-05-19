import React from "react";
import { Link } from "react-router-dom";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const linkStyles = { textDecoration: "none", color: "inherit" };

export const Footer = () => {
  return (
    <React.Fragment>
      <Divider />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{ p: 4, background: "#dbe4ff" }}
      >
        <Stack gap={2}>
          <Typography variant="body2" fontWeight={700}>
            <Link to="" style={linkStyles}>
              Ecom Store &#169; 2023
            </Link>
          </Typography>
          <Link to="" style={linkStyles}>
            Accessibility
          </Link>
          <Link to="" style={linkStyles}>
            Privacy Policy
          </Link>
          <Link to="" style={linkStyles}>
            Copyright Policy
          </Link>
        </Stack>
        <Stack gap={2}>
          <Link to="" style={linkStyles}>
            About
          </Link>
          <Link to="" style={linkStyles}>
            User Agreement
          </Link>
          <Link to="" style={linkStyles}>
            Cookie Policy
          </Link>
          <Link to="" style={linkStyles}>
            Community Guidelines
          </Link>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
