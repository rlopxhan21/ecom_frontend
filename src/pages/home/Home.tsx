import React from "react";

import { ProductList } from "./ProductList";
import { ProductCarousel } from "./ProductCarousel";
import { MainLayout } from "../../components/layout/MainLayout";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <MainLayout>
      <Stack gap={2}>
        <ProductCarousel />
        <Typography variant="h4" fontWeight={700} textAlign="center">
          What's Hot
        </Typography>
        <ProductList />
      </Stack>
    </MainLayout>
  );
};
