import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
    const API_URL = import.meta.env.VITE_API_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/auth/register`, formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data.message || 'Error durante el registro');
        }
    }
    return (
        <>
            <div>
                <h2>Registro de usuarios</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} /> <br></br>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    <button type="submit">Register</button>
                </form>
                {message && <p> {message} </p>}
            </div>
        </>
    )
}

export default Register