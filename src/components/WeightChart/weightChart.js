import { BarChart } from "@mui/x-charts";
import { convertDateForChart } from "../../utils/convertDate";
import { Typography, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function WeightChart({ bodyWeights }) {
  const theme = useTheme();
  const location = useLocation();
  if (!bodyWeights || bodyWeights.length === 0) {
    return <div>No data available</div>;
  }
  const dates =
    bodyWeights &&
    bodyWeights.map((entry) => convertDateForChart(entry.createdAt));
  const weights = bodyWeights && bodyWeights.map((entry) => entry.weight);
  if (weights.some(isNaN)) {
    return <div>Invalid weight values found</div>;
  }

  return (
    bodyWeights && (
      <div style={{ width: "100%" }}>
        <Typography variant="h6" fontWeight="bold">
          Bodyweight Chart
        </Typography>
        <BarChart
          colors={[theme.palette.secondary.main]}
          xAxis={[{ scaleType: "band", data: dates }]}
          series={[
            {
              data: weights,
            },
          ]}
          locationName={location.pathname}
          height={300}
        />
      </div>
    )
  );
}
