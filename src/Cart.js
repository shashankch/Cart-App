import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 56000,
          title: 'Fitness Band',
          qty: 1,
          img: '',
          id: 1,
        },
        {
          price: 56000,
          title: 'SmartPhone',
          qty: 10,
          img: '',
          id: 2,
        },
        {
          price: 56000,
          title: 'Laptop',
          qty: 5,
          img: '',
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

  render() {
    // const arr = [1, 2, 3, 4, 5];
    const { products } = this.state;
    return (
      <div className='cart'>
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
              // func={() => console.log('passed func')}
              // isloggedin={false}
              // jsx={<h1>Test jsx passed</h1>}
              // comp={<CartItem />}
            />
          );
        })}

        {/* <CartItem  qty={1} price={99} title={'watch'} img={''}/>
        <CartItem /> */}
        {/* {arr.map((item) => {
          return item + 5;

        })} */}
      </div>
    );
  }
}

export default Cart;
