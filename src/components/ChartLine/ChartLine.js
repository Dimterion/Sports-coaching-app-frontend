import { LineChart, Line, XAxis, Tooltip } from "recharts";
import "./chartLine.css";
import PropTypes from "prop-types";

/**
 * Component for the line chart.
 * @param {array} sessions // Using array with sessions duration to display on the chart through props.
 * @param {array} days // An array of the days to display on the chart.
 * @example
 * const sessions = [{day: 1, sessionLength: 30}, {day: 2, sessionLength: 23} ];
 * returns (
 *  <ChartLine sessions={sessions} />
 * )
 */

function ChartLine(props) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const data = props.sessions.map((session) => ({
    day: days,
    length: session.sessionLength,
  }));

  const AverageSessionsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="averageSessions-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <LineChart
      style={{
        borderRadius: "5px",
        background: "var(--primaryColor)",
      }}
      data={data}
      width={250}
      height={250}
      margin={{
        top: 90,
        right: 20,
        left: 20,
        bottom: 40,
      }}
    >
      <XAxis
        dataKey="day"
        stroke="var(--secondaryColor)"
        axisLine={false}
        tickLine={false}
        tickMargin={20}
        dy={10}
      />
      <Tooltip content={<AverageSessionsTooltip />} cursor={false} />
      <Line
        dataKey="length"
        type="natural"
        stroke="var(--secondaryColor)"
        strokeWidth={2}
        dot={false}
        activeDot={{
          r: 4,
          fill: "var(--secondaryColor)",
          strokeWidth: 10,
          stroke: "rgba(255, 255, 255, 0.25)",
        }}
      />
      <text x="10%" y="15%" fontWeight={100} stroke="rgba(255, 255, 255, 0.75)">
        Average speed of
      </text>
      <text x="10%" y="25%" fontWeight={100} stroke="rgba(255, 255, 255, 0.75)">
        your sessions
      </text>
    </LineChart>
  );
}

ChartLine.propTypes = {
  sessions: PropTypes.array.isRequired,
};

ChartLine.defaultProps = {
  sessions: [],
};

export default ChartLine;
