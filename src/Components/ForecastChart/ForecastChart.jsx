import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ForecastChart = ({ data }) => {
  const marginSize = useMemo(
    () => ({ top: 20, bottom: 20, left: 5, right: 5 }),
    []
  );
  return (
    <ResponsiveContainer height={250} width={"95%"}>
      <LineChart margin={marginSize} data={data}>
        <Legend></Legend>
        <Tooltip></Tooltip>
        <XAxis dataKey="dayHour"></XAxis>
        <YAxis></YAxis>
        <CartesianGrid></CartesianGrid>
        <Line type="monotone" dataKey="max" stroke="#ff0000"></Line>
        <Line type="monotone" dataKey="min" stroke="#0000ff"></Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ForecastChart;
