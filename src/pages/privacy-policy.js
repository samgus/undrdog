import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/scrollToTop';

import "../styles/docs.scss";

import customerSupport from "../images/customerSupport.svg"
const PrivacyPolicy = () => {
  useEffect(() => {
    const hashChange = function () {
      window.scrollTo(window.scrollX, window.scrollY - 100);
      window.history.pushState("", document.title, window.location.pathname
      + window.location.search);
    }

    if(window.location.hash.length > 0) {
        document.querySelector(window.location.hash)?.scrollIntoView(true)
        window.scrollTo(window.scrollX, window.scrollY - 100);  
    }

    window.addEventListener("hashchange", hashChange);
    return () => {
      window.removeEventListener("hashchange", hashChange)
    }
  }, [])

  let navigate = useNavigate(); 
  return (

    <div
      className="docs-page"
      style={{
        marginTop: "80px",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: '90vh'
      }}
      >
      <ScrollToTop />
      <div className="docs-page__header">
        <h1 className="docs-page__title">Privacy Policy</h1>
        <p>Last updated July 29, 2023</p>
      </div>

      <div className="docs-page__content">
        <div className="docs-page__content__left">
          <p className="content__title">The purpose of this Privacy Policy is to help describe how and why we might collect, store, use and/or share your information when using our services. </p>

          <h2>Privacy Policy</h2>
          <p className="content__body">Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies or practices, please do not use our services. If you still have any questions of concerns, please contact us at bettershift23@gmail.com</p>

          <p className="content__body">When you visit, use, or navigate our services, we may process personal information depending on how you interact with BetterShift LLC and the services, the choices you make, and the products and features you use. </p>

          <p className="content__body">We do not process sensitive information or receive any information from third parties. </p>

          <p className="content__body">We only process your information to provide, improve, and administer our services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information only when we have a valid legal reason to do so. </p>
        
          <h2>Privacy Summary</h2>
     
          <p className="content__body">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our tabl of contents below to find the section you are looking for. </p>
          <div className="content__list">
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-1">1. What personal information do we collect?</span>
              <p className="content__body">We collect personal information that you voluntarily provide to us when you register on the services, express an interest in obtaining information about us or our products and services, when you participate in activities on the services, or otherwise when you contact us. </p>

              <p className="content__body">The personal information that we collect depends on the context of your interactions with us and the services, the choices you make, and the products and features you use. The personal information we collect may include names, phone numbers, email addresses, mailing addresses, job titles, usernames, and passwords. </p>

              <p className="content__body">We do not process sensitive information. </p>

              <p className="content__body">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information. </p>

              <p className="content__body">We automatically collect certain information when you visit, us, or navigate the services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our services, and other technical information. This information is primarily needed to maintain the security and operation of our services, and for our internal analytics and reporting purposes. </p>

              <p className="content__body">Like many businesses, we also collect information through cookies and similar technologies. The information we collect include:</p>
              <ul>
                <li><b><i>Log and Usage Data. </i></b>Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our services and which we record in log files. Depending how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports, and hardware settings).</li>
                <li><b><i>Device Data. </i></b> We collect device data such as information about your computer, phone, tablet, or other device you use to access the services. Depending on the device used, this device data may include information such as your IP address, device and application identification numbers, location, browser type, hardware model, internet service provider and/or mobile carrier, operating system, and system configuration information. </li>
                <li><b><i>Location Data. </i></b> We collect location data such as information about your device’s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the services. </li>
              </ul>


            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-2">2. How do we process your information?</span>
              <p className="content__body">We process your personal information for a variety of reasons, depending on how you interact with our services, including:</p>
              <ul>
                <li><b><i>To facilitate account creation and authentication and otherwise manage user accounts.</i></b> We may process your information so you can create and log in to your account, as well as keep your account in working order. </li>
                <li><b><i>To respond to user inquiries/offer support to users.</i></b> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service. </li>
                <li><b><i>To send administrative information to you.</i></b>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information. </li>
                <li><b><i>To request feedback.</i></b> We may process your information when necessary to request feedback and to contact you about your use of our services. </li>
                <li> <b><i>To send you marketing and promotional communications.</i></b> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. </li>
                <li><b><i>To deliver targeted advertising to you.</i></b> May process your information to develop and display personalized content and advertising tailored to your interests, location, and more. </li>
                <li><b><i>To post testimonials. </i></b>We post testimonials on our services that may contain personal information. </li>
                <li><b><i>To protect our services.</i></b> We may process your information as part of our efforts to keep our services safe and secure, including fraud monitoring and prevention. </li>
                <li><b><i>To evaluate and improve our services, products, marketing, and your experience.</i></b> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our services, products, marketing, and your experience. </li>
                <li><b><i>To comply with our legal obligations.</i></b> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights. </li>
              </ul>





            </div>
            <div className="content__list-item">
            <span className="content__list-item-header" id="table-item-3">3. When and with whom do we share your personal information?</span>
              <p className="content__body"> We may need to share your personal information in the following situations:</p>
              <ul>
              <li><b><i>Business Transfers. </i></b>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. </li>
              <li><b><i>When we use Google Maps Platform APIs. </i></b>We may share your information with certain Google Maps Platform APIs (e.g. Google Maps API, Places API). We obtain and store on your device (“cache”) your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document. </li>
              </ul>

            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-4">4. What is our stance on third-party websites?</span>
              <p className="content__body">The services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the services. You should review the policies of such third parties and contact them directly to respond to your questions. </p>

            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-5">5. Do we use cookies and other tracking technologies?</span>
              <p className="content__body">We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our cookie notice.  </p>

            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-6">6. How do we hand your social logins?</span>
              <p className="content__body">Our services offer you the ability to register and log in using you third-party social media account details. Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information your choose to make public on such a social media platform.  </p>
              <p className="content__body">We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review . their privacy notice to understand how the collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps. </p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-7">7. How long do we keep your information?</span>
              <p className="content__body"> We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.  </p>
              <p className="content__body">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. </p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-8">8. Do we collect information from minors?</span>
              <p className="content__body"> We do not knowingly solicit data from or market to children under 18 years of age. By using the services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependents use of the services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under 18, please contact us at bettershift23@gmail.com.</p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-9">9. What are your privacy rights?</span>
              <p className="content__body"> If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority. </p>
              <p className="content__body"> If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner. </p>
              <p className="content__body">If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the “How can you contact us about this notice?” section. </p>
              <p className="content__body">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. </p>
              <p className="content__body"><b>Account Information: </b>If you would at any time like to review or change the information in your account or terminate your account, you can log into your account settings and update your user account, or contact us using the contact information provided. </p>
              <p className="content__body">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements. </p>
              <p className="content__body"><b>Cookies and similar technologies:</b> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our services. You may also opt out of interest-based advertising by advertises on our services. </p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-10">10. Controls for do-not-track features</span>
              <p className="content__body"> Most web browsers and some mobile operating systems and mobile applications include a do-not-track (DNT) feature or setting you can activate to signal your privacy preferences not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signal has been finalized. As such we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. </p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-11">11. Do we make updates to this notice?</span>
              <p className="content__body"> We may update this privacy notice from time to time. The updated version will be indicated by an updated “revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your infromation.  </p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-12">12. How can you contact us about this notice?</span>
              <p className="content__body">If you have questions or comments about this notice, you may email us at bettershift23@gmail.com or by post to:</p>
              <p className="content__body">
              BetterShift LLC<br />
              68 Dean Street<br />
              UNIT 2R<br />
              Brooklyn, NY 11201<br />
              United States of America</p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-13">13. How can you review, update, or delete the data we collect from you?</span>
              <p className="content__body">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a form through the Contact Us page with the title: Data Subject Access Request.</p>

            </div>

          </div>
        </div>
        <div className="docs-page__content__right">
          <div className="docs-page__table">
            <h2 className="docs-page__table__header">Table of contents</h2>
            <ol>
              <li><a href="#table-item-1">What personal information do we collect?</a></li>
              <li><a href="#table-item-2">How do we process your information?</a></li>
              <li><a href="#table-item-3">When and with whom do we share your personal information?</a></li>
              <li><a href="#table-item-4">What is our stance on third-party websites?</a></li>
              <li><a href="#table-item-5">Do we use cookies and other tracking technologies?</a></li>
              <li><a href="#table-item-6">How do we handle your social logins?</a></li>
              <li><a href="#table-item-7">How long do we keep your information?</a></li>
              <li><a href="#table-item-8">Do we collect information from minors?</a></li>
              <li><a href="#table-item-9">What are your privacy rights?</a></li>
              <li><a href="#table-item-10">Controls for do-not-track features</a></li>
              <li><a href="#table-item-11">Do we make updates to this notice?</a></li>
              <li><a href="#table-item-12">How can you contact us about this notice?</a></li>
              <li><a href="#table-item-13">How can you review, update, or delete the data we collect from you?</a></li>
            </ol>
          </div>

        </div>
      </div>

      <div className="docs-page__contact-section" style={{ backgroundImage: `url(${customerSupport})`}}>
        <div className="docs-page__contact-section-content">
          <h3>Have a question? Our team is happy to help</h3>
          <p>Ask about how you can get started -- our highly trained reps are standing by, ready to help.</p>
          <button onClick={() => {
            navigate("/contact")
          }}>Contact us</button>
        </div>
      </div>  
    </div>
  );
};

export default PrivacyPolicy;