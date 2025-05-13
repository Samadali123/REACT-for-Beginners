// // import React, { useEffect, useState } from 'react';

// // const ProductLists2 = () => {
// //   const [products, setProducts] = useState([]);
// //   const [page, setPage] = useState(0);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       const limit = 6;
// //       const skip = page * limit;
// //       try {
// //         const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
// //         const data = await res.json();
// //         setProducts(data.products);
// //       } catch (err) {
// //         console.error('Error fetching products:', err);
// //       }
// //     };

// //     fetchProducts();
// //   }, [page]);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       console.log('Component running at', new Date().toLocaleTimeString());
// //     }, 5000);

// //     return () => {
// //       clearInterval(intervalId);
// //       console.log('Component unmounted, interval cleared');
// //     };
// //   }, []);

// //   const handleNext = () => {
// //     setPage(prev => prev + 1);
// //   };

// //   const handlePrev = () => {
// //     if (page > 0) setPage(prev => prev - 1);
// //   };

// //   return (
// //     <div className="product-container">
// //       <h1 className="heading">Paginated Products</h1>
// //       <div className="products-grid">
// //         {products.map(product => (
// //           <div className="product-card" key={product.id}>
// //             <img src={product.thumbnail} alt={product.title} />
// //             <h3>{product.title}</h3>
// //             <p>${product.price}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="buttons">
// //         <button onClick={handlePrev} disabled={page === 0}>Prev</button>
// //         <button onClick={handleNext}>Next</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductLists2




// import React, { useEffect, useState } from 'react';

// const ProductLists2 = () => {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const limit = 6;
//       const skip = page * limit;

//       setLoading(true);
//       setError('');
//       try {
//         const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
//         if (!res.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await res.json();
//         setProducts(data.products);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [page]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log('Component running at', new Date().toLocaleTimeString());
//     }, 5000);

//     return () => {
//       clearInterval(intervalId);
//       console.log('Component unmounted, interval cleared');
//     };
//   }, []);

//   const handleNext = () => {
//     setPage(prev => prev + 1);
//   };

//   const handlePrev = () => {
//     if (page > 0) setPage(prev => prev - 1);
//   };

//   return (
//     <div className="product-container">
//       <h1 className="heading">Paginated Products</h1>

//       {loading && <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>}
//       {error && <p style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>{error}</p>}

//       {!loading && !error && (
//         <>
//           <div className="products-grid">
//             {products.map(product => (
//               <div className="product-card" key={product.id}>
//                 <img src={product.thumbnail} alt={product.title} />
//                 <h3>{product.title}</h3>
//                 <p>${product.price}</p>
//               </div>
//             ))}
//           </div>

//           <div className="buttons">
//             <button onClick={handlePrev} disabled={page === 0}>Prev</button>
//             <button onClick={handleNext}>Next</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductLists2;






import React, { useEffect, useState } from 'react';
import usePaginatedProducts from './usePaginated';


const ProductLists2 = () => {
  const [page, setPage] = useState(0);
  const { products, loading, error } = usePaginatedProducts(page, 6);
  const [hello, sethello] = useState(second)
  const [hello2, sethello2] = useState(second)

  
  // useEffect(() => {
  //    alert("helklo")
  
  //   return () => {
  //     alert("bye")
  //   }
  // }, [hello, hello2])
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Component running at', new Date().toLocaleTimeString());
    }, 5000);

    return () => {
      clearInterval(intervalId);
      console.log('Component unmounted, interval cleared');
    };
  }, []);

  const handleNext = () => setPage(prev => prev + 1);
  const handlePrev = () => setPage(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="product-container">
      <h1 className="heading">Paginated Products</h1>

      {loading && <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem' }}>{error}</p>}

      {!loading && !error && (
        <>
          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>

          <div className="buttons">
            <button onClick={handlePrev} disabled={page === 0}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductLists2;
