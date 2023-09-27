import { useNavigate } from "react-router-dom"
import customerSupport from "../../images/customerSupport.svg"

import "../../styles/docs.scss"

function CustomerSupportSection() {
    const navigate = useNavigate();
    return <div className="docs-page__contact-section" style={{ backgroundImage: `url(${customerSupport})`}}>
    <div className="docs-page__contact-section-content">
      <h3>Have a question? Our team is happy to help</h3>
      <p>Ask about how you can get started -- our highly trained reps are standing by, ready to help.</p>
      <button onClick={() => {
        navigate("/contact")
      }}>Contact us</button>
    </div>
    <div className="docs-page__bg-overlay"></div>

  </div> 
}

export default CustomerSupportSection