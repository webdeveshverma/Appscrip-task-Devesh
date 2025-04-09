import React from 'react';
import styles from './FilterSidebar.module.css';

const FilterSidebar = ({ filters, setFilters }) => {
  // Handler for checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <aside className={styles.sidebar}>
      <h2>Filters</h2>
      <div className={styles.filterSection}>
        <h3>Category</h3>
        <label>
          <input
            type="checkbox"
            name="electronics"
            checked={filters.electronics}
            onChange={handleCheckboxChange}
          />
          Electronics
        </label>
        <label>
          <input
            type="checkbox"
            name="jewelery"
            checked={filters.jewelery}
            onChange={handleCheckboxChange}
          />
          Jewelery
        </label>
        <label>
          <input
            type="checkbox"
            name="men's clothing"
            checked={filters["men's clothing"]}
            onChange={handleCheckboxChange}
          />
          Men's Clothing
        </label>
        <label>
          <input
            type="checkbox"
            name="women's clothing"
            checked={filters["women's clothing"]}
            onChange={handleCheckboxChange}
          />
          Women's Clothing
        </label>
      </div>
      {/* Additional filter sections can be added here */}
    </aside>
  );
};

export default FilterSidebar;
