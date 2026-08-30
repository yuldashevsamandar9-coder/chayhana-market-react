import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
  return (
    <div className={"static-frame"}>
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">2</Box>
            <Box className="static-text">Halal Market</Box>
          </Stack>
          <Divider height="64" width="2" bg="#f9f7f4ff" />
          <Stack className="static-box">
            <Box className="static-num">4+</Box>
            <Box className="static-text">Experience</Box>
          </Stack>
          <Divider height="64" width="2" bg="#f7f6f5ff" />
          <Stack className="static-box">
            <Box className="static-num">50+</Box>
            <Box className="static-text">Menu</Box>
          </Stack>
          <Divider height="64" width="2" bg="#f5f5f4ff" />
          <Stack className="static-box">
            <Box className="static-num">200+</Box>
            <Box className="static-text">Clients</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
