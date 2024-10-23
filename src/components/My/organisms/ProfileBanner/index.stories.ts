import ProfileBanner from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileBanner> = {
  title: 'Components/My/ProfileBanner',
  component: ProfileBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileBanner>;

export const Default: Story = {
  args: {
    name: '장예슬',
    career: 'UI/UX',
  },
};
