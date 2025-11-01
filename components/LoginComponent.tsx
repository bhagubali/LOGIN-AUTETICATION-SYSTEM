
import React, { useState } from 'react';
import { UserCredentials } from '../types';
import UserIcon from './icons/UserIcon';
import LockIcon from './icons/LockIcon';

interface LoginComponentProps {
  onLogin: (credentials: UserCredentials) => void;
  onSwitchToSignup: () => void;
  error: string | null;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLogin, onSwitchToSignup, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin({ username, password });
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 text-white border border-white/20">
      <h2 className="text-3xl font-bold text-center mb-2">Welcome Back!</h2>
      <p className="text-center text-gray-200 mb-8">Sign in to continue</p>
      
      {error && <div className="bg-red-500/50 text-white p-3 rounded-md mb-4 text-center border border-red-700">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-1">Username</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 bg-white/10 rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-200"
              placeholder="your_username"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password-login" className="block text-sm font-medium text-gray-200 mb-1">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              id="password-login"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 bg-white/10 rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-200"
              placeholder="••••••••"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Login
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-gray-300">
        Don't have an account?{' '}
        <button onClick={onSwitchToSignup} className="font-semibold text-indigo-300 hover:text-indigo-200 focus:outline-none">
          Sign up
        </button>
      </p>
    </div>
  );
};

export default LoginComponent;
