import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './index';

const config: Meta<typeof ConfirmModal> = {
  title: 'ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    button1Click: { action: 'button1Click' },
    button2Click: { action: 'button2Click' },
  },
  args: {
    highlightText: '맛소금',
    title: '전공동아리실에 있나요?',
    description:
      '8,9,10,11 교시 중 한 교시라도 없다면\n자리 비움을 선택 해주세요',
    button1: '자리비움',
    button2: '있음',
  },
};

export default config;

type Story = StoryObj<typeof ConfirmModal>;

export const Primary: Story = {};
