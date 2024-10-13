import Index from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Index> = {
  title: 'Components/Common/CommunityState',
  component: Index,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-white p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Index>;

export const Community: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/community',
      },
    },
  },
};

export const Writing: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/writing',
      },
    },
  },
};
