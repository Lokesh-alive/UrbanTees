import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import productsData from "./data";
import "./App.css";

function App() {

  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    fabric: "",
    sort: "",
    limited: false,
    sustainable: false
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = productsData
    .filter(product =>
      product.name.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter(product =>
      filters.fabric ? product.fabric === filters.fabric : true
    )
    .filter(product =>
      filters.limited ? product.limited : true
    )
    .filter(product =>
      filters.sustainable ? product.sustainable : true
    )
    .sort((a, b) => {
      if (filters.sort === "low") return a.price - b.price;
      if (filters.sort === "high") return b.price - a.price;
      if (filters.sort === "rating") return b.rating - a.rating;
      return 0;
    });
  return (
  <div className="container">
    <Header cartCount={cart.length} />

    <Filters filters={filters} setFilters={setFilters} />

    <div className="products">
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>

    <Footer />
  </div>
);
}

export default App;