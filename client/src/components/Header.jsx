import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import headerImg from "../assets/images/invest2.svg";

const CustomBox = styled(Box)(({ theme }) => ({
  height: "80vh",
  display: "flex",
  justifyContent: "center",
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
  paddingLeft: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    flex: "2",
    textAlign: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Header = () => {
  return (
    <CustomBox
      component="header"
      sx={{ paddingTop: { md: "50px", xs: "20px" } }}
    >
      {/*  Box text  */}
      <BoxText component="section">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#18020C",
          }}
        >
          Navigate Your Financial Future with Precision
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "black",
          }}
        >
          We Craft Intelligent Investment Portfolios Tailored for Your Financial
          Success.
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
              backgroundColor: "#004643",
              "&&:hover": {
                backgroundColor: "#004643",
              },
              "&&:focus": {
                backgroundColor: "#004643",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "30px",
            alignSelf: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "2",
          },
        })}
      >
        <img
          src={headerImg}
          alt="headerImg"
          style={{
            width: "100%",
            height: "100%",
            marginBottom: -15,
          }}
        />
      </Box>
    </CustomBox>
  );
};

export default Header;
