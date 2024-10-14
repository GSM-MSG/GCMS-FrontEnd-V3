import NoticeDetail from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NoticeDetail> = {
  title: 'Components/Notice/NoticeDetail',
  component: NoticeDetail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NoticeDetail>;

export const Default: Story = {
  args: {
    title: 'GCMS v3.0 개선 및 업데이트 소식',
    content:
      '광주소프트웨어마이스터고등학교의 동아리 관리 서비스인 GCMS가 버전 3.0을 출시했다. 이번 업데이트에서는 사용자 경험을 개선하고 기능을 대폭 강화하여 동아리 활동을 보다 효율적으로 관리할 수 있게 했다. 특히, 새로운 인터페이스와 함께 사용자 맞춤형 대시보드를 제공해 동아리별 활동 현황을 한눈에 파악할 수 있도록 지원한다. 또한, 동아리 신청 및 승인 절차가 간소화되었으며, 동아리 내 커뮤니케이션 기능도 강화되어 소통이 원활해졌다. GCMS 3.0은 기존 사용자의 피드백을 적극 반영해 보다 직관적인 사용 환경을 제공하며, 학생 및 교사 모두에게 유용한 도구로 자리잡을 전망이다. 앞으로도 지속적인 업데이트를 통해 서비스의 완성도를 높일 예정이다.',
    link: 'https://drive.google.com/drive/folders/17MmwBFT7d8c3ggobwYDO-uQKfMOH2a92?usp=drive_link',
  },
};
