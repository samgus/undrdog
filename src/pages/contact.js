import React, { useState, useRef } from 'react';
import ScrollToTop from '../components/scrollToTop';

import "../styles/contact.scss";

import restaurantSpace from "../images/restaurantSpace.svg"
import busyRestaurant from "../images/busyRestaurant.svg"
import paperClip from "../images/paperClip.svg";

import { emailContact } from '../api/contact';

import check from "../images/check.svg";

const ContactPage = () => {
  const fileRef = useRef()
  const [name, setName] = useState()
  const [fileAdded, setFileAdded] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [success, setSuccess] = useState(false);

  const contactSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    console.log(fileAdded)
    formData.append('file', fileAdded)
    formData.append('name', name)
    formData.append('message', message)
    const result = await emailContact(formData);
    if (result.success) {
      setSuccess(true)
    }
    return false
  }

  const addFile = async (event) => {
    setFileAdded(event.target.files[0])
  }

  
  return (
    <div
      className="contact"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '90vh',
        paddingTop: "100px",
        marginTop: "80px",
        backgroundImage: `url(${busyRestaurant})`
      }}
    >
      <ScrollToTop />
      <div className="contact__left" data-aos="fade-up" data-aos-duration="1500">
        <h1>
        Have a question? Our team is happy to help
        </h1>
        <p>Fill out the form and our team will get back to you within 24 hours.</p>
        <span>info@bettershift.io</span>
      </div>
      <div className="contact__right" data-aos="fade-up" data-aos-duration="1200">
        {success && <div className="contact__success">
             <h2>Contact us</h2>

            <img src={check} />
            <span>Thank you for your submission</span>
            <label>Please allow up to 24 hours for our team to get back to you.</label>
            <button onClick={() => {
              setSuccess(false)
            }}>Submit another</button>
        </div>}
        {!success && <form className="contact__form" onSubmit={contactSubmit}>
          <h2>Contact us</h2>
          <div className="contact__form-control">
            <label>Your name</label>
            <input type="text" placeholder="Tell us how we should address you" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="contact__form-control">
            <label>Your email</label>
            <input type="text" placeholder="How can we get in contact?" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="contact__form-control">
            <label>Your message</label>
            <textarea placeholder="What can we help with?" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <input type="file" onChange={addFile} ref={fileRef}  style={{ display: "none" }} />
          {!fileAdded && <div className="contact__form-attachment" onClick={() => {
            fileRef.current.click()
          }}><img src={paperClip} /><span>Add an attachment</span></div>}
          {fileAdded && <div className="contact__form-attachment" onClick={() => {
            fileRef.current.click()
          }}><span>Added file {fileAdded.name}</span></div>}
          <button className="contact__form-submit">Send message</button>
        </form>}
      </div>
    </div>
  );
};

export default ContactPage;