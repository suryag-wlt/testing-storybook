import type { Meta, StoryObj } from "@storybook/react-vite";
// import { userEvent, within } from "@storybook/testing-library";
// import { expect } from "@storybook/jest";
import UserCard from "./UserCard";

const meta: Meta<typeof UserCard> = {
  title: "Component/molecules/UserCard",
  component: UserCard,
  tags: ["autodocs"],

  argTypes: {
    name: { control: "text" },
    title: { control: "text" },
    avatar: { control: "text" },
    projectTitle: { control: "text" },
    projects: { control: "number" },
    experience: { control: "number" },
    experienceTitle: { control: "text" },
    ratingTitle: { control: "text" },
    rating: { control: "number" },
    skills: { control: { type : "object" } },
    skillsTitle: { control: "text" },
    email: { control: "text" },
    emailTitle: { control: "text" },
    location: { control: "text" },
    locationTitle: { control: "text" },
    primaryButtonText: { control: "text" },
    secondaryButtonText: { control: "text" },
    onContact: { action: "contact clicked" },
    onViewProfile: { action: "view profile clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Developer: Story = {
  args: {
    name: "Surya",
    title: "Full Stack Developer",
    avatar: "SU",
    projects: 24,
    experience: 7,
    rating: 4.8,
    skills: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
    email: "Surya.wlt@gmail.com",
    location: "Coimbatore,TN,India",
    onContact: () => alert("Contacting Surya..."),
    onViewProfile: () => alert("Viewing Surya's Profile"),
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   // find buttons by text
  //   const contactBtn = await canvas.findByRole("button", { name: /contact/i });
  //   const profileBtn = await canvas.findByRole("button", { name: /view profile/i });

  //   // simulate clicks
  //   await userEvent.click(contactBtn);
  //   await userEvent.click(profileBtn);

  //   // check if important text is visible
  //   await expect(canvas.getByText(/Surya/i)).toBeInTheDocument();
  //   await expect(canvas.getByText(/Full Stack Developer/i)).toBeInTheDocument();
  // },
};

export const Designer: Story = {
  args: {
    name: "Sathya",
    title: "UI/UX Designer",
    avatar: "SA",
    projects: 18,
    experience: 4,
    rating: 4.9,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    email: "sathya.wlt@gmail.com",
    location: "Coimbatore,TN,India",
    onContact: () => alert("Contacting Sathya..."),
    onViewProfile: () => alert("Viewing Sathya's Profile"),
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   const contactBtn = await canvas.findByRole("button", { name: /contact/i });
  //   const profileBtn = await canvas.findByRole("button", { name: /view profile/i });

  //   await userEvent.click(contactBtn);
  //   await userEvent.click(profileBtn);

  //   await expect(canvas.getByText(/Sathya/i)).toBeInTheDocument();
  //   await expect(canvas.getByText(/UI\/UX Designer/i)).toBeInTheDocument();
  // },
};

export const Manager: Story = {
  args: {
    name: "Muthu Selvan",
    title: "Product Manager",
    avatar: "MS",
    projects: 35,
    experience: 10,
    rating: 4.7,
    skills: [
      "Dart & Flutter Fundamentals",
      "State Management",
      "Networking & APIs",
      "Local Storage & Persistence",
    ],
    email: "muthuselvan.wlt@gmail.com",
    location: "Coimbatore,TN,India",
    onContact: () => alert("Contacting Muthu Selvan..."),
    onViewProfile: () => alert("Viewing Muthu Selvan's Profile"),
  },
};
