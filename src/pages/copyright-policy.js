import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/scrollToTop';
import CustomerSupportSection from '../components/customer-support-section/customer-support-section.component';

const CopyrightPolicy = () => {
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
        <h1 className="docs-page__title">Copyright Policy</h1>
        <p>Last updated July 29, 2023</p>
      </div>

      <div className="docs-page__content" data-aos="fade-up" data-aos-duration="1200">
        <div className="docs-page__content__left">
          <h2>Copyright Policy</h2>
          <p className="content__body">This is the official Copyright Compliance Policy for the BetterShift.com website.</p>
          <br />
          <br />
          <h2>Copyright Policy Summary</h2>
          <p className="content__body">This Copyright Compliance Policy is a part of the terms and conditions which are set forth in our Terms of Use agreement. Any terms that are not defined in this Copyright Compliance Policy shall have the meaning given in the Terms of Use Agreement. Both the Terms of Use Agreement and this Copyright Compliance Policy are legally binding on all users. We take protection of copyrights, both our own and others, very seriously. We therefore employ multiple measures to prevent copyright infringement over this Site and to promptly end any infringement that might occur.</p>
          <div className="content__list">
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-1">1. How to Send a Notice of Copyright Infringement</span>
              <p className="content__body">If you are a copyright owner and believe that material on our website infringes one of your copyrights, you may notify us using this procedure.</p>

              <p className="content__body">In order for us to process your notice of copyright infringement, it must be sent to the agent designated below and must include the information specified below. When we receive a notice under this procedure, we will expeditiously remove or disable access to the material that is claimed to be infringing or to be the subject of infringing activity.</p>

              <p className="content__body">Send your notice of infringement to our designated agent for receiving such notices:</p>

              <p className="content__body">BetterShift LLC<br />
              68 Dean Street<br />
              UNIT 2R<br />
              Brooklyn, NY 11201<br />
              United States of America</p>

              <p className="content__body">Your notice of infringement must be a written communication provided to the agent designated above that includes substantially the following information:</p>
              <ul>
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on our Site is covered by a single notification, a representative list of such works on our Site.</li>
                <li>dentification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material.</li>
                <li>Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted.</li>
                <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              </ul>
              <p className="content__body">WE CAUTION YOU THAT IF YOU KNOWINGLY MISREPRESENT THAT ONLINE CONTENT IS INFRINGING, YOU MAY BE SUBJECT TO HEAVY CIVIL PENALTIES. THESE INCLUDE MONETARY DAMAGES, COURT COSTS, AND ATTORNEYS FEES INCURRED BY US, BY ANY COPYRIGHT OWNER, OR BY ANY COPYRIGHT OWNER'S LICENSEE THAT IS INJURED AS A RESULT OF OUR RELYING UPON YOUR MISREPRESENTATION. YOU MAY ALSO BE SUBJECT TO CRIMINAL PROSECUTION FOR PERJURY.</p>

            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-2">2. How to Send a Counter-notice if Your Posting Was Removed in Response to a Notice of Infringement and You Believe the Posting is Not Infringing</span>
              <p className="content__body">As explained above, if we receive a notice of infringement sent to our designated agent with the information described above, we will expeditiously remove or block access to the material that is claimed to be infringing. We will also send a notification to the user who posted the material, at the email address provided by the user in connection with his or her account with us, telling the user that the material was removed or access to it was blocked because of claimed infringement.</p>

              <p className="content__body">If you are a user who posted material that was removed in response to a notice of infringement and you believe that material was removed due to mistake or misidentification, you may request that we replace the posting by sending us a counter-notice as follows:</p>
              <ol>
                <li>You must send the counter-notice to our designated agent for receiving notices of infringement, whose name and contact information is above.</li>
                <li>Your counter-notice must be a written communication sent and must include substantially the following information:</li>
              </ol>
              <ul>
                <li>A physical or electronic signature of the subscriber (you the user).</li>
                <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled.</li>
                <li>A statement under penalty of perjury that the user has a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.</li>
                <li>The user's name, address, and telephone number, and a statement that the user consents to the jurisdiction of Federal District Court for the judicial district in which the address is located, or if the user's address is outside of the United States, for any judicial district in which the service provider may be found, and that the user will accept service of process from the person who provided notification of copyright infringement or an agent of such person.</li>
              </ul>


              <p className="content__body">When we receive a counter-notice that complies with these requirements, we reserve the right, but not the obligation, to restore the material that was removed after forwarding a copy of the counter-notice to the person who sent the notice of infringement and waiting at least 10 business days. If, during those 10 business days, the person who sent the original notice of infringement notifies us that such person has instituted a suit to seek a court order to restrain the user from infringing activity relating to the material on our website, we will not replace the material. Otherwise, we may repost the material at our discretion.</p> 

              <p className="content__body">However, we retain the right to remove, block access to, or not restore material at any time for any reason without any liability to the posting user. In particular, a user who sends a counter-notice pursuant to this Copyright Compliance Policy expressly acknowledges and agrees that we shall not be liable to the user under any circumstances for declining to replace material.</p>

              <p className="content__body">WE CAUTION YOU THAT IF YOU KNOWINGLY MISREPRESENT THAT ONLINE CONTENT IS NOT INFRINGING, YOU MAY BE SUBJECT TO HEAVY CIVIL PENALTIES. THESE INCLUDE MONETARY DAMAGES, COURT COSTS, AND ATTORNEYS FEES INCURRED BY US, BY ANY COPYRIGHT OWNER, OR BY ANY COPYRIGHT OWNER'S LICENSEE THAT IS INJURED AS A RESULT OF OUR RELYING UPON YOUR MISREPRESENTATION. YOU MAY ALSO BE SUBJECT TO CRIMINAL PROSECUTION FOR PERJURY.</p>
          </div>
          <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-3">3. Repeat Infringer Policy</span>
              <p className="content__body">This policy is in reference to terminating the accounts of repeat infringers. A repeat infringer includes any user who has made two or more Postings for which we receive a notice of infringement under this Copyright Compliance Policy. Each user agrees that if his or her account is terminated pursuant to this Copyright Compliance Policy, the user will not attempt to establish a new account under any name, real or assumed, and further agrees that if the user violates this restriction by opening a new account after being terminated pursuant to this Copyright Compliance Policy, the user shall indemnify and hold us harmless for any and all liability that we may incur therefor.</p>
          </div>
          </div>
          
        </div>
        <div className="docs-page__content__right">
        <div className="docs-page__table">
          <h2 className="docs-page__table__header">Table of contents</h2>
          <ol>
            <li><a href="#table-item-1">How to Send a Notice of Copyright Infringement</a></li>
            <li><a href="#table-item-2">How to Send a Counter-notice if Your Posting Was Removed in Response to a Notice of Infringement and You Believe the Posting is Not Infringing</a></li>
            <li><a href="#table-item-3">Repeat Infringer Policy</a></li>
          </ol>
        </div>
        </div>
      </div>

      <CustomerSupportSection />
    </div>
  );
};

export default CopyrightPolicy;