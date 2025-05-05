import { useEffect, useState } from 'react';

const usePaginatedProducts = (page, limit = 6) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const skip = page * limit;

      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  return { products, loading, error };
};

export default usePaginatedProducts;
