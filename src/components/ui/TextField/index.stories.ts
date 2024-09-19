import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';

const meta = {
  title: 'Shadcn/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: '다음',
    title: '전공동아리',
  },
};
