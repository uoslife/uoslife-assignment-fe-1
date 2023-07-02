import type { Meta, StoryObj } from "@storybook/react";
import { Cafeteria } from "./Cafeteria";
import DEFAULT_CAFETERIA_INFO from "../../App";

const meta = {
  title: "Components/Cafeteria",
  component: Cafeteria,
  parameters: {
    componentSubtitle: "",
    docs: {
      description: {
        component: `Cafeteria 컴포넌트입니다.`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Cafeteria>;

export default meta;
type Story = StoryObj<typeof Cafeteria>;

export const Default: Story = {
  args: {
    cafeteria: DEFAULT_CAFETERIA_INFO,
  },
};
