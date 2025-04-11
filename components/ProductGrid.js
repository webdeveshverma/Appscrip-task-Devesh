import React from 'react';
import styles from './ProductGrid.module.css';
import { Heart, HeartOff } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '/store/slices/wishlistSlice';

const ProductGrid = ({
  products,
  selectedSort,
  onSortChange,
  showFilter,
  onToggleFilter,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isLiked = (id) => wishlist.includes(id);
  const handleToggle = (id) => dispatch(toggleWishlist(id));

  return (
    <section className={styles.wrapper}>
      <div className={styles.topBar}>
        <span>{products.length || 0} ITEMS</span>
        <button className={styles.filterToggle} onClick={onToggleFilter}>
          {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
        </button>
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

            <button
              onClick={() => handleToggle(product.id)}
              style={{
                background: 'none',
                border: 'none',
                marginTop: 8,
                cursor: 'pointer',
              }}
              aria-label="Toggle Like"
            >
              {isLiked(product.id) ? (
                <Heart fill='red' color="red" size={20} />
              ) : (
                <Heart color="gray" size={20} />
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;