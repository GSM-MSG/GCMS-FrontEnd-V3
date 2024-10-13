import CreatePostButton from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CreatePostButton> = {
  title: 'Components/Community/CreatePostButton',
  component: CreatePostButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreatePostButton>;

export const Default: Story = {
  args: {},
};
