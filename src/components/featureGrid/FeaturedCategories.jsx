import React from 'react';
import './featured-categories.css';

const FeaturedCategories = () => {
    return (
        <section className="featured-categories">
            <div className="featured-grid">
                {/* First Grid */}
                <div className="grid-item">
                    <div className="image-container">
                        <div className="badge">Vegetables</div>
                        <img src={"/assets/images/category-1.webp"} alt="Vegetables" />
                    </div>
                    <div className="image-container">
                        <div className="badge">Fruits</div>
                        <img src={"/assets/images/category-2.webp"} alt="Fruits" />
                    </div>
                </div>

                {/* Second Grid */}
                <div className="grid-item">
                    <div className="center-content">
                        <span className="center-grid-title">Vegetables</span>
                        <p className="center-grid-sub-title">Protect the health of every home</p>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                    <div className="image-container center-grid-image">
                        <img src={"/assets/images/category.webp"} alt="Vegetables"/>
                    </div>
                </div>

                {/* Third Grid */}
                <div className="grid-item">
                    <div className="image-container">
                        <div className="badge">Juices</div>
                        <img src={"/assets/images/category-3.webp"} alt="Juices" />
                    </div>
                    <div className="image-container">
                        <div className="badge">Dried</div>
                        <img src={"/assets/images/category-4.webp"} alt="Dried" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
