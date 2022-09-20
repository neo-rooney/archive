/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icon, { iconTypes } from "./Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Icon,
  title: "Components/Icon",
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Example = Template.bind({});
Example.args = {
  icon: "Heart",
  size: "24px",
  color: "#000000",
};

export const IconSet = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
