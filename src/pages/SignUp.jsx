import React from 'react';
import Announcement from '../components/announcement/Announcement';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import SignUpForm from '../components/signup/SignUpForm';
const SignUp = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <SignUpForm />
      <Footer />
    </>
  );
};

export default SignUp;
