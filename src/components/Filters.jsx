import React from "react";

function Filters({ filters, setFilters }) {

  const handleFabricChange = (fabric) => {
    if (filters.fabric.includes(fabric)) {
      setFilters({
        ...filters,
        fabric: filters.fabric.filter(f => f !== fabric)
      });
    } else {
      setFilters({
        ...filters,
        fabric: [...filters.fabric, fabric]
      });
    }
  };

  const clearFilters = () => {
    setFilters({
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
  };

  return (
    <div className="filters-container">

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      {/* 👕 Fabric Multi Select */}
      <div className="fabric-section">
        <p>Fabric:</p>

        {["Cotton", "Linen", "Hemp"].map(fabric => (
          <label key={fabric}>
            <input
              type="checkbox"
              checked={filters.fabric.includes(fabric)}
              onChange={() => handleFabricChange(fabric)}
            />
            {fabric}
          </label>
        ))}
      </div>

      {/* 📂 Category */}
      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="">All Categories</option>
        <option value="Streetwear">Streetwear</option>
        <option value="Casual">Casual</option>
        <option value="Premium">Premium</option>
      </select>

      {/* 💰 Price Range */}
      <input
        type="number"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={(e) =>
          setFilters({ ...filters, minPrice: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: e.target.value })
        }
      />

      {/* ⭐ Rating */}
      <select
        value={filters.minRating}
        onChange={(e) =>
          setFilters({ ...filters, minRating: e.target.value })
        }
      >
        <option value="">Minimum Rating</option>
        <option value="4">4★ & Above</option>
        <option value="3">3★ & Above</option>
      </select>

      {/* 🎯 Discount */}
      <select
        value={filters.discount}
        onChange={(e) =>
          setFilters({ ...filters, discount: e.target.value })
        }
      >
        <option value="">Discount</option>
        <option value="10">10% & Above</option>
        <option value="20">20% & Above</option>
        <option value="30">30% & Above</option>
      </select>

      {/* 🏷 Limited */}
      <label>
        <input
          type="checkbox"
          checked={filters.limited}
          onChange={(e) =>
            setFilters({ ...filters, limited: e.target.checked })
          }
        />
        Limited Edition
      </label>

      {/* 🌱 Sustainable */}
      <label>
        <input
          type="checkbox"
          checked={filters.sustainable}
          onChange={(e) =>
            setFilters({ ...filters, sustainable: e.target.checked })
          }
        />
        Sustainable
      </label>

      {/* 📦 In Stock */}
      <label>
        <input
          type="checkbox"
          checked={filters.inStock}
          onChange={(e) =>
            setFilters({ ...filters, inStock: e.target.checked })
          }
        />
        In Stock
      </label>

      {/* 🧹 Clear Button */}
      <button onClick={clearFilters}>
        Clear All Filters
      </button>

    </div>
  );
}

export default Filters;