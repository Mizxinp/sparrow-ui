import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';

import Button from '../button';
// import '../style/index.scss'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>你好1</Button>;


/**
 * primary方式
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnType: 'primary',
  size: 'lg',
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  btnType: 'danger',
  size: 'lg',
};

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Link.args = {
  btnType: 'link',
  size: 'lg',
};

export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

