import MenuBarButton from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuBarButton> = {
  title: 'Components/My/MenuBar',
  component: MenuBarButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MenuBarButton>;

export const Default: Story = {};
