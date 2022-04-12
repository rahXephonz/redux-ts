export interface FormLoginValues {
  email: string;
  password: string;
}

export type QueryPageParams = {
  bookId: string;
  name: string;
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
  book?: {
    id?: number;
    title?: string;
    createdAt?: string;
    author?: {
      id: number;
      firstName: string;
      lastName: string;
    };
  };
}

export interface Action {
  type: string;
  payload?: string;
}

export interface FormBookValues {
  title: string;
}
