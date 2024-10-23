import NullData from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NullData> = {
  title: 'Components/Home/NullData',
  component: NullData,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NullData>;

export const Default: Story = {};
