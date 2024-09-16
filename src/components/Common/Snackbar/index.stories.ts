import { Meta, StoryObj } from '@storybook/react';
import Snackbar from '.';

const config: Meta<typeof Snackbar> = {
  title: 'Snackbar',
  component: Snackbar,

  args: {
    text: '동아리 가입 신청이 완료 됐습니다. 해당 동아리의 부장이 확인 후 수락하면 가입 됩니다.',
  },
};

export default config;

type Story = StoryObj<typeof Snackbar>;

export const Primary: Story = { args: {} };
