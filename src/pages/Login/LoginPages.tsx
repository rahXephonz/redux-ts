import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormLoginValues } from 'types';
import { patterns } from 'utils/patterns';
import { login } from 'app/actions/userAction';

const LoginPages = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginValues>();

  const onSubmitForm = async (values: FormLoginValues) => {
    const { email, password } = values;

    dispatch(login(email, password));

    setTimeout(() => {
      window.location.href = '/';
    }, 800);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-10 py-8 mt-4 text-left bg-gray-100 shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center block -mt-20 mb-20">Login</h3>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="mt-4">
            <div>
              <label className="block opacity-60" htmlFor="email">
                Email
              </label>
              {errors.email && <p className="text-red-400">*Email is required</p>}
              <input
                type="text"
                autoComplete="off"
                placeholder="Example@yourmail.com"
                {...register('email', {
                  required: true,
                  pattern: patterns,
                })}
                className="px-12 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block opacity-60">Password</label>
              {errors.password && <p className="text-red-400">*Password is required</p>}
              <input
                type="password"
                placeholder="7+ strong password"
                {...register('password', {
                  required: true,
                  minLength: 5,
                })}
                className="px-12 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <button
                className="px-6 py-2 mt-8 text-white bg-blue-600 
                rounded-full hover:bg-blue-900 w-full"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPages;
