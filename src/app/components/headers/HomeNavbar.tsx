import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobal";
import { serverApi } from "../../../lib/config";
import Logout from "@mui/icons-material/Logout";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogout,
    handleLogoutRequest,
  } = props;
  const { authMember } = useGlobals();

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/" className="chayhana-brand">
              <Box className="chayhana-logo-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Tashqi ramka */}
                  <rect
                    x="5"
                    y="5"
                    width="38"
                    height="38"
                    rx="8"
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="1.5"
                  />

                  {/* 8 qirrali naqsh */}
                  <path
                    d="
        M24 2
        L29 8
        L37 7
        L40 15
        L46 19
        L42 27
        L45 35
        L37 40
        L35 47
        L27 43
        L24 46
        L21 43
        L13 47
        L11 40
        L3 35
        L6 27
        L2 19
        L8 15
        L11 7
        L19 8
        Z
      "
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="1.2"
                  />

                  {/* Ichki aylana */}
                  <circle
                    cx="24"
                    cy="24"
                    r="11"
                    fill="#0D1F17"
                    stroke="#C8A96A"
                    strokeWidth="1.5"
                  />

                  {/* CM */}
                  <text
                    x="24"
                    y="28"
                    textAnchor="middle"
                    fill="#C8A96A"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="Arial, sans-serif"
                  >
                    CM
                  </text>

                  {/* yuqori bezak */}
                  <path
                    d="M24 5 L27 11 L24 14 L21 11 Z"
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />

                  {/* pastki bezak */}
                  <path
                    d="M24 43 L27 37 L24 34 L21 37 Z"
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />

                  {/* chap bezak */}
                  <path
                    d="M5 24 L11 21 L14 24 L11 27 Z"
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />

                  {/* o‘ng bezak */}
                  <path
                    d="M43 24 L37 21 L34 24 L37 27 Z"
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />
                </svg>
              </Box>

              <Box className="chayhana-logo-text">
                <Box className="chayhana-logo-name">CHAYHANA</Box>

                <Box className="chayhana-logo-market">MARKET</Box>

                <Box className="chayhana-logo-tagline">Halal & Fresh</Box>
              </Box>
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className="hover-line">
              <NavLink to="/" activeClassName="underline">
                Home
              </NavLink>
            </Box>
            <Box className="hover-line">
              <NavLink to="/products" activeClassName="underline">
                Products
              </NavLink>
            </Box>
            {authMember && (
              <Box className="hover-line">
                <NavLink to="/orders" activeClassName="underline">
                  Orders
                </NavLink>
              </Box>
            )}
            {authMember && (
              <Box className="hover-line">
                <NavLink to="/member-page" activeClassName="underline">
                  My Page
                </NavLink>
              </Box>
            )}
            <Box className="hover-line">
              <NavLink to="/help" activeClassName="underline">
                Help
              </NavLink>
            </Box>

            {/* BASKET */}
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />

            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                aria-haspopup="true"
                onClick={(e) => {
                  console.log("Avatar klik qilindi!", e.currentTarget);
                  handleLogoutClick(e);
                }}
                style={{ cursor: "pointer" }}
                alt="user avatar"
              />
            )}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-text"}>
              Find the finest quality products
            </Box>

            <Box className={"wel-txt"}>Nourish yourself with Halal food</Box>

            <Box className={"service-txt"}>At your service 24/7</Box>

            <Box className={"signup"}>
              {!authMember ? (
                <Button
                  variant="contained"
                  className="signup-button"
                  onClick={() => setSignupOpen(true)}
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>

            {/* ===== FEATURES ===== */}
            <Stack className="features-block">
              <Box className="feature-item">
                <Box className="feature-icon">🌿</Box>

                <Box>
                  <Box className="feature-title">100% Halal</Box>

                  <Box className="feature-description">Halal Certified</Box>
                </Box>
              </Box>

              <Box className="feature-divider" />

              <Box className="feature-item">
                <Box className="feature-icon">🍃</Box>

                <Box>
                  <Box className="feature-title">Fresh & Quality</Box>

                  <Box className="feature-description">
                    Fresh & High Quality
                  </Box>
                </Box>
              </Box>

              <Box className="feature-divider" />

              <Box className="feature-item">
                <Box className="feature-icon">🚚</Box>

                <Box>
                  <Box className="feature-title">Fast Delivery</Box>
                  <Box className="feature-description">
                    Quick & Reliable Shipping
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
