import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import ListBookPages from 'pages/ListBook/ListBookPages';
import NotFoundPages from 'pages/NotFound/NotFoundPages';
import AddBookPages from 'pages/AddBook/AddBookPages';
import EditBookPages from 'pages/EditBook/EditBookPages';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<ListBookPages />} />
          <Route path='/add/post' element={<AddBookPages />} />
          <Route path='/edit/post/:id' element={<EditBookPages />} />
          <Route path='*' element={<NotFoundPages />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
