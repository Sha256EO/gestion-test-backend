import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../services/apiClient';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/protected/dashboard');
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response?.data.message || 'Error al cargar la página');
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken'); // Elimina el token de sessionStorage
    navigate('/login'); // Redirige al login
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <button onClick={handleLogout}>Cerrar sesión</button> {/* Botón de logout */}
    </div>
  );
};

export default Dashboard;
