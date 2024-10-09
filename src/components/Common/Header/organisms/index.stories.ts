import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const config: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    role: ['student', 'admin'],
  },
};

export default config;

type Story = StoryObj<typeof Header>;

export const Admin: Story = { args: { role: 'admin' } };
export const Student: Story = { args: { role: 'student' } };
