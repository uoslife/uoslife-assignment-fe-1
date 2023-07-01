import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    componentSubtitle: "",
    docs: {
      description: {
        component: `Text 컴포넌트입니다.`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: "Example",
    fontSize: 20,
    fontWeight: 400,
    color: "#000000",
  },
};
