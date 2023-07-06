import React, { useState } from 'react';
import "./contact-form.css";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // You can send the form data to a backend API or do other things with it here.
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        Your name:
        <input className='input textarea' placeholder='Tell us how we should address you' type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label className='label'>
        Your email:
        <input className='input textarea' placeholder='How can we get in contact with you?' type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label className='label'>
        Your message:
        <textarea className='input textarea' placeholder='What can we help with?' value={message} onChange={handleMessageChange} />
      </label>
      <br />
      <label>Add an attactment</label>
      <button className='button' type="submit">Send message</button>
    </form>
  );
}

export default ContactForm;
