import React from "react";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

import { MainLayout } from "../layout/MainLayout";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";

interface Props {
  loading: boolean;
  message: string;
}

export const LoadingDots: React.FC<Props> = ({ loading, message }) => {
  return (
    <MainLayout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <Stack gap={4} textAlign={"center"}>
          <Box textAlign={"center"}>
            <ThreeDots fill="#fff" />
          </Box>
          <Typography variant="h6" fontWeight={700}>
            {message}...
          </Typography>
        </Stack>
      </Backdrop>
    </MainLayout>
  );
};
