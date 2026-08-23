import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #18250a;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack direction="row" sx={{ mt: "94px" }}>
          <Stack direction="column" style={{ width: "340px" }}>
            <Box>
              <img width={"100px"} src={"/icons/yasmin-icon.png"} />
            </Box>
            <Box className={"foot-desc-txt"}>
              "Yasmin Flower Shop - blossoms of beauty, crafted with care."
              "Where flowers bloom, hearts smile - Yasmin Flower Shop." "Yasmin
              Flower Shop - turning moments into fragrant memories." "Elegance
              in every petal - Yasmin Flower Shop."
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook.svg"} />
              <img src={"/icons/twitter.svg"} />
              <img src={"/icons/instagram.svg"} />
              <img src={"/icons/youtube.svg"} />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} direction="row">
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Pages</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  {authMember && <Link to="/orders">Orders</Link>}
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Stack
                  direction="column"
                  sx={{ mt: "20px", justifyContent: "space-between" }}
                  className={"foot-category-link"}
                >
                  <Box sx={{ flexDirection: "row" }} className={"find-us"}>
                    <span>L.</span>
                    <div>Downtown, Dubai</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>P.</span>
                    <div>+971 4 554 7777</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>E.</span>
                    <div>yotoqxona.com@gmail.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>H.</span>
                    <div>Visit 24 hours</div>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>© MIMatthew.</Stack>
      </Container>
    </Footers>
  );
}
