import { Meta, StoryObj } from '@storybook/react';
import AttendanceCheckModal from './index';

const config: Meta<typeof AttendanceCheckModal> = {
  title: 'AttendanceCheckModal',
  component: AttendanceCheckModal,
  argTypes: {
    button1Click: { action: 'button1Click' },
    button2Click: { action: 'button2Click' },
  },
  args: {
    title: '사유를 적어주세요',
    description: '자리를 비우는 교시를 선택한 뒤\n사유를 적어주세요',
    button1: '취소',
    button2: '출석체크',
  },
};

export default config;

type Story = StoryObj<typeof AttendanceCheckModal>;

export const Primary: Story = {};
