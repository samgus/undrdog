import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/scrollToTop';
import customerSupport from "../images/customerSupport.svg"

 
const SiteGuidelines = () => {
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
        <h1 className="docs-page__title">Site Guidelines</h1>
        <p>Last updated July 29, 2023</p>
      </div>
      <div className="docs-page__content">
        <div className="docs-page__content__left">
          <h2>Site Guidelines</h2>
          <p className="content__body">These are the official site guidelines for the bettershift.io website. </p>
          <br /><br />
          <h2>Copyright Policy Notice</h2>
          <p className="content__body">The BetterShift website provides user generated feedback on those within the hospitality and restaurant industry, as well as user generated feedback on the lifestyle and facilities of restaurants.</p>

          <p className="content__body">Ratings should only be posted by users who have worked in the restaurant themselves,  or who are currently working within the restaurant. </p>

          <p className="content__body">BetterShift is NOT the place to report dangerous, illegal or illicit behaviors. If you believe that you, another manager, or a worker is in danger, we strongly advise you to report such incidences directly to your local law enforcement. </p>
          <div className="content__list">
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-1">1. How We Work</span>
              <p className="content__body">BetterShift has a team of moderators who read every rating submitted. We have defined site guidelines to help reinforce our mission and most importantly to ensure our decisions around moderation are 100% consistent, regardless of restaurant owner or worker. </p>

              <p className="content__body">Our moderators are experts on our guidelines and will remove any comment that doesn’t comply.</p>

              <p className="content__body">Did we miss something? If you feel an inappropriate comment should be removed from the site, we want to know. You can flag a comment for re-review and it will immediately be escalated to our moderators. Moderators will determine whether to remove the rating permanently or restore it to the website. Our moderators will never edit a rating to make it comply or remove a rating simply because it is a low score or negative review.</p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-2">2. Site Guidelines</span>
              <ul>
                <li>Be honest in your reviews. You want to be able to trust these reviews when evaluating your work options so we ask that to contribute in the same spirit.</li>
                <li>When you are reviewing a restaurant and/or manager, it’s often helpful to provide both pros and cons. This leads to much more credible and constructive feedback for your peers.</li>
                <li>Reviews should focus specifically on the restaurant and your  experience. Do not comment on a manager’s appearance, dress, age, gender or race.</li>
                <li>Avoid hearsay. We want you to share your individual experience and what you took away from the experience. Don’t speak on behalf of another, encourage others to submit their own reviews.</li>
                <li>This is not a forum for debate. Reviews that specifically reference another review will be removed. If you do not agree with someone’s individual experience, we encourage you to share your own.</li>
                <li>We understand that not all managers are the perfect match for each individual. Tell us how the restaurant or manager wasn’t the best for you in a way that helps others make their own decision.</li>
                <li>Reviews fueled by anger do not reflect well on the author and can be removed for violations such as profanity. Take a minute to step back and make sure your review will genuinely help others understand your experience.</li>
                <li>BetterShift reserves the right to remove ratings that do not contain substantive comments.</li>
                <li>When reading your fellow workers reviews, we encourage you to use your discretion and weigh every review amongst the others. Online reviews should be one of the many resources used when making a decision that affects your academic future. </li>
              </ul>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-3">3. Prohibited Content</span>
              <p className="content__body">Comments that contain the following will be removed:</p>
              <ul>
                <li>Profanity, name-calling, and/or vulgarity, derogatory remarks about religion, ethnicity or race, gender, physical appearance, age, mental and/or physical disabilities;</li>
                <li>Identifiable information about a worker or manager that would allow someone to contact the worker/manager outside of their workplace;</li>
                <li>References to a manager’s or worker’s family, personal life and/or sex life, including sexual innuendos;</li>
                <li>Claims that a manager shows bias for or against a worker or specific group of workers;</li>
                <li>Claims about a managers employment status, including previous employment;</li>
                <li>Claims that a manager or worker engages or has engaged in illegal activities;</li>
                <li>Direct references to other existing comments or comments that have been deleted by our moderators;</li>
                <li>Accusations that the manager is rating him/herself or his/her colleagues.</li>
              </ul>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-4">4. Manager Guidelines</span>
              <p className="content__body">This is an anonymous website where workers can share their work experiences. </p>
              <ul>
                <li>We are unable to provide any data or personal information about the submitter of a review.</li>
                <li>We do not proactively add any manager, place of work, or restaurant to our website, every profile was submitted by our community.</li>
                <li>We are unable to remove a comment simply because it is negative. It will only be removed if it doesn’t comply with our site guidelines.</li>
                <li>BetterShift’s moderation team is unable to prove or disprove details mentioned in a review. </li>
                <li>If you believe that your profile is being spammed or dogpiled, please tell us. You can contact us at Undrdog.com </li>
                <li>While it is against our guidelines for a manager to rate themselves, we recommend for managers to encourage their workers to provide ratings. The more reviews you have, the more representative they will be.</li>
              </ul>
              </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-5">5. Flagging a Rating</span>
              <p className="content__body">If you see a rating that you believe violates these Site Guidelines, please click the "report this rating" at the bottom of the comment and state the problem. Such comments will be evaluated by the Site's personnel. Please do not flag a rating just because you disagree with it.</p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-6">6. Legal</span>
              <p className="content__body">BetterShift occasionally receives removal demands that include threats to sue BetterShift. To date, no one has followed through with a lawsuit against us for our reviews.</p>

              <p className="content__body">The law protects BetterShift from legal responsibility for the content submitted by our users, like the reviews that appear on our site. Specifically, the Communications Decency Act of 1996 (47 U.S.C. Sec. 230) created a federal immunity to any cause of action that would make service providers, like BetterShift, liable for information originating with a third-party user of the service.</p>

              <p className="content__body">The law is clear on this. Anyone who wishes to sue BetterShift for the reviews posted by our members risks penalties imposed by the court. These may include financial sanctions and reimbursement of our attorney's fees for our having to defend against a lawsuit that ignores obvious legal protections for BetterShift.</p>

              <p className="content__body">If, despite our caution, you feel that legal action is the only recourse for you, our address for service of legal process is:</p>

              <p className="content__body">
              BetterShift LLC<br />
              68 Dean Street<br />
              UNIT 2R<br />
              Brooklyn, NY 11201<br />
              United States of America</p>

              <p className="content__body">If you intend to serve documents on BetterShift, please make sure that service is properly effected in the US in accordance with all applicable law. We are not obligated to respond if service is not valid.</p>

              <p className="content__body">These guidelines are provided for informational purposes only and do not constitute legal advice. While we stand by our guidelines, you are encouraged to seek advice from an attorney who is competent in the relevant field of law.</p>
              <br />
              <br />
              <br />
              <p className="content__body">RESERVATION OF RIGHTS<br />
              The Site reserves the right to remove any comments deemed as inappropriate, libelous, defamatory, indecent, vulgar or obscene, pornographic, sexually explicit or sexually suggestive, racially, culturally, or ethnically offensive, harmful, harassing, intimidating, threatening, hateful, objectionable, discriminatory, or abusive, or which may or may not appear to impersonate anyone else or that otherwise violate the Terms of Use Agreement.<br />
              The Site reserves the right to remove, provide to authorities or otherwise take appropriate action regarding comments that threaten violence or bodily harm to another user or professor including, but not limited to, notifying the authorities of your IP address, where available, and the time you rated and taking any action as described in the Terms of Use Agreement and Privacy Policy.</p>
            </div>
            <div className="content__list-item">
              <span className="content__list-item-header" id="table-item-7">7. Reservation of Rights</span>
              <p className="content__body">The Site reserves the right to remove any comments deemed as inappropriate, libelous, defamatory, indecent, vulgar or obscene, pornographic, sexually explicit or sexually suggestive, racially, culturally, or ethnically offensive, harmful, harassing, intimidating, threatening, hateful, objectionable, discriminatory, or abusive, or which may or may not appear to impersonate anyone else or that otherwise violate the Terms of Use agreement.</p>
              <br />
              <p className="content__body">The Site reserves the right to remove, provide to authorities or otherwise take appropriate action regarding comments that threaten violence or bodily harm to another user or manager including, but not limited to, notifying the authorities of your IP address, where available, and the time you rated and taking any action as described in the Terms of Use agreement and Privacy Policy.</p>
            </div>
          </div>
        </div>
        <div className="docs-page__content__right">
        <div className="docs-page__table">
          <h2 className="docs-page__table__header">Table of contents</h2>
          <ol>
            <li><a href="#table-item-1">How We Work</a></li>
            <li><a href="#table-item-2">Site Guidelines</a></li>
            <li><a href="#table-item-3">Prohibited Content</a></li>
            <li><a href="#table-item-4">Manager Guidelines</a></li>
            <li><a href="#table-item-5">Flagging a Rating</a></li>
            <li><a href="#table-item-6">Legal</a></li>
            <li><a href="#table-item-7">Reservation of Rights</a></li>
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

export default SiteGuidelines;