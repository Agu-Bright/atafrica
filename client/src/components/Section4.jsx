import React from "react";
import { Button, Stack } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        mx: 6,
      }}
    >
      <Title text={"Let’s make your money make money"} textAlign={"center"} />
      <Paragraph
        text={
          "Join over 3 million Nigeriens who choose AutoInvest to invest, trade, save and more."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Button
        component={Link}
        to={"/contact"}
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          fontSize: "0.9rem",
          textTransform: "capitalize",
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: "50px",
          backgroundColor: "#14192d",
          "&:hover": {
            backgroundColor: "#1e2a5a",
          },
        }}
      >
        Get Started{" "}
      </Button>
    </Stack>
  );
};

export default Section4;
