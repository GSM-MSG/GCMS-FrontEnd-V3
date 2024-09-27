import { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta = {
  title: 'Shadcn/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '전공동아리',
  },
};
