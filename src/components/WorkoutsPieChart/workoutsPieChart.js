import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function WorkoutsPieChart({ workouts }) {
  const workoutCounts = workouts?.reduce((acc, workout) => {
    const category = workout.category;
    if (acc[category]) {
      acc[category]++;
    } else {
      acc[category] = 1;
    }
    return acc;
  }, {});

  const pieChartData = Object.entries(workoutCounts).map(
    ([category, count], index) => ({
      id: index,
      value: count,
      label: category,
    })
  );

  return (
    workouts && (
      <PieChart
        series={[
          {
            data: pieChartData,
            innerRadius: 80,
            outerRadius: 120,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -180,
            endAngle: 180,
            cx: 150,
            cy: 150,
          },
        ]}
        height={300}
        width={450}
      />
    )
  );
}
