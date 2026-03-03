function Filters({ filters, setFilters }) {
  return (
    <div className="filters">

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setFilters({ ...filters, fabric: e.target.value })
        }
      >
        <option value="">All Fabrics</option>
        <option value="Cotton">Cotton</option>
        <option value="Linen">Linen</option>
        <option value="Hemp">Hemp (Rare)</option>
      </select>

      <select
        onChange={(e) =>
          setFilters({ ...filters, sort: e.target.value })
        }
      >
        <option value="">Sort</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>

      <label>
        <input
          type="checkbox"
          onChange={(e) =>
            setFilters({ ...filters, limited: e.target.checked })
          }
        />
        Limited
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(e) =>
            setFilters({ ...filters, sustainable: e.target.checked })
          }
        />
        Sustainable
      </label>

    </div>
  );
}

export default Filters;