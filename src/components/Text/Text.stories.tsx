import { Story } from "@storybook/react";
import Text from "./Text";
import { TextType } from "./Text.type";

export default {
  component: Text,
  title: "Text",
};

const Template: Story<TextType> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "학생회관 1층",
  fontSize: 18,
  fontWeight: 600,
  color: "#3B4046",
};
