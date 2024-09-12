import { Meta, StoryObj } from '@storybook/react';
import Text from '.';

const config: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  args: {},
};

export default config;

type Story = StoryObj<typeof Text>;

export const Primary: Story = { args: {} };
