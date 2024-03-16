import React, { useState } from 'react';
import './AddCart.css'; // Import CSS for styling

const AddCart = () => {
  // Example cart items (dummy data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Fridge', quantity: 2 },
    { id: 2, name: 'Washing Machine', quantity: 1 },
    // Add other cart items here...
  ]);

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    // Calculate total price based on product prices or other criteria
    // For demonstration purposes, assuming a fixed price of $500 per item
    const pricePerItem = 500;
    return cartItems.reduce((total, item) => total + item.quantity * pricePerItem, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">Quantity: {item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-section">
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Price: ${getTotalPrice()}</p>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddCart;
