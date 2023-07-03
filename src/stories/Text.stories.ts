import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "Example/Text",
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const A: Story = {
  args: {
    color: "black",
    fontSize: 30,
    fontWeight: 500,
    text: "dsfadfadf",
  },
};
