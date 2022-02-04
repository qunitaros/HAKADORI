// サインアップ
export interface SignUpData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  gender: number;
  prefecture: number;
  birthday: Date;
  image: string;
}

export interface SignUpFormData extends FormData {
  append(name: keyof SignUpData, value: String | Blob, fileName?: string): any;
}

// サインイン
export interface SignInData {
  email: string;
  password: string;
}

// ユーザー
export interface User {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  image: {
    url: string;
  };
  gender: number;
  birthday: String | number | Date;
  profile: string;
  prefecture: number;
  field: number;
  dayOff: number;
  allowPasswordChange: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateUserData {
  id: number | undefined | null;
  name?: string;
  prefecture?: number;
  profile?: string;
  image?: string;
  field?: number;
  dayOff?: number;
}

export interface UpdateUserFormData extends FormData {
  append(
    name: keyof UpdateUserData,
    value: String | Blob,
    fileName?: string
  ): any;
}

// いいね
export interface Like {
  id?: number;
  fromUserId: number | undefined | null;
  toUserId: number | undefined | null;
}

// チャットルーム
export interface ChatRoom {
  chatRoom: {
    id: number;
  };
  otherUser: User;
  lastMessage: Message;
}

// メッセージ
export interface Message {
  chatRoomId: number;
  userId: number | undefined;
  content: string;
  createdAt?: Date;
}

// 投稿、Userページ用ポスト
export interface UserPost {
  id: number;
  postField: number;
  content: string;
  userId: number;
  createdAt?: Date;
}

// ポスト一覧用のポスト
export interface Post {
  post: UserPost;
  user: User;
}

export interface CreatePostFormData extends FormData {
  append(name: keyof UserPost, value: String | Blob): any;
}
