import React from "react";
import Slider from "react-slick";
import "./testimonial.css";

const testimonials = [
    {
        id: 1,
        userImage: "/assets/images/person_1.webp", // Replace with actual image path
        content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        userName: "John Doe",
        userPosition: "System Analyst",
    },
    {
        id: 2,
        userImage: "/assets/images/person_2.webp", // Replace with actual image path
        content:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        userName: "Jane Smith",
        userPosition: "Web developer",
    },
    {
        id: 3,
        userImage: "/assets/images/person_3.webp", // Replace with actual image path
        content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        userName: "Emily Johnson",
        userPosition: "Marketing Manager",
    },
    {
        id: 4,
        userImage: "/assets/images/person_4.webp", // Replace with actual image path
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userName: "Michael Brown",
        userPosition: "Interface Designer",
    }
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3, // Show 3 items per slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds per slide
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 items on tablets
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 item on mobile devices
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className="testimonial-section">
                <div className="testimonial-header">
                    <h2>Happy Customers</h2>
                    <h1>Our satisfied customer says</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                </div>
                <Slider {...settings} className="testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div
                            className="testimonial-item"
                            key={testimonial.id}
                        >
                            <div className="user-image-container">
                                <img
                                    src={testimonial.userImage}
                                    alt={testimonial.userName}
                                    className="testimonial-user-image"
                                />
                            </div>
                            <div className="testimonial-content">
                                <p className="pl-4 mb-5 line">{testimonial.content}</p>
                                <h3 className="user-name">{testimonial.userName}</h3>
                                <p className="user-position">{testimonial.userPosition}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <hr className="divider"></hr>
        </>
    );
};

export default Testimonial;
