import CommunityItems from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommunityItems> = {
  title: 'Components/Community/CommunityItems',
  component: CommunityItems,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommunityItems>;

export const Default: Story = {
  args: {
    title: '커뮤니티는 공통의 관심사,',
    contents:
      '커뮤니티는 공통의 관심사, 목표, 가치, 혹은 지리적 위치를 공유하는 사람들로 이루어진 집단입니다. 이러한 집단은 개인들이 소속감을 느끼고 상호작용하며 협력하는 장소로서 중요한 역할을 합니다. 커뮤니티는 온라인과 오프라인에서 모두 존재할 수 있으며, 그 형태와 목적은 다양합니다.',
    heartCount: 24,
    chatCount: 24,
  },
};
