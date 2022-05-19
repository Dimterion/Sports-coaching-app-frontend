import { RadialBarChart, RadialBar, PolarAngleAxis, Legend } from "recharts";
import "./chartRadialBar.css";
import PropTypes from "prop-types";

function ChartRadialBar(props) {
  const data = [
    {
      name: "Score",
      score: props.score * 100,
    },
  ];

  return (
    <RadialBarChart
      className="radialBarChart-container"
      width={250}
      height={250}
      cx="50%"
      cy="50%"
      innerRadius="80%"
      outerRadius="90%"
      barSize={10}
      data={data}
      startAngle={90}
      endAngle={450}
    >
      <RadialBar
        background
        dataKey="score"
        cornerRadius="50%"
        fill="var(--primaryColor)"
      />
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        dataKey={"name"}
        tick={false}
      />
      <text
        fontSize="1.5rem"
        fontWeight={700}
        x="50%"
        y="45%"
        textAnchor="middle"
      >
        {props.score * 100}%
      </text>
      <text fontSize="1rem" x="50%" y="55%" textAnchor="middle">
        of your
      </text>
      <text fontSize="1rem" x="50%" y="65%" textAnchor="middle">
        goal
      </text>
      <Legend align="left" verticalAlign="top" iconSize="0" />
    </RadialBarChart>
  );
}

ChartRadialBar.propTypes = {
  score: PropTypes.number.isRequired,
};

ChartRadialBar.defaultProps = {
  score: 0,
};

export default ChartRadialBar;
