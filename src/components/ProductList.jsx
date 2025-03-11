import React, { useEffect, useState } from 'react';
import '../styles/ProductList.css';
import Loading from './Loading';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    }

    fetchProducts();
  }, []);

  if (loading) return <Loading />

  
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          {/* <p className="product-description">{product.description}</p> */}
          <p className="product-price">${product.price}</p>
          <button className="buy-btn">Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList