import React from 'react';
import ContactForm from '@/components/ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Contact me',
  description: 'Send your message',
};

const ContactPage = () => {
  return (
    <>
      <ContactForm />
      <ToastContainer />
    </>
  );
};

export default ContactPage;
