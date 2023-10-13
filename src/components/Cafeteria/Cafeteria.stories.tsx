import { Story } from "@storybook/react";
import Cafeteria from "./Cafeteria";
import { CafeteriaType } from "./Cafeteria.type";

export default {
  component: Cafeteria,
  title: "Cafeteria",
};

const Template: Story<{ cafeteria: CafeteriaType }> = (args) => (
  <Cafeteria {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cafeteria: {
    location: "학생회관 1층",
    mainMenu: "참치김치덮밥",
    detailMenu: "수제야채튀김",
    nutritionalInfo: "칼로리: 907Kcal / 단백질: 42g",
    openingHours: "17:00~18:30",
    price: "3,800원",
  },
};
