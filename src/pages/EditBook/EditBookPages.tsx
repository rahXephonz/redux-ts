import { useNavigate, useParams } from 'react-router-dom';
import { QueryPageParams } from 'types';

const EditBookPages = () => {
  const { id } = useParams<QueryPageParams>();
  return <div>EditBookPages {id}</div>;
};

export default EditBookPages;
