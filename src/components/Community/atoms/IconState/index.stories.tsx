import IconState from '.';
import type { Meta, StoryObj } from '@storybook/react';
import { Chat, Heart } from '@/assets/icons';

const meta: Meta<typeof IconState> = {
  title: 'Components/Community/IconState',
  component: IconState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconState>;

export const Default: Story = {
  args: {
    Icon: Heart,
    count: 24,
  },
};

export const HeartState: Story = {
  args: {
    Icon: Heart,
    count: 24,
  },
};

export const ChatState: Story = {
  args: {
    Icon: Chat,
    count: 24,
  },
};
