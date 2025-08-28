import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Login } from "./Login";

const meta: Meta<typeof Login> = {
  title: "Component/molecules/Login",
  component: Login,
  tags: ["autodocs"],
  argTypes: {
    email: { control: "text" },
    username: { control: "text" },
    password: { control: "text" },
    success: { control: "boolean" },
    title: { control: "text" },
    subtitle: { control: "text" },
    btnText: { control: "text" },
    borderRadius: { control: "text" },
    bgColor: { control: "color" },
    color: { control: "color" },
    onSubmit: { action: "submitted" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Welcome Back",
    subtitle: "Sign in to your account",
    btnText: "Sign In",
    borderRadius: "12px",
    bgColor: "#ffffff",
    color: "#000000",
  },
};

export const Filled: Story = {
  args: {
    email: "test@example.com",
    username: "Surya",
    password: "123456",
    success: true,
    title: "Register!",
    subtitle: "Let's go",
    btnText: "Login Now",
    bgColor: "#f0f0f0",
    color: "#333",
  },
};

export const AutoFillAndTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = await canvas.findByPlaceholderText("your@email.com");
    const usernameInput = await canvas.findByPlaceholderText("Username");
    const passwordInput = await canvas.findByPlaceholderText("••••••••");
    const submitButton = await canvas.findByRole("button", { name: /sign in/i });

    await userEvent.type(emailInput, "surya.wlt@email.com", { delay: 100 });
    await userEvent.type(usernameInput, "Surya", { delay: 100 });
    await userEvent.type(passwordInput, "123456", { delay: 150 });

    await userEvent.click(submitButton, { delay: 200 });

    await expect(
      await canvas.findByText(/Login successful!/i)
    ).toBeInTheDocument();
  },
};
