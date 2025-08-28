import type { Meta, StoryObj } from "@storybook/react-vite";



import Task from "./Task";

export const ActionsData = {
  onArchiveTask: () => console.log('archive-task'),
  onPinTask: () => console.log('pin-task'),
};

const meta = {
  component: Task,
  title: "Component/molecules/Task",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },

} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",

    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
      title: "Pinned Task",
      
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
      title: "Archived Task",
    },
  },
};
