import React from "react";
import "./HowToAvailOffers.css";

const HowToAvailOffers = () => {
  return (
    <div className="offers-container">
      <h2 className="offers-title">How to Avail Offers</h2>
      <div className="timeline">
        {/* Step 1 */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Step 1</h3>
            <p>
              Drop by our physical store at Urban Clothe to browse our latest
              collections and get personalized style advice.
            </p>
          </div>
          <div className="timeline-icon active-icon">
            <span>🚀</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="timeline-item right">
          <div className="timeline-icon active-icon">
            <span>🚀</span>
          </div>
          <div className="timeline-content">
            <h3>Step 2</h3>
            <p>
              Reach out by phone at +92 313 7265181 for quick assistance, order
              inquiries, or help with sizing.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Step 3</h3>
            <p>
              Have a question or need support? Email us at{" "}
              <a href="mailto:urbanclothe@gmail.com">urbanclothe@gmail.com</a>,
              and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="timeline-icon">
            <span>🚀</span>
          </div>
        </div>
      </div>
      <div className="contact-button">
        <button>Get In Touch →</button>
      </div>
    </div>
  );
};

export default HowToAvailOffers;