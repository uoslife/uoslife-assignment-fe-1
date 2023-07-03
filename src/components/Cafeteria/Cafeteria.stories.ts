import type { Meta, StoryObj } from "@storybook/react";
import { Cafeteria } from "./Cafeteria";

const meta: Meta<typeof Cafeteria> = {
  title: "Components/cafeteria",
  component: Cafeteria,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Cafeteria>;

export const Default: Story = {
  args: {
    cafeteria: {
      location: "학생회관 1층",
      mainMenu: "참치김치덮밥",
      detailMenu: "수제야채튀김",
      nutritionalInfo: "칼로리: 907Kcal / 단백질: 42g",
      openingHours: "17:00~18:30",
      price: "3,800원",
    },
  },
};
