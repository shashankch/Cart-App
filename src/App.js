import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';

// function App() {
//   return (
//     <div className='App'>
//       <Navbar />
//       <Cart />
//     </div>
//   );
// }
// ! converting to class component because we are moving state from cart component to App comp.abs
// ** this is make state available to both navbar and cart comp because they are siblings and App is the common parent(ancestor)
// so by this we can pass state using props..

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 3000,
          title: 'Fitness Band',
          qty: 1,
          img:
            'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
          id: 1,
        },
        {
          price: 56000,
          title: 'SmartPhone',
          qty: 1,
          img:
            'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 2,
        },
        {
          price: 222000,
          title: 'Laptop',
          qty: 1,
          img:
            'https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log('pls increase qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      // products: products,
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log('pls increase qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      // products: products,
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); //[{}]
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    });

    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className='App'>
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ marginLeft:60, padding: 10, fontSize: 20 }}>
        
          TOTAL:  {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
