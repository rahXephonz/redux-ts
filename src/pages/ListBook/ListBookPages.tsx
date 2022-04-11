import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ListBookPages = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: 'BOOKS_FETCH_REQUESTED',
    });
  }, []);

  console.log(books);

  return <div>{JSON.stringify(books)}</div>;
};

export default ListBookPages;
