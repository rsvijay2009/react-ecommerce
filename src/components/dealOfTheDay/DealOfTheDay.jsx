import React from 'react';
import './deal-of-the-day.css';

const DealOfTheDay = () => {
    return (
        <section
            className="deal-of-the-day"
            style={{ backgroundImage: "url('/assets/images/bg_3.webp')" }} // Replace with your background image path
        >
            <div className="deal-content">
                <div className="deal-text">
                    <h3>Best Price For You</h3>
                    <h1>Deal of the Day</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia
                    </p>
                    <h2>Spinach</h2>
                    <p className="price">
                        <span className="old-price">$10</span> <span className="new-price">$5</span>
                        <span className="discount-note">only</span>
                    </p>
                    <div className="countdown">
                        <div className="countdown-item">
                            <h3>10</h3>
                            <p>Days</p>
                        </div>
                        <div className="countdown-item">
                            <h3>21</h3>
                            <p>Hours</p>
                        </div>
                        <div className="countdown-item">
                            <h3>56</h3>
                            <p>Minutes</p>
                        </div>
                        <div className="countdown-item">
                            <h3>57</h3>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealOfTheDay;
