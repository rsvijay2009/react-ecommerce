import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import useCartStore from "../../store/cartStore";

function Header() {
  const [isMobile, setIsMobile] = useState(false); // State for mobile menu
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [userName, setUserName] = useState(""); // State for username
  const navigate = useNavigate();
  const cartLength = useCartStore((state) => state.cartLength);
  console.log(useCartStore())

  useEffect(() => {
    // Check if user details exist in localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      setUserName(JSON.parse(user).username); // Parse and retrieve the username
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleLogoutClick = () => {
    // Clear user details from localStorage
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home page
  };

  const handleCartClick = () => {
    navigate("/checkout"); // Redirect to checkout page
  };

  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span className="phone">+1235 2355 98</span>
          <span className="email">VEGFOODIES@EMAIL.COM</span>
          <span className="delivery">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
        </div>
      </div>
      <nav className="navbar" id="navbar">
        <div className="logo"><a href="/">VEGEFOODS</a></div>
        <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <span>Close</span> : <span>Menu</span>}
        </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li><a href="/">HOME</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a onClick={handleCartClick} className="cart" id="cart">CART[{cartLength}]</a></li>

          {/* Show Login or Logout/Profile Dropdown */}
          {!isLoggedIn ? (
            <li>
              <a onClick={handleLoginClick} className="login">LOGIN</a>
            </li>
          ) : (
            <li className="dropdown">
              <span className="profile-name">Hi, {userName}</span>
              <ul className="dropdown-menu">
                <li><a href="#">Profile</a></li>
                <li><a onClick={handleLogoutClick}>Logout</a></li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
