import React from "react";
import "./partners.css"; // Import the CSS file for styling

const Partners = () => {
    const partners = [
        { id: 1, logo: "/assets/images/partner-1.webp", alt: "Partner 1" },
        { id: 2, logo: "/assets/images/partner-2.webp", alt: "Partner 2" },
        { id: 3, logo: "/assets/images/partner-3.webp", alt: "Partner 3" },
        { id: 4, logo: "/assets/images/partner-4.webp", alt: "Partner 4" },
        { id: 5, logo: "/assets/images/partner-5.webp", alt: "Partner 5" },
    ];

    return (
        <section className="partners-section">
            <div className="partners-container">
                {partners.map((partner) => (
                    <img
                        key={partner.id}
                        src={partner.logo}
                        alt={partner.alt}
                        className="partner-logo"
                    />
                ))}
            </div>
        </section>
    );
};

export default Partners;
