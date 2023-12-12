import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';

import { authService } from './services/auth.service';

function PrivateRoute({ children }: any) {
  const auth = authService.isAuthenticated();
  return auth ? <>{children}</> : <Navigate to="/" />;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
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
