import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "./chartBar.css";

function ChartBar(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const data = props.activities.map((activity) => ({
    number: numbers,
    kilograms: activity.kilogram,
    calories: activity.calories / 7,
  }));

  const DailyActivityTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="dailyActivity-tooltip">
          <p className="dailyActivity-label">{`${payload[0].value}kg`}</p>
          <p className="dailyActivity-label">{`${payload[1].value * 7}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <BarChart
      className="barChart-container"
      width={600}
      height={300}
      data={data}
      barCategoryGap={50}
      barSize={10}
      margin={{
        top: 70,
        right: 0,
        left: 40,
        bottom: 20,
      }}
    >
      <XAxis
        dataKey="number"
        tickSize={0}
        padding={{ left: -30, right: -30 }}
      />
      <YAxis
        orientation="right"
        tickCount={3}
        padding={{ top: 10 }}
        axisLine={false}
        tickSize={0}
      />
      <Tooltip content={<DailyActivityTooltip />} />
      <Bar radius={[10, 10, 0, 0]} dataKey="kilograms" />
      <Bar radius={[10, 10, 0, 0]} dataKey="calories" fill="#ff0101" />
      <text x="1%" y="10%">
        Daily Activity
      </text>
      <Legend verticalAlign="top" align="right" />
    </BarChart>
  );
}

export default ChartBar;
