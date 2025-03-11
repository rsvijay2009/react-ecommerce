import { useState } from 'react';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <a href="/">Shop<span>Smart</span></a>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <a href="/" className="nav-link">Home</a>
        <a href="/products" className="nav-link">Products</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav>

      {/* Icons */}
      <div className="header-icons">
        <FaShoppingCart className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;
