import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularMenu } from "./selector";
import { serverApi } from "../../../lib/config";

const popularMenuRetriever = createSelector(
  retrievePopularMenu,
  (popularMenu) => ({ popularMenu: popularMenu }),
);

export default function PopularMenu() {
  const { popularMenu } = useSelector(popularMenuRetriever);

  return (
    <div className="popular-dishes-frame">
      <Container maxWidth="lg">
        <Stack className="popular-section">
          <Box className="category-title">Popular Menu</Box>
          <Stack
            className="cards-frame"
            direction="row"
            justifyContent="center" // "space-between" o'rniga "center" beriladi
            alignItems="center"
            sx={{
              width: "100%",
              mt: "43px",
              display: "flex",
              flexDirection: "row",
              gap: "20px", // Kartalar orasidagi aniq va chiroyli masofa
            }}
          >
            {popularMenu.length !== 0 ? (
              popularMenu.map((product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <Card
                    key={product._id}
                    className={"card"}
                    sx={{
                      width: "250px", // Kengligi 300px dan 250px ga tushirildi (Containerga sig'ishi uchun)
                      height: "360px",
                      position: "relative",
                      overflow: "hidden",
                      p: 0,
                    }}
                  >
                    <CardCover>
                      <img
                        src={imagePath}
                        alt={product.productName}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </CardCover>
                    <CardCover className={"card-cover"} />
                    <CardContent sx={{ justifyContent: "flex-end", p: 2 }}>
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          level="h2"
                          fontSize="lg"
                          textColor="#fff"
                          mb={1}
                        >
                          {product.productName}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "neutral.300",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          {product.productViews}
                          <VisibilityIcon
                            sx={{ fontSize: 20, marginLeft: "5px" }}
                          />
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: 2,
                        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                        height: "50px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        startDecorator={<DescriptionOutlinedIcon />}
                        textColor="neutral.300"
                        fontSize="sm"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.productDesc}
                      </Typography>
                    </CardOverflow>
                  </Card>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
