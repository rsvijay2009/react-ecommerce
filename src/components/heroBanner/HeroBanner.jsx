import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./hero-banner.css";

const HeroBanner = () => {
  const settings = {
    dots: false, // Enable dots for navigation
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true // Add fading effect
  };

  const images = [
    { id: 1, url: "/assets/images/bg_1.webp", title: "We serve Fresh Vegetables & Fruits", subtitle: "We deliver organic vegetables & fruits" },
    { id: 2, url: "/assets/images/bg_2.webp", title: "100% Fresh & Organic Foods", subtitle: "We deliver organic vegetables & fruits" }
  ];

  return (
    <section className="hero-banner">
      <Slider {...settings}>
        {images.map((image) => (
            <>
                <div key={image.id} className="slider-item" style={{ backgroundImage: `url(${image.url})` }}>
                    <div className="overlay"></div>
                    <div className="container">
                    <h1 className="hero-banner-heading">{image.title}</h1>
                    <h2 className="hero-banner-sub-heading">{image.subtitle}</h2>
                    <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner;