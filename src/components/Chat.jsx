import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

// // Example usage:
// const riskScore = 50; // Replace with your actual risk score
// const investmentPercentages = calculateInvestmentPercentages(riskScore);

// // Display the result
// for (const investment in investmentPercentages) {
//   console.log(`${investment} Percentage:`, investmentPercentages[investment].toFixed(2) + "%");
// }

export default function BarAnimation({
  usStock,
  usBonds,
  tips,
  municipalStock,
  foreignStock,
  emergingStock,
  dividendStock,
  corporateBonds,
}) {
  const highlightScope = {
    highlighted: "series",
    faded: "global",
  };

  const series = [
    {
      label: "US Stock",
      data: [usStock],
    },
    {
      label: "Foreign Stock",
      data: [foreignStock],
    },
    {
      label: "Emerging Markets",
      data: [emergingStock],
    },
    {
      label: "Devidend Stock",
      data: [dividendStock],
    },
    {
      label: "Municipal Bonds",
      data: [municipalStock],
    },
    {
      label: "US Bonds",
      data: [usBonds],
    },
    {
      label: "Corporate Bonds",
      data: [corporateBonds],
    },
    {
      label: "Tips",
      data: [tips],
    },
  ].map((s) => ({ ...s, highlightScope }));

  return (
    <Box sx={{ width: "100%" }}>
      <BarChart
        height={300}
        series={series.slice(0, 8).map((s) => {
          return { ...s, data: s.data.slice(0, 1) };
        })}
        skipAnimation={false}
      />
    </Box>
  );
}
