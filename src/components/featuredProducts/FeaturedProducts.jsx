import React, { useEffect, useState, useRef } from 'react';
import './featured-products.css';
import useCartStore from '../../store/cartStore';

const FeaturedProducts = () => {
    // const products = [
    //     { id: 1, name: "Bell pepper", price: "$120", image: "/assets/images/capsicum.webp" },
    //     { id: 2, name: "Strawberry", price: "$120", image: "/assets/images/strawberry.webp" },
    //     { id: 3, name: "Green beans", price: "$120", image: "/assets/images/green-beans.webp" },
    //     { id: 4, name: "Purple gabbage", price: "$120", image: "/assets/images/cabbage.webp" },
    //     { id: 5, name: "Tomato", price: "$120", image: "/assets/images/tomato.webp" },
    //     { id: 6, name: "Brocolli", price: "$120", image: "/assets/images/brocolli.webp" },
    //     { id: 7, name: "Carrots", price: "$120", image: "/assets/images/carrot.webp" },
    //     { id: 8, name: "Fruit juice", price: "$120", image: "/assets/images/papaya-juice.webp" },
    // ];
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const addToCart = useCartStore((state) => state.addToCart);
    const imageRefs = useRef({}); // Store refs dynamically

    const handleAddToCart = (product) => {
        const img = imageRefs.current[product._id]; // Get the specific ref for this product
        const cart = document.getElementById("cart");
        console.log(img, cart)

        if (img && cart) {
            const imgRect = img.getBoundingClientRect();
            const cartRect = cart.getBoundingClientRect();

            const flyingImg = img.cloneNode();
            flyingImg.style.position = "fixed";
            flyingImg.style.top = `${imgRect.top}px`;
            flyingImg.style.left = `${imgRect.left}px`;
            flyingImg.style.width = `${imgRect.width}px`;
            flyingImg.style.height = `${imgRect.height}px`;
            flyingImg.style.transition = "all 0.8s ease-in-out";
            flyingImg.style.zIndex = 1000;

            document.body.appendChild(flyingImg);

            setTimeout(() => {
                flyingImg.style.top = `${cartRect.top}px`;
                flyingImg.style.left = `${cartRect.left}px`;
                flyingImg.style.width = "50px";
                flyingImg.style.height = "50px";
            }, 0);

            flyingImg.addEventListener("transitionend", function handleTransitionEnd() {
                flyingImg.remove();
                const { _id: id, image, name, description, price } = product;
                const cartItem = { id, image, name, description, price, quantity: 1 };
                console.log(cartItem)
                addToCart(cartItem); // Add product to the cart

                // Clean up the event listener
                flyingImg.removeEventListener("transitionend", handleTransitionEnd);
            });
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/featured-products");
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data.featuredProducts);
                setLoading(false);
            } catch(err) {
                setError(err.message);
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])

    if (loading) {
        return (
            <section className="featured-products">
                <div className="product-grid">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div className="shimmer-card" key={index}></div> // Shimmer effect for loading
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="featured-products">
            <div className="section-header">
                <h2>Featured Products</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product._id}>
                        <div className="product-image">
                            <img ref={(el) => (imageRefs.current[product._id] = el)}
                             src={`/assets/images/${product.image}`}
                             alt={product.name}
                             loading="lazy" />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>&#8377;{product.price.sale}</p>
                            <button
                            onClick={() => handleAddToCart(product)}
                            className="add-to-cart-btn" >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
