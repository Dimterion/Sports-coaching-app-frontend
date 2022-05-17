import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import "./chartRadar.css";

function ChartRadar(props) {
  const indicators = props.indicators;
  const data = props.performance.map((object) => ({
    value: object.value,
    kind:
      indicators[props.performance.indexOf(object) + 1][0].toUpperCase() +
      indicators[props.performance.indexOf(object) + 1].slice(1),
  }));

  return (
    <RadarChart
      className="radarChar-container"
      width={250}
      height={250}
      outerRadius="60%"
      innerRadius="10%"
      cx="50%"
      cy="50%"
      data={data}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        stroke="white"
        axisLine={false}
        tickLine={false}
      />
      <PolarRadiusAxis axisLine={false} stroke="none" />
      <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default ChartRadar;
