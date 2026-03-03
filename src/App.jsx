import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {

  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    fabric: [],
    category: "",
    sort: "",
    limited: false,
    sustainable: false,
    inStock: false,
    minPrice: "",
    maxPrice: "",
    minRating: "",
    discount: ""
  });

  // 🔥 Fetch JSON (Local now, Cloud later)
  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        setProductsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = productsData
  .filter(product =>
    product.name.toLowerCase().includes(filters.search.toLowerCase())
  )

  // Fabric multi select
  .filter(product =>
    filters.fabric.length > 0
      ? filters.fabric.includes(product.fabric)
      : true
  )

  // Category
  .filter(product =>
    filters.category ? product.category === filters.category : true
  )

  // Limited
  .filter(product =>
    filters.limited ? product.limited : true
  )

  // Sustainable
  .filter(product =>
    filters.sustainable ? product.sustainable : true
  )

  // In Stock
  .filter(product =>
    filters.inStock ? product.inStock : true
  )

  // Price Range
  .filter(product =>
    filters.minPrice ? product.price >= Number(filters.minPrice) : true
  )
  .filter(product =>
    filters.maxPrice ? product.price <= Number(filters.maxPrice) : true
  )

  // Rating
  .filter(product =>
    filters.minRating ? product.rating >= Number(filters.minRating) : true
  )

  // Discount
  .filter(product =>
    filters.discount ? product.discount >= Number(filters.discount) : true
  )

  // Sorting
  .sort((a, b) => {
    if (filters.sort === "low") return a.price - b.price;
    if (filters.sort === "high") return b.price - a.price;
    if (filters.sort === "rating") return b.rating - a.rating;
    return 0;
  });



  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

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