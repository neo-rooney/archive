import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SliderPopUp from './SliderPopUp';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SliderPopUp',
  component: SliderPopUp,
} as ComponentMeta<typeof SliderPopUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SliderPopUp> = () => <SliderPopUp />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicSliderPopUp = Template.bind({});
