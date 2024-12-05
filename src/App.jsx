import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Protected from './components/Auth/Protected';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Register</Link> | <Link to="/login">Login</Link> | <Link to="/protected">Protected</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
};

export default App;
