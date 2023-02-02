import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<SignUp />} />
        <Route path='reset-password' element={<ResetPassword />} />

        {/* <Route element={<RequireAuth />}> */}
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserProfile />} />
        {/* </Route> */}
        <Route path='*' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
