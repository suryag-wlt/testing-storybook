import WltLabel from "./Label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof WltLabel> = {
  title: "Component/atoms/WltLabel",
  component: WltLabel,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    htmlFor: { control: "text" },
    fontSize: { control: "text" },
    color: { control: "color" },
    fontWeight: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Username",
    htmlFor: "username",
    fontSize: "16px",
    color: "#333",
    fontWeight: "bold",
    className: "",
  },
};

export const LongText: Story = {
  args: {
    title: "This is a very very very long label text that should ellipsis",
    htmlFor: "longLabel",
    fontSize: "14px",
    color: "blue",
    fontWeight: "normal",
  },
};

export const CustomStyle: Story = {
  args: {
    title: "Password",
    htmlFor: "password",
    fontSize: "18px",
    color: "red",
    fontWeight: "600",
    className: "bg-yellow-100 p-1 rounded",
  },
};
