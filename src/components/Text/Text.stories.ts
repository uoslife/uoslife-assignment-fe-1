import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";
import { colors } from "../../utils/styles/color.config";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: "Example",
    fontSize: "md",
    fontWeight: 500,
    color: colors.Secondary900,
  },
};

export const Blue: Story = {
  args: { ...Default.args, color: colors.Primary600 },
};
