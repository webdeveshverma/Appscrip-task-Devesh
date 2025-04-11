import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

// ✅ Custom hook for isMobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

// ✅ Utility: Filter products
function getFilteredProducts(products, filters) {
  return products.filter((product) => {
    const category = product.category.toLowerCase();
    return (
      (filters.electronics && category === 'electronics') ||
      (filters.jewelery && category === 'jewelery') ||
      (filters["men's clothing"] && category === "men's clothing") ||
      (filters["women's clothing"] && category === "women's clothing") ||
      (!filters.electronics &&
        !filters.jewelery &&
        !filters["men's clothing"] &&
        !filters["women's clothing"])
    );
  });
}

// ✅ Utility: Sort products
function getSortedProducts(products, sortOrder) {
  switch (sortOrder) {
    case 'lowToHigh':
      return [...products].sort((a, b) => a.price - b.price);
    case 'highToLow':
      return [...products].sort((a, b) => b.price - a.price);
    case 'newest':
      return [...products].sort((a, b) => b.id - a.id);
    case 'popular':
      return [...products].sort((a, b) => b.rating?.count - a.rating?.count);
    default:
      return products;
  }
}

// ✅ Main Page Component
function Home({ products }) {
  const [filters, setFilters] = useState({
    electronics: false,
    jewelery: false,
    "men's clothing": false,
    "women's clothing": false,
  });

  const [sortOrder, setSortOrder] = useState('recommended');
  const [showFilter, setShowFilter] = useState(false);
  const isMobile = useIsMobile();

  const filteredProducts = getFilteredProducts(products, filters);
  const sortedProducts = getSortedProducts(filteredProducts, sortOrder);

  return (
    <>
      <Head>
        <title>Discover Our Products | Appscrip Task</title>
        <meta
          name="description"
          content="Browse products with filtering and sorting. Assignment for Appscrip using Next.js."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Mettā Muse",
              url: "https://your-netlify-site.netlify.app",
              logo: "https://your-site.com/logo.png",
              sameAs: [
                "https://www.instagram.com/mettamuse",
                "https://www.linkedin.com/company/mettamuse",
              ],
            }),
          }}
        />
      </Head>

      <Header cartCount={2} />

      <section style={{ padding: '40px 0', textAlign: 'center' }}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p style={{ marginTop: '10px', color: '#555' }}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      {/* Product Section Layout */}
      <main
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {/* Conditional Sidebar */}
        {showFilter && (
          <div style={{ width: isMobile ? '100%' : '250px' }}>
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        )}

        {/* Product Grid */}
        <div style={{ flex: 1, padding: isMobile ? '0 10px' : '0 20px' }}>
          <ProductGrid
            products={sortedProducts}
            selectedSort={sortOrder}
            onSortChange={setSortOrder}
            showFilter={showFilter}
            onToggleFilter={() => setShowFilter((prev) => !prev)}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: { products },
  };
}

export default Home;
