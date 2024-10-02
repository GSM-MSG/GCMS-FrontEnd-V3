import { Meta, StoryObj } from '@storybook/react';
import Club from './Club';

const meta = {
  title: 'Components/Club',
  component: Club,
  tags: ['autodocs'],
  argTypes: {
    notion: { control: 'boolean' },
    href: { control: 'text' },
    clubName: { control: 'text' },
    description: { control: 'text' },
    recruitmentStatus: {
      control: {
        type: 'select',
        options: ['open', 'closed', 'attendee', 'none'],
      },
    },
    recruitmentCount: { control: 'number' },
    attendeeCount: { control: 'number' },
    totalMemberCount: { control: 'number' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Club>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notion: true,
    href: 'https://github.com/GSM-MSG/GCMS-FrontEnd-V3',
    clubName: '깨소금',
    description:
      '깨소금은 맛소금과 함께 활동하는 동아리로 GCMS, Gauth, SMS, Hi, 등이 있습니다.',
    recruitmentStatus: 'open',
    recruitmentCount: 5,
  },
};

export const Open: Story = {
  args: {
    ...Default.args,
    recruitmentStatus: 'open',
    recruitmentCount: 5,
  },
};

export const Closed: Story = {
  args: {
    ...Default.args,
    recruitmentStatus: 'closed',
  },
};

export const Attendee: Story = {
  args: {
    ...Default.args,
    recruitmentStatus: 'attendee',
    attendeeCount: 15,
    totalMemberCount: 20,
  },
};

export const None: Story = {
  args: {
    ...Default.args,
    notion: false,
    recruitmentStatus: 'none',
  },
};
