import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import T1Hero from '../js/components/Sections/T1Hero';

export default {
  title: 'Sections/T1Hero',
  component: T1Hero,
} as ComponentMeta<typeof T1Hero>;

const Template: ComponentStory<typeof T1Hero> = (args) => <T1Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
};
