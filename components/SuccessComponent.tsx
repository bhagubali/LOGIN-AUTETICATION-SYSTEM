
import React from 'react';

interface SuccessComponentProps {
  username: string;
  onLogout: () => void;
}

const SuccessComponent: React.FC<SuccessComponentProps> = ({ username, onLogout }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 text-white border border-white/20 text-center">
      <div className="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-2">Login Successful!</h2>
      <p className="text-gray-200 text-lg mb-6">Welcome, <span className="font-bold text-indigo-300">{username}</span>!</p>
      <button
        onClick={onLogout}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default SuccessComponent;
