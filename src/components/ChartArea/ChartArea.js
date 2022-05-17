import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./chartArea.css";

function ChartArea(props) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const data = props.sessions.map((session) => ({
    day: days,
    length: session.sessionLength,
  }));

  const AverageSessionsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="averageSessions-tooltip">
          <p className="averageSessions-label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <AreaChart
      className="areaChart-container"
      width={250}
      height={250}
      data={data}
      margin={{
        top: 90,
        right: 20,
        left: 20,
        bottom: 40,
      }}
    >
      <CartesianGrid stroke="none" />
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        stroke="white"
        tickMargin={20}
      />
      <YAxis hide />
      <Tooltip content={<AverageSessionsTooltip />} />
      <Area
        type="natural"
        dataKey="length"
        stroke="#ffffff"
        strokeWidth={2}
        fill="#ff0101"
      />
      <text x="5%" y="15%" stroke="white" fontWeight={100}>
        Average speed of your sessions
      </text>
    </AreaChart>
  );
}

export default ChartArea;
