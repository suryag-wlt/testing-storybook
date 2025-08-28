import type { Meta, StoryObj } from "@storybook/react-vite";
import WltButton from "./Button";

const meta: Meta<typeof WltButton> = {
  title: "Component/atoms/WltButton",
  component: WltButton,
  tags: ["autodocs"],
    argTypes: {
    backgroundColor: { control: "color" },
    fontSize: { control: "text" },
    fontWeight: { control: "text" },
    color: { control: "color" },
    border: { control: "text" },
    borderRadius: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    badgeValue: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof WltButton>;

export const Default: Story = {
  args: {
    buttonText: "Click Me",
    className: "primary",
  },
};

export const WithBadge: Story = {
  args: {
    buttonText: "Newly Added Branches",
    className: "primary-border",
    badgeValue: 12,
  },
};

export const CustomStyle: Story = {
  args: {
    buttonText: "Styled Button",
    className:"secondary"
  },
};
