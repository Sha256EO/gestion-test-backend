import { useEffect, useState } from 'react';
import { apiClient } from './apiClient';

const ProtectedPage = () => {
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/protected/dashboard');
        setData(response.data.message);
      } catch (error) {
        setMessage(error.response?.data.message || 'Error al acceder a la página protegida');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      {data && <p>{data}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProtectedPage;
