// import { getToken } from 'utils/getToken';

const getToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdE5hbWUiOiJOaWtvbGFpaSIsImxhc3ROYW1lIjoiS29uenZlbHl6YWtvdiIsImVtYWlsIjoiYWRtaW5AYXdhbm5uLWFwaS5oZXJva3VhcHAuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY0OTY1OTQ1NywiZXhwIjoxNjQ5Njc3NDU3fQ.58Hqfx_IUkc96fC_yLeOQvhApY4x3QjUOcGDHGrrSAk';

const authHeader = () => {
  if (getToken) {
    const bearerToken = `Bearer ${getToken}`;

    return {
      Authorization: bearerToken,
    };
  } else {
    return {
      Authorization: '',
    };
  }
};

export default authHeader;
