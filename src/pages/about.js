import React from 'react';
import guyWithCap from '../images/guyWithCap.svg'
import customerSupport from "../images/customerSupport.svg"
import ScrollToTop from '../components/scrollToTop';
import "../styles/about.scss";

import samEmoji from "../images/sam-bitmoji.svg";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight:'90vh',
        paddingTop: "70px",
        marginTop: '50px'
      }}
    >
      <ScrollToTop />       
      <div className="about__top-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="about__top-section__left">
          <h1><span>Building <i>transparency</i> between</span> companies and those who work for them</h1>
        </div>
        <div className="about__top-section__right">
          <p>We’re creating an online space that gives freedom of speech to a group of unheard voices within the restaurant industry. Our aim is to facilitate honest, fruitful, and enduring relationships between employee and employer.</p>
        </div>
      </div>
      <div className="about__image-section">
        <img src={guyWithCap}/>
      </div>
      <div className="about__info-section">
        <div className="about__info-section-content">
          <div className="about__info-section-content__wrapper" data-aos="fade-up" data-aos-duration="1500">
            <div className="about__info-section-content__left">
              <h3>Together we can make a change</h3>
            </div>
            <div className="about__info-section-content__right">
              <h4>Our community is continually growing, all based around one common goal: to ensure your voice is heard.</h4>
              <p>BetterShift is a community platform where employees in hospitality are able to post reviews of their place of work. In turn, this showcases a more accurate description of what it is actually like to work in a potential establishment, before setting your foot in the door. </p>
              <p>If someone is interested in a particular place of employment, with BetterShift, they are now able to see how much money they can  make based on their job title, what benefits are on the table, or how future management / frequent guests might treat them. </p>
              <p>With this type of platform, we are empowering prospective employees with the knowledge on whether an establishment would be an ideal work environment. Here at BetterShift we believe this is an often overlooked part of the industry, and is the first step in giving control back to our people. </p>
            </div>
          </div>
          <div className="about__info-section-content__wrapper" >
            <div className="about__info-section-content__left">
              <div className="about__info-section-content__founder-image">
                <img src={samEmoji} />
                <div className="about__info-section-content__founder-image-info">
                  <span className="about__info-section-content__name">Sam Gustafsson</span>
                  <span className="about__info-section-content__title">Founder & CEO</span>
                </div>
              </div>
            </div>
            <div className="about__info-section-content__right" data-aos="fade-up" data-aos-duration="2000">
              <h3>“Where we work plays into our well-being, happiness, and self-worth in our everyday lives. <br /><br /> Let’s create a community where we promote a healthy and lucrative work environment within the service industry.“</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about__info-section__customer-service" style={{ backgroundImage: `url(${customerSupport})`}}>
        <div className='about__info-section__customer-service__left'>
          <h2>Have a question? Our team is happy to help</h2>
          <p>Ask about how you can get started -- our highly trained reps are standing by, ready to help.</p>
          <button onClick={() => {
            navigate("/contact")
          }}>Contact us</button>
        </div>
        <div className='about__info-section__customer-service__right'></div>
      </div>
    </div>
  );
};

export default About;