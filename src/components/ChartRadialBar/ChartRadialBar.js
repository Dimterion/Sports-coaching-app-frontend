import { RadialBarChart, RadialBar, PolarAngleAxis, Legend } from "recharts";
import "./chartRadialBar.css";

function ChartRadialBar(props) {
  const data = [
    {
      name: "score",
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
      innerRadius="100%"
      outerRadius="100%"
      barSize={10}
      data={data}
      startAngle={90}
      endAngle={450}
    >
      <RadialBar background dataKey="score" cornerRadius="50%" fill="#ff0101" />
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        dataKey={"name"}
        tick={false}
      />
      <text fontSize="1rem" x="50%" y="55%" textAnchor="middle">
        {props.score * 100}% of your goal
      </text>
      <Legend align="left" verticalAlign="top" />
    </RadialBarChart>
  );
}

export default ChartRadialBar;
