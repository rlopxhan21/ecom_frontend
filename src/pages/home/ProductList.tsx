import React from "react";

import { ProductCard } from "../../components/customcard/ProductCard";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { LoadingDots } from "../../components/loadingdots/LoadingDots";

export const ProductList = () => {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="center"
        gap={2}
        flexWrap="wrap"
        sx={{
          width: "90vw",
          margin: "auto",
          my: 3,
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Stack>
      {true ? (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ m: "auto", fontWeight: 700, px: 10, mb: 4 }}
        >
          Load More Products
        </Button>
      ) : (
        <LoadingDots dotsColor="#000" message="Fetching More Products" />
      )}
    </React.Fragment>
  );
};
