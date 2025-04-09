// components/ProductGrid.js
import React from 'react';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ products, selectedSort, onSortChange }) => {
    return (
      <section className={styles.wrapper}>
        <div className={styles.topBar}>
          <span>{products.length || 0} ITEMS</span>
          <button className={styles.filterToggle}>SHOW FILTER</button>
          <select
            className={styles.sortDropdown}
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="highToLow">PRICE: HIGH TO LOW</option>
            <option value="lowToHigh">PRICE: LOW TO HIGH</option>
          </select>
        </div>
  
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <p className={styles.name}>{product.title}</p>
              <p className={styles.note}>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default ProductGrid;
