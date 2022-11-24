import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextField from "./TextField";

export default {
  title: "ATOMS/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Playground = Template.bind({});
