import Navigate from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navigate> = {
  title: 'Components/Home/Navigate',
  component: Navigate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navigate>;

export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/home/major',
      },
    },
  },
};

export const AutonomousSelected: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/home/autonomous',
      },
    },
  },
};
