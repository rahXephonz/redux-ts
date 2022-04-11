import { logout } from 'app/actions/userAction';
import { useDispatch } from 'react-redux';
import { getToken } from 'utils/getToken';

const Header = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    sessionStorage.removeItem('jwt');
    localStorage.removeItem('persist:root');

    dispatch(logout());
    window.location.href = '/';
  };

  return (
    <nav className="max-w-lg mx-auto mt-20 flex justify-between items-center">
      <h1 className="text-4xl font-bold">📚Books App</h1>
      {getToken && (
        <button
          className="p-[6px] border-2 border-slate-600 rounded-[5px]"
          onClick={signOut}
        >
          🚀 Logout
        </button>
      )}
    </nav>
  );
};

export default Header;
