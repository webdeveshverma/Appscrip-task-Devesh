// components/Header.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>LOGO</div>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>

        <div className={styles.actions}>
          <span>🔍</span>
          <span>🧡 {wishlistCount}</span>
          <span>👤</span>
          <span>ENG ▼</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
