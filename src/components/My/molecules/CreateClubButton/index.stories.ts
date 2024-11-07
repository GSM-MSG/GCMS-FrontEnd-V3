import CreateClubButton from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CreateClubButton> = {
  title: 'Components/My/CreateClubButton',
  component: CreateClubButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CreateClubButton>;

export const Default: Story = {
  args: {
    text: '동아리를 개설 해보세요!',
  },
};
