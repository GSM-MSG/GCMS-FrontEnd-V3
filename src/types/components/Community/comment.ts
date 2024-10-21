interface User {
  id: number;
  name: string;
}

interface Reply {
  id: number;
  content: string;
  author: User;
}

export interface CommentType {
  id: number;
  content: string;
  author: User;
  replies: Reply[];
}

export type CommentList = CommentType[];
