import { useState } from 'react';
import API from '../../services/api';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    await API.post('/users/signup', formData);
    alert('Sign up successful!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="border p-2"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border p-2"
        onChange={handleInputChange}
      />
      <button onClick={handleSignUp} className="bg-blue-500 text-white p-2">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
