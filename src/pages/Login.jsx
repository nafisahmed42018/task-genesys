import React from 'react';
import Announcement from '../components/announcement/Announcement';
import Footer from '../components/footer/Footer';
import LoginForm from '../components/login/LoginForm';
import Navbar from '../components/navbar/Navbar';
const Login = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;
