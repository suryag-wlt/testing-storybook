import React, { useState, useEffect } from "react";
import "./Chart.css";

export interface BarChartProps {
  initialData?: number[];
  chartHeight?: number;
  barColor?: string;
  title: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  initialData = [10, 25, 15, 30, 20],
  chartHeight = 200,
  barColor = "#4CAF50",
  title = "Dynamic Bar Chart",
}) => {
  const [data, setData] = useState<number[]>(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const renderChart = () => {
    const maxValue = Math.max(...data);
    return data.map((value, index) => (
      <div
        key={index}
        className="bar"
        style={{
          height: `${(value / maxValue) * (chartHeight - 50)}px`,
          background: barColor,
        }}
      >
        {value}
      </div>
    ));
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="chart" style={{ height: chartHeight }}>
        {renderChart()}
      </div>
    </div>
  );
};

export default BarChart;
