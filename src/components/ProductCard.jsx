function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <p className="rating">⭐ {product.rating}</p>

      {product.limited && <span className="badge">Limited</span>}
      {product.sustainable && <span className="badge">Sustainable</span>}

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;