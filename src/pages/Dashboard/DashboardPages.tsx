import { Link } from 'react-router-dom';
import { getToken } from 'utils/getToken';

const DashboardPages = () => {
  return (
    <div className="text-center max-w-lg mx-auto min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Welcome,{' '}
        {getToken && (
          <Link to="/">
            <span>Click here.</span>
          </Link>
        )}{' '}
        to ListBook
      </h1>
    </div>
  );
};

export default DashboardPages;
