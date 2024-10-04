import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const config: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    role: 'student',
  },
};

export default config;

type Story = StoryObj<typeof Header>;

export const Primary: Story = { args: {} };
