import React from "react";

import { Header } from "../header/Header";

import Box from "@mui/material/Box";

interface Props {
  children: JSX.Element;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Box
        sx={{
          minHeight: "70vh",
          py: 2,
          width: { xs: "95%", md: "95%" },
          m: "auto",
          maxWidth: 2564,
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
};
