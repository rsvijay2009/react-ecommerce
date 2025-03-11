import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="cart-spinner">
        🛒
      </div>
      <p className="loading-text">Fetching the best deals for you...</p>
    </div>
  );
};

export default Loading;
