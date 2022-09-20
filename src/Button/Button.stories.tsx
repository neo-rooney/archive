import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: "primary",
  label: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
  label: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  theme: "tertiary",
  label: "tertiary",
};
