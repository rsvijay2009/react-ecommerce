import React from 'react';
import './feature-grid.css';
import { FaShippingFast, FaLeaf, FaStar, FaHeadset } from 'react-icons/fa'; // Icons

const FeatureGrid = () => {
    const features = [
        { id: 1, icon: <FaShippingFast />, title: "Free Shipping", subtitle: "On order over $100", color: "#ff6f61" },
        { id: 2, icon: <FaLeaf />, title: "Always Fresh", subtitle: "Product well packaged", color: "#4caf50" },
        { id: 3, icon: <FaStar />, title: "Superior Quality", subtitle: "Quality Products", color: "#ffd700" },
        { id: 4, icon: <FaHeadset />, title: "Support", subtitle: "24/7 Support", color: "#2196f3" }
    ];

    return (
        <div className="feature-grid">
            {features.map((feature) => (
                <div key={feature.id} className="feature-item">
                    <div
                        className="icon-container"
                        style={{ backgroundColor: feature.color }}
                    >
                        {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.subtitle}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureGrid;