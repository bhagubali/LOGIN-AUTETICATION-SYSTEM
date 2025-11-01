
import React, { useState } from 'react';
import { UserCredentials } from '../types';
import UserIcon from './icons/UserIcon';
import LockIcon from './icons/LockIcon';

interface SignupComponentProps {
  onSignup: (credentials: UserCredentials) => void;
  onSwitchToLogin: () => void;
  error: string | null;
}

const SignupComponent: React.FC<SignupComponentProps> = ({ onSignup, onSwitchToLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordError(null);
    onSignup({ username, password });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 text-white border border-white/20">
      <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
      <p className="text-center text-gray-200 mb-8">Join us today!</p>
      
      {error && <div className="bg-red-500/50 text-white p-3 rounded-md mb-4 text-center border border-red-700">{error}</div>}
      {passwordError && <div className="bg-red-500/50 text-white p-3 rounded-md mb-4 text-center border border-red-700">{passwordError}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username-signup" className="block text-sm font-medium text-gray-200 mb-1">Username</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              id="username-signup"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 bg-white/10 rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-200"
              placeholder="choose_a_username"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password-signup" className="block text-sm font-medium text-gray-200 mb-1">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              id="password-signup"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 bg-white/10 rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-200"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-200 mb-1">Confirm Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 bg-white/10 rounded-md border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition duration-200"
              placeholder="••••••••"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Create Account
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-gray-300">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="font-semibold text-indigo-300 hover:text-indigo-200 focus:outline-none">
          Log in
        </button>
      </p>
    </div>
  );
};

export default SignupComponent;
