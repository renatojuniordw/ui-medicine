import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';

import { authService } from './services/auth.service';
import EmailVerificationNotice from './pages/EmailVerification/email-verification-notice';
import EmailConfirmationSuccess from './pages/EmailConfirmationSuccess/email-confirmation-success';

function PrivateRoute({ children }: any) {
  const auth = authService.isAuthenticated();
  const user = JSON.parse(localStorage.getItem('dataUser') ?? '');

  if (!auth) {
    return <Navigate to="/" />;
  }

  if (user && !user.isConfirmedEmail) {
    return <Navigate to="/email-verification" />;
  }

  return <>{children}</>;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/email-verification" element={<EmailVerificationNotice />} />
      <Route
        path="/email-confirmation/:token"
        element={<EmailConfirmationSuccess />}
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
