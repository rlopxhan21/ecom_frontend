import React from "react";

import AppleHeroImage from "../../assets/images/apple.jpg";
import AsusHeroImage from "../../assets/images/asus.webp";
import DellHeroImage from "../../assets/images/dell.webp";
import RazerHeroImage from "../../assets/images/razer.jpg";

import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export const ProductCarousel = () => {
  const images = [AppleHeroImage, AsusHeroImage, DellHeroImage, RazerHeroImage];

  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        background: `url(${images[activeIndex]})`,
        backgroundSize: "cover",
        minHeight: 550,
        py: 12,
        px: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Fab color="inherit" size="small" onClick={handlePrev}>
        <ChevronLeft fontSize="large" />
      </Fab>
      <Fab color="inherit" size="small" onClick={handleNext}>
        <ChevronRight fontSize="large" />
      </Fab>
    </Box>
  );
};
