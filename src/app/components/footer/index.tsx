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
            <Box className="footer-logo">CHAYHANA-MARKET</Box>
            <Box className={"foot-desc-txt"}>
              "Chayhana Market — bringing quality, care, and traditional flavor
              to every table."
            </Box>
            <Box className="sns-context">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="/icons/twitter.svg" alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com/chayhanamart"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src="/icons/youtube.svg" alt="YouTube" />
              </a>
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} direction="row">
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Categories</Box>
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
                <Box className={"foot-category-title"}>Contact us!</Box>
                <Stack
                  direction="column"
                  sx={{ mt: "20px", justifyContent: "space-between" }}
                  className={"foot-category-link"}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="find-us"
                  >
                    <i className="fa-solid fa-location-crosshairs"></i>
                    <div>South Korea, Daejeon</div>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className={"find-us"}
                  >
                    <i className="fa-solid fa-phone"></i>
                    <div>010-4711-9737</div>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className={"find-us"}
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <div>chayhana.com@gmail.com</div>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className={"find-us"}
                  >
                    <i className="fa-solid fa-clock"></i>
                    <div>24/7 At Your Service</div>
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
        <Stack className={"copyright-txt"}>© MIT SAM.</Stack>
      </Container>
    </Footers>
  );
}
