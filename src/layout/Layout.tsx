import { useLocation } from 'react-router';
import Header from './Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const withOutLayout = ['/auth/login'];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  if (withOutLayout.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
