import { Meta, StoryFn } from "@storybook/react";
import Text from "./Text";
import TextProps from "./Text.type";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    text: { control: 'text' },
    fontSize: { control: 'number' },
    fontWeight: { control: 'number' },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '학생회관 1층',
  fontSize: 18,
  fontWeight: 600,
  color: '#3B4046',
};

