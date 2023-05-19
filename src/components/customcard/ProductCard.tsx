import React from "react";

import { theme } from "../../theme/Theme";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {}

const btnStyles = {
  fontWeight: 700,
  borderRadius: 0,
  bgcolor: "common.black",
  "&:hover": {
    background: "#1e1e1e",
  },
};

export const ProductCard = () => {
  const [isCardHovered, setIsCardHovered] = React.useState(false);

  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Card
      elevation={1}
      sx={{
        width: 400,
        borderRadius: 0,
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <Box sx={{ height: "325", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="325"
          image="https://m.media-amazon.com/images/I/61MxE93f37L._AC_SL1500_.jpg"
          alt="{name}"
          sx={{
            transition: "transform 0.4s ease-in-out",
            transform: `scale(${isCardHovered ? 1.07 : 1})`,
          }}
        />
      </Box>

      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" fontWeight={700}>
            razer
          </Typography>
          <Rating defaultValue={4.5} precision={0.5} size="large" readOnly />
        </Stack>
        <Typography gutterBottom variant="h6" fontWeight={700}>
          Razer Book 13 Laptop: Intel Core i7-1165G7 4 Core, Intel Iris Xe,
          13.4" FHD 60Hz (1920x1200), 16GB RAM, 512GB SSD PCIe M.2 - Windows 11
          - CNC Aluminum - Chroma RGB - Thunderbolt 4 - Quartz Pink
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ my: 2 }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              textDecoration: "line-through",
              color: "grey",
            }}
          >
            $6744
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            $5999
          </Typography>
        </Stack>
        <Stack direction="row">
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            size="large"
            fullWidth
            sx={btnStyles}
          >
            Add to cart
          </Button>
          <IconButton
            aria-label="delete"
            size="large"
            color="error"
            sx={{
              borderRadius: 0,
              background: "#ffc9c9",
              "&:hover": {
                background: "#ff8787",
              },
            }}
          >
            <FavoriteBorderIcon fontSize="large" />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
