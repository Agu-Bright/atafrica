import React from "react";
import { Box, styled, Typography, Stack, Button } from "@mui/material";

import DiscreteSliderMarks from "./LinearBar";
import HorizontalChat from "./Chat";
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // tamanhos
  gap: theme.spacing(2),
  // cor de fundo
  backgroundColor: "white",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const BoxText = styled(Box)(({ theme }) => ({
  flex: "1",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    flex: "2",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Header = () => {
  return (
    <CustomBox
      component="header"
      sx={{
        height: { md: "80vh", xs: "150vh" },

        marginTop: { md: "80px", xs: "70px" },
        marginBottom: "20px",
        background: "#004643",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { md: "50%", xs: "100%" },
          height: "100%",
          background: "#ededed",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            boxShadow: "1px 1px 4px black",
            top: -40,
            width: "70%",
            right: "20px",
            margin: "10px 10px 10px 0",
            background: "#FFFDFD",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ padding: "10px 10px" }}
          >
            <Typography>Risk Score: 8.0</Typography>
            <Typography>Example portfolio</Typography>
          </Stack>
          <DiscreteSliderMarks />
        </Box>
        <Box sx={{ marginTop: "100px", marginLeft: "20px" }}>
          <HorizontalChat />
        </Box>
      </Box>
      <BoxText
        component="section"
        sx={{
          paddingBottom: "20px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "white",
            paddingTop: "30px",
          }}
        >
          Smarter investing, brilliantly personalized.{" "}
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            fontSize: "20px",
            color: "white",
            width: "80%",
            margin: "5px 5px",
          }}
        >
          Just answer a few questions, and we’ll build you a personalized
          portfolio of low-cost index funds from up to 17 global asset classes.
          Our software handles all the trading, rebalancing, and other busywork
          to help grow your wealth for the long term.
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "1.2rem",
              textTransform: "capitalize",
              borderRadius: "50px",
              padding: "10px 10px",
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#636564",
              marginBottom: "20px",
            }}
          >
            Get Started
          </Button>
        </Box>
      </BoxText>
    </CustomBox>
  );
};

export default Header;
