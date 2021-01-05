import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Design system/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<never> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary button!",
};
