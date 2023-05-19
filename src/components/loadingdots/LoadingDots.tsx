import React from "react";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Props {
  dotsColor: string;
  message: string;
}

export const LoadingDots: React.FC<Props> = ({ dotsColor, message }) => {
  return (
    <Stack gap={1} textAlign={"center"}>
      <Box textAlign={"center"}>
        <ThreeDots fill={dotsColor} />
      </Box>
      <Typography variant="h6" fontWeight={700}>
        {message}...
      </Typography>
    </Stack>
  );
};
