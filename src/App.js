import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';
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
      products: [],
      loading: true,
    };

    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;

    //       return data;
    //     });
    //     this.setState({
    //       products,
    //       loading: false
    //     });
    //   });

    this.db.collection('products').onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;

        return data;
      });
      this.setState({
        products,
        loading: false,
      });
    });
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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img:
          'https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
        price: 53000,
        qty: 3,
        title: 'LED TV',
      })
      .then((docRef) => {
        console.log('Product has been added', docRef);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className='App'>
        <Navbar count={this.getCartCount()} />
        <button
          onClick={this.addProduct}
          style={{
            margin: 10,
            padding: 10,
            fontSize: 20,
            border: 0,
            cursor: 'pointer',
          }}
        >
          Add a Product
        </button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ marginLeft: 60, padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
