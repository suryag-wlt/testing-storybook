import type { Meta, StoryObj } from "@storybook/react-vite";
import WltInput from "./Input";

const meta: Meta<typeof WltInput> = {
  title: "Component/atoms/WltInput",
  component: WltInput,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    type: { control: "text" },
    placeholdder: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    width: { control: "text" },
    height: { control: "text" },
    color: { control: "color" },
    bgColor: { control: "color" },
    fontSize: { control: "text" },
    fontWieght: { control: "text" },
    border: { control: "text" },
    borderRadius: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "number",
    width: "300px",
    height: "30px",
    fontSize: "12px",
    border: "1px solid #ff0000ff",
    borderRadius: "4px",
    placeholdder: "Enter number",
  },
};

export const Small: Story = {
  args: {
    type: "text",
    width: "150px",
    height: "30px",
    fontSize: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    placeholdder: "Enter name",
  },
};

export const Long: Story = {
  args: {
    type: "email",
    width: "400px",
    height: "40px",
    fontSize: "16px",
    border: "1px solid #000",
    borderRadius: "8px",
    color: "#333",
        placeholdder: "Enter email address",

  },
};
