import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./hero-banner.css";


const HeroBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true // Enables fading effect
    };

    const images = [
        { id: 1, url: "/assets/images/bg_1.jpg", title: "We serve Fresh Vegetables & Fruits", subtitle: "We deliver organic vegetables & fruits" },
        { id: 2, url: "/assets/images/bg_2.jpg", title: "100% Fresh & Organic Foods", subtitle: "We deliver organic vegetables & fruits" }
    ];

    return (
        <section id="hero-banner">
            <Slider {...settings}>
                {images.map((image) => (
                   <>
                    <div key={image.id} className="slider-item" style={{ backgroundImage: `url(${image.url})`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", height: "100%" }}></div>
                        <div className="container" style={{ textAlign: "center", color: "#fff", position: "relative", top: "40vh" }}>
                            <h1>{image.title}</h1>
                            <h2>{image.subtitle}</h2>
                            <button className="btn btn-primary" style={{ padding: "10px 20px", backgroundColor: "#8BC34A", border: "none", borderRadius: "5px", color: "#fff" }}>View Details</button>
                        </div>
                    </div>
                    </>
                ))}
            </Slider>
        </section>
    );
};

export default HeroBanner;
