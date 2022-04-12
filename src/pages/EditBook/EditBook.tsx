import { editBook, getBookById } from 'app/actions/bookAction';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BookState, FormBookValues, QueryPageParams } from 'types';

const EditBookPages = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams<QueryPageParams>();

  const bookData = useSelector<RootState, BookState>(
    (state: RootState) => state.booksData
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormBookValues>();

  useEffect(() => {
    dispatch(getBookById(Number(bookId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitForm = async (values: FormBookValues) => {
    const { title } = values;

    dispatch(editBook(title, Number(bookId)));
  };

  const { book } = bookData;

  return (
    <div className="w-full flex items-center justify-center mt-6 font-semibold">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Edit Book</h1>
          {!book ? (
            <p className="mt-4 text-[18px]">Fetching data...</p>
          ) : (
            <div>
              <p className="mt-4 text-[18px]">📗 {book?.title}</p>
              <p>by: {book?.author?.firstName}</p>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="mt-4">
                  <label htmlFor="title" className="text-[14px]">
                    Update title
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    {...register('title', {
                      required: true,
                    })}
                    className="mt-2 w-full shadow appearance-none border rounded 
                py-2 px-3 mr-3
                text-grey-darker focus:outline-none focus:shadow-outline"
                    placeholder={book?.title}
                  />
                  {errors.title && (
                    <p className="text-red-400 text-[13px] mt-1">
                      *New title is required
                    </p>
                  )}
                  <button
                    className="flex-no-shrink p-2 border-2 
                    rounded bg-blue-500 mt-4 border-none
                text-white"
                  >
                    Update Book
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBookPages;
