
import React, { useState, useCallback } from 'react';
import { UserCredentials, View } from './types';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import SuccessComponent from './components/SuccessComponent';

const App: React.FC = () => {
  const [view, setView] = useState<View>('login');
  const [users, setUsers] = useState<UserCredentials[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = useCallback((credentials: UserCredentials) => {
    const user = users.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );
    if (user) {
      setCurrentUser(user.username);
      setView('success');
      setError(null);
    } else {
      setError('Invalid username or password.');
    }
  }, [users]);

  const handleSignup = useCallback((credentials: UserCredentials) => {
    if (users.some((u) => u.username === credentials.username)) {
      setError('Username already exists.');
      return;
    }
    setUsers((prevUsers) => [...prevUsers, credentials]);
    setView('login');
    setError(null);
  }, [users]);

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
    setView('login');
  }, []);

  const switchToSignup = useCallback(() => {
    setView('signup');
    setError(null);
  }, []);

  const switchToLogin = useCallback(() => {
    setView('login');
    setError(null);
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'login':
        return <LoginComponent onLogin={handleLogin} onSwitchToSignup={switchToSignup} error={error} />;
      case 'signup':
        return <SignupComponent onSignup={handleSignup} onSwitchToLogin={switchToLogin} error={error} />;
      case 'success':
        return <SuccessComponent username={currentUser || 'User'} onLogout={handleLogout} />;
      default:
        return <LoginComponent onLogin={handleLogin} onSwitchToSignup={switchToSignup} error={error} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
