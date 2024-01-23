import React, { useEffect, useState } from "react";
import { Box, styled, Typography, Stack, Button } from "@mui/material";
import Slider from "@mui/material/Slider";

import BarAnimation from "./Chat";
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

const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 10,
    label: "10",
  },
];
const Header = () => {
  const [riskScore, setRiskScore] = useState(8);
  const [percentage, setPercentage] = useState();
  percentage && console.log(percentage);

  const valuetext = (value) => {
    setRiskScore(value);
    return `${value}`;
  };
  useEffect(() => {
    const percentage = calculateInvestmentPercentages(riskScore);
    setPercentage(percentage);
  }, [riskScore]);
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
          borderBottomRightRadius: "20px",
          width: { md: "50%", xs: "100%" },
          height: { md: "80%", xs: "auto" },
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
            <Typography>
              <span style={{ fontWeight: "bolder" }}>Risk Score:</span>{" "}
              {riskScore}
            </Typography>
            <Typography>Example portfolio</Typography>
          </Stack>
          <Box sx={{ padding: "0px 25px" }}>
            <Slider
              aria-label="Custom marks"
              defaultValue={riskScore}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              marks={marks}
              min={0}
              max={10}
              sx={{ color: "#004643" }}
            />
          </Box>{" "}
        </Box>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
            marginLeft: "20px",
          }}
        >
          <BarAnimation
            usStock={percentage?.usStock}
            usBonds={percentage?.usBonds}
            tips={percentage?.tips}
            municipalStock={percentage?.municipalStock}
            foreignStock={percentage?.foreignStock}
            emergingStock={percentage?.emergingStock}
            dividendStock={percentage?.dividendStock}
            corporateBonds={percentage?.corporateBonds}
          />
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

function calculateInvestmentPercentages(riskScore) {
  // Coefficients for different investments
  const coefficients = {
    usStock: 0.4,
    foreignStock: 0.3,
    emergingStock: 0.2,
    dividendStock: 0.1,
    municipalStock: 0.05,
    usBonds: 0.1,
    corporateBonds: 0.08,
    tips: 0.05,
  };

  // Intercepts for different investments
  const intercepts = {
    usStock: 10,
    foreignStock: 5,
    emergingStock: 2,
    dividendStock: 1,
    municipalStock: 0.5,
    usBonds: 2,
    corporateBonds: 1.5,
    tips: 1,
  };

  // Calculate percentages for each investment
  const percentages = {};
  let totalPercentage = 0;

  for (const investment in coefficients) {
    percentages[investment] = Math.ceil(
      coefficients[investment] * riskScore + intercepts[investment]
    );
    totalPercentage += percentages[investment];
  }

  // Normalize percentages to ensure they sum to 100%
  const normalizationFactor = 100 / totalPercentage;

  for (const investment in percentages) {
    percentages[investment] *= normalizationFactor;
  }
  return percentages;
}
