import React from 'react';

class ProductList extends React.Component {
  state = {
    products: [],
    page: 0,
    intervalId: null,
  };

  componentDidMount() {
    this.fetchProducts();
    const intervalId = setInterval(() => {
      console.log('Component is alive at', new Date().toLocaleTimeString());
    }, 5000);
    this.setState({ intervalId });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchProducts();
    }
  }

  async componentWillUnmount() {
    clearInterval(this.state.intervalId);
    console.log('Component unmounted and interval cleared');
  }

  fetchProducts = async () => {
    const limit = 6;
    const skip = this.state.page * limit;
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const data = await res.json();
      this.setState({ products: data.products });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  handleNext = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  handlePrev = () => {
    if (this.state.page > 0) {
      this.setState((prev) => ({ page: prev.page - 1 }));
    }
  };

  render() {
    return (
      <div className="product-container">
        <h1 className="heading">Paginated Products</h1>
        <div className="products-grid">
          {this.state.products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={this.handlePrev} disabled={this.state.page === 0}>
            Prev
          </button>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default ProductList;
