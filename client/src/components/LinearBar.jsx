import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0%",
  },

  {
    value: 100,
    label: "100%",
  },
];

function valuetext(value) {
  return `${value}%`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ padding: "0px 25px" }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={8}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{ color: "#D5896F" }}
      />
    </Box>
  );
}
