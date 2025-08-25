import type { Meta, StoryObj } from "@storybook/react-vite";
import WltInput from "./Input";

const meta: Meta<typeof WltInput> = {
  title: "Components/atoms/WltInput",
  component: WltInput,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {},
};

export const Long: Story = {
  args: {},
};
