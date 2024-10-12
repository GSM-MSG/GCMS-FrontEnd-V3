import { Meta, StoryObj } from '@storybook/react';
import Modal from '.';

const config: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    button1Click: { action: 'button1Click' },
    button2Click: { action: 'button2Click' },
  },
};

export default config;

type Story = StoryObj<typeof Modal>;

export const AttendanceCheck: Story = {
  args: {
    title: '사유를 적어주세요',
    description: '자리를 비우는 교시를 선택한 뒤\n사유를 적어주세요',
    button1: '취소',
    button2: '출석체크',
    type: 'attendanceCheck',
  },
};

export const Confirm: Story = {
  args: {
    highlightText: '맛소금',
    title: '전공동아리실에 있나요?',
    description:
      '8,9,10,11 교시 중 한 교시라도 없다면\n자리 비움을 선택 해주세요',
    button1: '자리비움',
    button2: '있음',
    type: 'confirm',
  },
};
