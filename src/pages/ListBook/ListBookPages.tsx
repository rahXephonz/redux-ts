import { addBook, deleteBook, loadBooks } from 'app/actions/bookAction';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookState, FormBookValues } from 'types';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { getDate } from 'utils/getDate';

const ListBookPages = () => {
  const dispatch = useDispatch();
  const booksData = useSelector<RootState, BookState>(
    (state: RootState) => state.booksData
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormBookValues>();

  useEffect(() => {
    dispatch(loadBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: number | any) => {
    swal({
      title: 'Are you sure?',
      text: '❌ Remember, this action cannot be reversed!',
      icon: 'warning',
      buttons: ['No', 'Yes'],
    }).then((answer: boolean) => {
      if (answer) {
        swal({ text: '✔️ Success, book has been deleted!', icon: 'success' });
        // Delete Book
        dispatch(deleteBook(id));
      }
    });
  };

  const onSubmitForm = async (values: FormBookValues) => {
    const { title } = values;

    dispatch(addBook(title));
  };

  const { books } = booksData;

  return (
    <div className="w-full flex items-center justify-center mt-6 font-semibold">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Book List</h1>
          <form onSubmit={handleSubmit(onSubmitForm)} className="">
            <div className="flex mt-4">
              <input
                type="text"
                autoComplete="off"
                {...register('title', {
                  required: true,
                })}
                className="w-full shadow appearance-none border rounded 
                py-2 px-3 mr-3
                text-grey-darker focus:outline-none focus:shadow-outline"
                placeholder="Add New Book"
              />
              <button
                className="flex-no-shrink px-6 border-2 rounded text-teal-400 
              border-teal-400 hover:bg-teal"
              >
                Add
              </button>
            </div>
            {errors.title && (
              <p className="text-red-400 text-[13px] mt-1">*Title is required</p>
            )}
          </form>
        </div>
        <div>
          {!books && <p>Fetching data...</p>}
          {books &&
            books.map(({ id, title, createdAt }) => (
              <div key={id}>
                <div className="flex items-center">
                  <Link to={`/edit/book/${id}`} className="w-full">
                    <p className="text-grey-darkest">📘 {title}</p>
                  </Link>

                  <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded border-red-400 text-red-400 mt-6"
                    onClick={() => handleDelete(id)}
                  >
                    Remove
                  </button>
                </div>
                <p className="-mt-6">on {getDate(createdAt)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListBookPages;
