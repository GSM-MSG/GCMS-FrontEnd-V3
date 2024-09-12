import { Meta, StoryObj } from '@storybook/react';
import TestButton from '.';

const config: Meta<typeof TestButton> = {
  title: 'TestButton',
  component: TestButton,
  args: {},
};

export default config;

type Story = StoryObj<typeof TestButton>;

export const Primary: Story = { args: {} };
