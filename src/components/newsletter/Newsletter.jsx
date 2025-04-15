import React from "react";
import "./news-letter.css";

const Newsletter = () => {
    return (
        <section className="newsletter-container">
            <div className="newsletter-grid">
                {/* Left Text Grid */}
                <div className="grid-left">
                    <h1 className="newsletter-title">Subscribe to our Newsletter</h1>
                    <p className="newsletter-subtitle">Get e-mail updates about our latest shops and special offers</p>
                </div>

                {/* Right Input Grid */}
                <div className="grid-right">
                    <form className="subscribe-form">
                        <input
                            type="email"
                            className="email-input"
                            placeholder="Enter email address"
                        />
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
