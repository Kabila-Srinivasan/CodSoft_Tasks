import React, { useState } from 'react';
import './ProductItem.css'; // Import CSS for styling

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items of ${product.name} to cart.`);
    // Implement logic to add the product to the cart
  };

  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <label>
        Quantity:
        <input
          type="number"
          min="0"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
