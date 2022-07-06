import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hero from '../js/components/Sections/Hero';

export default {
  title: 'Sections/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
};
