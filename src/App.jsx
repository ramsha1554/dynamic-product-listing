import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { fetchProducts, fetchCategories } from './services/api';
import { mockProducts } from './utils/mockProducts';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevant');

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [productsData, categoriesData] = await Promise.all([
        fetchProducts(),
        fetchCategories()
      ]);
      setProducts([...productsData, ...mockProducts]);
      setCategories(['all', ...categoriesData]);
    } catch (err) {
      setError(err.message || 'Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter and Sort Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // 'relevant' (default API order)
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-fade-in">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Filter:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${selectedCategory === cat
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-200 scale-105'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[200px]">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary-400 outline-none cursor-pointer w-full"
            >
              <option value="relevant">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Content Area */}
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} onRetry={loadData} />
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-800">
                {selectedCategory === 'all' ? 'Featured Products' : `${selectedCategory}`}
                <span className="ml-3 text-sm font-medium text-slate-400">({filteredProducts.length} results)</span>
              </h2>
            </div>
            <ProductList products={filteredProducts} />
          </>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">DynamicStore</h3>
              <p className="text-sm leading-relaxed">Experience a revolution in online shopping with our curated selection of premium products from across the globe.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Stay Connected</h3>
              <p className="text-sm mb-4">Join our newsletter for exclusive offers and updates.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary-500 outline-none" />
                <button className="bg-primary-600 text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-primary-500 transition-all">Join</button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
            &copy; {new Date().getFullYear()} DynamicStore. Designed by Ramsha
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
