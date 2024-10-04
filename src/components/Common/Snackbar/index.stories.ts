import { Meta, StoryObj } from '@storybook/react';
import Snackbar from '.';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '동아리 가입 신청이 완료 됐습니다. 해당 동아리의 부장이 확인 후 수락하면 가입 됩니다.',
  },
};

export const ShortMessage: Story = {
  args: {
    text: '짧은 메시지입니다.',
  },
};
