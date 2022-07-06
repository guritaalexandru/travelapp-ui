import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonCTA from '../js/components/Parts/ButtonCTA';

export default {
  title: 'Parts/ButtonCTA',
  component: ButtonCTA,
} as ComponentMeta<typeof ButtonCTA>;

const Template: ComponentStory<typeof ButtonCTA> = (args) => <ButtonCTA {...args} />;

export const Default = Template.bind({});
Default.args = {
    href: '/',
    text: 'ButtonCTA',
    type: 'primary',
};
