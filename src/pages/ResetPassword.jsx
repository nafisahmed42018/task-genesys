import React from 'react';
import Announcement from '../components/announcement/Announcement';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ResetPasswordForm from '../components/resetPassword/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <ResetPasswordForm />
      <Footer />
    </>
  );
};

export default ResetPassword;
