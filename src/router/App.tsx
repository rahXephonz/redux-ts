import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import ListBookPages from 'pages/ListBook/ListBookPages';
import NotFoundPages from 'pages/NotFound/NotFoundPages';
import LoginPages from 'pages/Login/LoginPages';
import PrivateRoutes from 'helper/PrivateRoutes';
import DashboardPages from 'pages/Dashboard/DashboardPages';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFoundPages />} />
          <Route path="/auth/login" element={<LoginPages />} />
          <Route path="/dashboard" element={<DashboardPages />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<ListBookPages />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
