export interface FormValues {
  title: string;
  body: string;
  userId: number;
}

export type QueryPageParams = {
  id: string;
  name: string;
};

export type Books = {
  id: number;
  title: string;
  createdAt: string;
};

export interface BooksProps {
  id: number;
  title: string;
  createdAt: string;
}
