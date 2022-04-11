import swal from 'sweetalert';
import { FormValues } from 'types';
import { useForm } from 'react-hook-form';

const AddBookPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmitData = async (values: FormValues) => {
    console.log(values);
    // const posted = await axios.post('/posts', values);

    // if (posted.status === 201) {
    //   swal({
    //     text: 'Post created successfully',
    //     title: 'Success',
    //     icon: 'success',
    //   });

    //   console.log(posted);
    // }
  };

  return (
    <div className='max-w-sm mx-auto'>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className='mt-4'>
          <div>
            <label className='block opacity-60' htmlFor='email'>
              Title
            </label>
            {errors.title && <p className='text-red-400'>*Title is required</p>}
            <input
              type='text'
              autoComplete='off'
              placeholder='What is your title?'
              {...register('title', {
                required: true,
              })}
              className='px-12 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600'
            />
          </div>
          <div className='mt-2'>
            <label className='block opacity-60' htmlFor='email'>
              Body
            </label>
            {errors.body && <p className='text-red-400'>*Body is required</p>}
            <input
              type='text'
              autoComplete='off'
              placeholder='What is your body?'
              {...register('body', {
                required: true,
              })}
              className='px-12 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600'
            />
          </div>
          <div className='mt-6'>
            <button
              className='bg-blue-500 hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded'
            >
              Submit Data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBookPages;
