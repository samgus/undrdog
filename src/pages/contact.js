import React from 'react';
import ScrollToTop from '../components/scrollToTop';
import ContactForm from '../components/contact-form/contact-form';

const ContactPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <ScrollToTop />
      <h1>Have a question? Our team is happy to help</h1>
      <h4>Fill out the form and our team will get back to you within 24 hours.</h4>
      <h4>undrdog@gmail.com</h4>

      <ContactForm />
    </div>
  );
};

export default ContactPage;