import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribe}>
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from mettā muse.</p>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 8580</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🌐 USD</p>
          <p className={styles.note}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>

        <div className={styles.column}>
          <h4>FOLLOW US</h4>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.payments}>
            <Image src="https://img.icons8.com/color/48/google-pay.png" alt="GPay" width={48} height={48} />
            <Image src="https://img.icons8.com/color/48/visa.png" alt="Visa" width={48} height={48} />
            <Image src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" width={48} height={48} />
            <Image src="https://img.icons8.com/color/48/amex.png" alt="Amex" width={48} height={48} />
            <Image src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" width={48} height={48} />
            <Image src="https://img.icons8.com/color/48/discover.png" alt="Discover" width={48} height={48} />
          </div>
        </div>
      </div>

      <div className={styles.bottomLine}>
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
