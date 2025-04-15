import React, { useState } from "react";
import useCartStore from "../../store/cartStore"; // Ensure this is the correct path
import "./checkout.css";

const Checkout = () => {
  const cartItemsFromStore = useCartStore((state) => state.cart); // Zustand store
  const totalAmount = cartItemsFromStore.reduce(
    (total, item) => total + item.quantity * item.price.sale,
    0
  );
  const [items, setItems] = useState(
    cartItemsFromStore.map((item) => ({
      ...item,
      total: item.quantity * item.price.sale, // Initialize total for each item
    }))
  );

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              total: newQuantity * item.price.sale, // Update total dynamically
            }
          : item
      )
    );
  };

  // Calculate grand total for all products
  const calculateGrandTotal = () => {
    return items.reduce((total, item) => total + item.total, 0);
  };
  const handleRemoveItem = (id) => {
    // Remove from local state
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

    // Remove from Zustand store
    useCartStore.getState().removeFromCart(id);
  };
  return (
    <div className="checkout-page">
      {/* Banner Section */}
      <div className="banner">
        <h1>My Cart</h1>
      </div>

      {/* Checkout Cart Items */}
      <div className="cart-section">
        <table className="cart-table">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {items.length === 0 ? (
            <td colSpan={6} className="cart-empty">
            <img src="/assets/images/empty_shopping_cart.gif" alt="Empty shopping cart" className="empty-cart" />
            <a href ="/" className="show-now-link">Shop now</a>
          </td>
      ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td><img src={`/assets/images/${item.image}`} alt={item.name} className="checkout-product-image" /></td>
                <td>{item.name}</td>
                <td>&#8377;{item.price.sale}</td>
                <td>
                  <input type="number"
                    className="txt-box-1"
                    min="1" max="100"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>&#8377;{item.quantity * item.price.sale}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleRemoveItem(item.id)}>Delete</button>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>

      {items.length > 0 && <div className="cards-container">
  {/* Coupon Code Card */}
  <div className="card">
    <h3>Coupon Code</h3>
    <p>Enter your coupon code if you have one</p>
    <input type="text" className="coupon-input" />
    <button className="apply-btn">Apply Coupon</button>
  </div>

  {/* Shipping Address Card */}
  <div className="card">
    <h3>Shipping Address</h3>
    <form className="shipping-form">
      <label>Name</label>
      <input type="text" placeholder="Enter your name" />
      <label>Address</label>
      <input type="text" placeholder="Enter your address" />
      <label>City</label>
      <input type="text" placeholder="Enter your city" />
      <label>Postal Code</label>
      <input type="text" placeholder="Enter your postal code" />
      <label>Country</label>
      <input type="text" placeholder="Enter your country" />
    </form>
    <button className="apply-btn">Estimate</button>
  </div>


  {/* Total Price Card */}
  <div className="card">
    <h3>Total Price</h3>
    <p className="d-flex">
      <span>Sub total</span>
      <span>&#8377;{calculateGrandTotal()}</span>
    </p>
    <p className="d-flex">
      <span>Delivery</span>
      <span>0.00</span>
    </p>
    <p className="d-flex">
      <span>Discount</span>
      <span>0.00</span>
    </p>
    <hr className="cart-total-divider"/>
    <p className="d-flex">
      <span>TOTAL</span>
      <span className="cart-total">&#8377;{calculateGrandTotal()}</span>
    </p>
    <button className="checkout-btn">Proceed to Checkout</button>
  </div>

      </div>


}


    </div>
  );
};

export default Checkout;
