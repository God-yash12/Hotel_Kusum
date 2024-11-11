import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

const AdminLogin = () => {
  const [credential, setcredential] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = useCallback(
    (e) => setcredential({ ...credential, [e.target.name]: e.target.value }),
    [credential]
  );

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();

      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL.split(',');
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD.split(',');

      const isValidAdmin = adminEmail.some((email, index) => 
      credential.email && credential.password === adminPassword[index]
      );

      if (isValidAdmin) {
        localStorage.setItem('admin_logged_in', 'true');
        setTimeout(() => navigate('/adminDashboard'), 100);
      } else {
        alert('Invalid email or password');
      }
    },
    [credential, navigate]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 md:p-10 lg:p-12">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Admin Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={credential.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credential.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>

        {/* Back to Home Button */}
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300 font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
