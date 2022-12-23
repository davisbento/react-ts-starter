import Home from 'components/pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'components/pages/Home';

import 'assets/css/global.css';
import { AuthProvider } from 'providers/AuthProvider';

export default () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
