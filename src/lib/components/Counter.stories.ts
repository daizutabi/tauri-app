import type { Meta, StoryObj } from "@storybook/svelte";
import Counter from "./Counter.svelte";

const meta = {
  title: "Counter",
  component: Counter,
  //   tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //     size: {
  //       control: { type: 'select' },
  //       options: ['small', 'medium', 'large'],
  //     },
  //   },
} satisfies Meta<Counter>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {},
};
