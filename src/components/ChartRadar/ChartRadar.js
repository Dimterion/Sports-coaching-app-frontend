import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import "./chartRadar.css";
import PropTypes from "prop-types";

/**
 * Component for the radar chart.
 * @param {object} indicators // Using performance indicators names to display on the chart through props.
 * @param {array} performance // Using user's performance values to display on the chart through props.
 * @example
 * const indicators = {"1": 'cardio', "2": 'energy'};
 * const performance = [{value: 80, kind:1}, {value: 120, kind:2}];
 * returns (
 *  <ChartRadar indicators={indicators.kind} performance={performance.value} />
 * )
 */

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
        stroke="var(--secondaryColor)"
        axisLine={false}
        tickLine={false}
      />
      <PolarRadiusAxis axisLine={false} stroke="none" />
      <Radar dataKey="value" fill="var(--primaryColor)" fillOpacity={0.6} />
    </RadarChart>
  );
}

ChartRadar.propTypes = {
  indicators: PropTypes.object.isRequired,
  performance: PropTypes.array.isRequired,
};

ChartRadar.defaultProps = {
  indicators: {},
  performance: [],
};

export default ChartRadar;
