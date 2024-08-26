import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../features/auth/authSlice';

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name || '', email: user.email || '' });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-8 space-y-6 rounded-xl shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center">Update Profile</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {/* Profile Update Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>

        {/* User Details Table */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-center mb-4">User Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white border border-gray-300 rounded-md shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.name || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.email || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">password</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user?.password || 'N/A'}</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
