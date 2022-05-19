import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./chartBar.css";
import PropTypes from "prop-types";

function ChartBar(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const data = props.activities.map((activity) => ({
    day: numbers,
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

  const legendTextColor = (value) => {
    return (
      <span style={{ color: "var(--chartsSecondaryColor)" }}>{value}</span>
    );
  };

  return (
    <BarChart
      className="barChart-container"
      width={800}
      height={300}
      data={data}
      barSize={10}
      barGap={10}
      margin={{
        top: 50,
        right: 10,
        left: 40,
        bottom: 20,
      }}
    >
      <XAxis
        dataKey="day"
        tickSize={false}
        padding={{ left: -40, right: -41 }}
        dy={20}
      />
      <YAxis
        orientation="right"
        tickCount={3}
        padding={{ top: 10 }}
        axisLine={false}
        tickLine={false}
        dx={35}
      />
      <CartesianGrid
        strokeDasharray="2"
        vertical={false}
        horizontalPoints={[-1, 157, 73]}
      />
      <Tooltip content={<DailyActivityTooltip />} />
      <Bar
        name="Weight (kg)"
        radius={[10, 10, 0, 0]}
        dataKey="kilograms"
        fill="var(--chartsSecondaryColor)"
      />
      <Bar
        name="Burned calories (kCal)"
        radius={[10, 10, 0, 0]}
        dataKey="calories"
        fill="var(--primaryColor)"
      />
      <text x="5%" y="15%" fill="var(--chartsSecondaryColor)" fontWeight={600}>
        Daily activity
      </text>
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        iconSize={7}
        wrapperStyle={{
          marginTop: -23,
          marginRight: 10,
        }}
        formatter={legendTextColor}
      />
    </BarChart>
  );
}

ChartBar.propTypes = {
  activities: PropTypes.array.isRequired,
};

ChartBar.defaultProps = {
  activities: [],
};

export default ChartBar;
