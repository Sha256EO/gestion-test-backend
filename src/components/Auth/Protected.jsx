import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Protected = () => {
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para el usuario autenticado
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/protected/dashboard`, { withCredentials: true });
        setMessage(response.data.message);
        setIsAuthenticated(true); // Usuario autenticado
      } catch (error) {
        setMessage(`You are not authorized to view this page. ;) \n ${error}`);
        setIsAuthenticated(false); // Usuario no autenticado
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, { withCredentials: true });
      navigate('/login'); // Redirigir al login
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleGoToLogin = () => {
    navigate('/login'); // Redirigir al login
  };

  return (
    <div>
      <h2>Protected Route</h2>
      <p>{message}</p>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button> // Mostrar solo si está autenticado
      ) : (
        <button onClick={handleGoToLogin}>Go to Login</button> // Mostrar si no está autenticado
      )}
    </div>
  );
};

export default Protected;
