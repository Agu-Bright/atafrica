import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/images/woman.avif";
import imgDetail2 from "../assets/images/mike.jpg";

const Section3 = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"Invest with confidence"} textAlign={"start"} />
          <CustomTypography>
            We don’t try to predict the market. Instead, we invest your money in
            different assets that perform well at different times. Resiliency is
            built right in. <br />
            In the background, we’re taking care of the little things that make
            a big difference, like asset allocation, rebalancing, and dividend
            reinvestment. <br />
            Our advisors are here to help at every stage of your money journey —
            and as fiduciaries, they'll always put your financial best interests
            first.{" "}
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"  Always here to help"} textAlign={"start"} />
          <CustomTypography>
            Find answers to your investing questions in our help centre,
            personal finance magazine, or right in the app. <br />
            Our support team is available by phone, chat, or email 7 days a week
            to answer any questions about your account.{" "}
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default Section3;
