import type { Meta, StoryObj } from "@storybook/react-vite";

import { BarChart } from "./Chart";
import type { BarChartProps } from "./Chart";

const meta: Meta<BarChartProps> = {
  title: "Component/molecules/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  argTypes: {
    initialData: {
      control: "object",
      description: "Initial array of numbers for the chart",
    },
    chartHeight: {
      control: { type: "number" },
      description: "Height of the chart container",
    },
    barColor: {
      control: "color",
      description: "Color of the bars",
    },
    title: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<BarChartProps>;

export const Default: Story = {
  args: {
    initialData: [10, 25, 15, 30, 20],
    chartHeight: 200,
    barColor: "#4CAF50",
  },
};

export const CustomColors: Story = {
  args: {
    title: "Custom Color Chart",
    initialData: [5, 15, 25, 35, 45],
    barColor: "#FF5733",
  },
};

export const TallChart: Story = {
  args: {
    title: "Tall Chart",
    initialData: [10, 50, 30, 70, 20],
    barColor: "#c17bffff",
  },
};
