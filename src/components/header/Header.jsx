import React from 'react'
import './header.css'

function Header() {
  return (
    <>
    <header>
        <div className="top-bar">
            <div className="contact-info">
                <span className="phone">+ 1235 2355 98</span>
                <span className="email">VEGFOODIES@EMAIL.COM</span>
                <span className="delivery">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
            </div>
        </div>
        <nav className="navbar">
            <div className="logo">VEGEFOODS</div>
            <ul className="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">SHOP</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#" className="cart">[0]</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header