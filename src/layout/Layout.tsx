import Header from './Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='wrapper'>{children}</main>
    </>
  );
};

export default Layout;
