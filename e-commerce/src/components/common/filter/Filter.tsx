import React, { useState } from "react";
import styles from "./Filter.module.scss";

interface FilterProps {
  brands: string[];
  categories: string[];
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  brand: string;
  sortBy: string;
  minPrice: number;
  maxPrice: number;
  category: string;
  searchTerm: string; // New filter property for search term
}

const Filter: React.FC<FilterProps> = ({ brands, categories, onFilterChange }) => {
  const [brand, setBrand] = useState("All Brands");
  const [sortBy, setSortBy] = useState("None");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const handleApplyFilters = () => {
    onFilterChange({ brand, sortBy, minPrice, maxPrice, category, searchTerm });
  };

  const handleResetFilters = () => {
    setBrand("All Brands");
    setSortBy("None");
    setMinPrice(0);
    setMaxPrice(1000);
    setCategory("All Categories");
    setSearchTerm("");
    onFilterChange({
      brand: "All Brands",
      sortBy: "None",
      minPrice: 0,
      maxPrice: 1000,
      category: "All Categories",
      searchTerm: ""
    });
  };

  return (
    <div className={styles.filterContainer}>
      <h2>Filter Products</h2>
      <div className={styles.filterGroup}>
        <label htmlFor="brand">Brand</label>
        <select id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option>All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="sortBy">Sort By</label>
        <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>None</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label>Price Range</label>
        <div className={styles.priceRange}>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            min="0"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            max="1000"
          />
        </div>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
        />
      </div>
      <div className={styles.filterActions}>
        <button onClick={handleApplyFilters}>Apply Filters</button>
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
