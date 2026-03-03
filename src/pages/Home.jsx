import { useState } from "react";
import products from "../data/products";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";

function Home() {
  const [filters, setFilters] = useState({});

  const filteredProducts = products.filter(p =>
    (!filters.category || p.category === filters.category) &&
    (!filters.fabric || p.fabric === filters.fabric) &&
    (!filters.limitedEdition || p.limitedEdition === true) &&
    (!filters.sustainable || p.sustainable === true)
  );

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid">
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;