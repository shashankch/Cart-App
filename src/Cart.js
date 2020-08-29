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
