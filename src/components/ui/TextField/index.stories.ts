import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';

const meta = {
  title: 'Shadcn/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
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
    placeholder: '텍스트를 입력해주세요',
    title: '전공동아리',
    error: false,
    errorMessage: '에러 메시지',
  },
};
