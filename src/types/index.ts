export interface FormLoginValues {
  email: string;
  password: string;
}

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface UserState {
  loading?: boolean;
  error?: string;
  userInfo?: {
    token?: string;
  };
}

export interface BookState {
  loading?: boolean;
  error?: string;
  books?: {
    id?: number;
    title?: string;
    createdAt?: string;
  }[];
}

export interface Action {
  type: string;
  payload?: string;
}
