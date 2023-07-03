import type { Meta, StoryObj } from "@storybook/react";
import Cafeteria from "./Cafeteria";

const meta = {
  title: "Example/Cafeteria",
  component: Cafeteria,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Cafeteria>;

export default meta;

type Story = StoryObj<typeof meta>;

export const A: Story = {
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
