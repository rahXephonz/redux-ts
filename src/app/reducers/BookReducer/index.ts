import { Books } from 'types';

export const bookReducer = (
  state: Books[] = [],
  action: {
    type: string;
    payload: Books[];
  }
) => {
  switch (action.type) {
    case 'BOOKS_FETCH_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'BOOKS_FETCH_SUCCESS':
      return {
        ...state,
        pending: false,
        books: action.payload,
      };
    default:
      return state;
  }
};
