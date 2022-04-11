import { deleteBook, loadBooks } from 'app/actions/bookAction';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookState } from 'types';

const ListBookPages = () => {
  const dispatch = useDispatch();
  const booksData = useSelector<RootState, BookState>(
    (state: RootState) => state.booksData
  );

  const { books } = booksData;

  useEffect(() => {
    dispatch(loadBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: number | any) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="max-w-lg mx-auto mt-20">
      Hello List Books
      {!books && <p>Fetching data...</p>}
      {books &&
        books.map(({ id, title }) => (
          <div key={id}>
            <button className="bg-red-200 p-2" onClick={() => handleDelete(id)}>
              Delete
            </button>
            <p>{title}</p>
          </div>
        ))}
    </div>
  );
};

export default ListBookPages;
