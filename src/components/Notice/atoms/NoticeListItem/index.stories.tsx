import NoticeListItem from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NoticeListItem> = {
  title: 'Components/Notice/NoticeListItem',
  component: NoticeListItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NoticeListItem>;

export const Default: Story = {
  args: {
    title: 'GCMS v3.0 개선 및 업데이트 소식',
    content:
      'GCMS v3.0 개선 및 업데이트 소식을 전해드립니다. 2024년도 9월부터 msg에서 제작한 GCMS v3.0이 2025년도 4월달에 배포 후 전공동아리 모집 및 선발에 쓰일 예정입니다.GCMS v3.0 개선 및 업데이트 소식을 전해드립니다. 2024년도 9월부터 msg에서 제작한 GCMS v3.0이 2025년도 4월달에 배포 후 전공동아리 모집 및 선발에 쓰일 예정입니다.',
  },
};
