import Plus from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Plus> = {
  title: 'Components/My/Plus',
  component: Plus,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Plus>;

export const Default: Story = {};
