import { CommentList } from '@/types/components/Community/comment';

export const commentData: CommentList = [
  {
    id: 1,
    content: '이것은 첫 번째 메인 댓글입니다.',
    author: {
      id: 101,
      name: '사용자A',
    },
    replies: [
      {
        id: 11,
        content: '첫 번째 댓글에 대한 답글입니다.',
        author: {
          id: 102,
          name: '사용자B',
        },
      },
      {
        id: 12,
        content: '두 번째 답글입니다.',
        author: {
          id: 103,
          name: '사용자C',
        },
      },
    ],
  },
  {
    id: 2,
    content: '두 번째 메인 댓글입니다.',
    author: {
      id: 104,
      name: '사용자D',
    },
    replies: [],
  },
  {
    id: 3,
    content: '세 번째 메인 댓글입니다.',
    author: {
      id: 105,
      name: '사용자E',
    },
    replies: [
      {
        id: 31,
        content: '세 번째 댓글에 대한 답글입니다.',
        author: {
          id: 106,
          name: '사용자F',
        },
      },
    ],
  },
];
