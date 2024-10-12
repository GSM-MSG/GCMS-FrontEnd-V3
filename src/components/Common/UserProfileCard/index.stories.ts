import { Meta, StoryObj } from '@storybook/react';
import UserProfileCard from './index';

const config: Meta<typeof UserProfileCard> = {
  title: 'Components/UserProfileCard',
  component: UserProfileCard,
};

export default config;

type Story = StoryObj<typeof UserProfileCard>;

export const Primary: Story = {
  args: {
    profileUrl:
      'https://img.vogue.co.kr/vogue/2019/09/style_5d6f22585f074-930x619.png',
    role: '동아리 부장',
    name: '장예슬',
  },
};
