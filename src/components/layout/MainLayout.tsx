import React from "react";

import { Header } from "../header/Header";

import Box from "@mui/material/Box";
import { Footer } from "../footer/Footer";

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
          m: "auto",
        }}
      >
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  );
};
