import React from 'react';

// class CartItem extends React.Component {
// constructor() {
// super();

// this.state = {
//   price: 56000,
//   title: 'Mobile Phone',
//   qty: 1,
//   img: '',
// };
//   this.increaseQuantity = this.increaseQuantity.bind(this);

//   this.testing();
// }

//! this method is used to show that in case of some calls like promise,ajax react does not do batching as normally it does ..
// ! here in this setState methods call become synchronous..
// testing() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('done');
//     }, 5000);
//   });

// promise.then(() => {
//   this.setState({
//     qty: 100,
//   });
// ! so here it becomes synchronous and give the updated value of state as it does not happen in normal call..
// console.log('state', this.state);
// });

// promise.then(() => {
//!  here set state acts like synchronous call so calling thrice will not do batching and re render thrice..
// * here value of qty will be 31 after 3 setstate method call because it all will complete one by one and give updated value synchronusly.
//  this.setState({
//    qty: 10,
//  });
//  this.setState({
//    qty: 10,
//  });
//  this.setState({
//    qty: 10,
//  });
// ! so here it becomes synchronous and give the updated value of state as it does not happen in normal call..
//  console.log('state', this.state);
//  });
// }

// increaseQuantity = () => {
// this.state.qty += 1; does not render new value react does not know
// console.log('this.state', this.state);

// calling setState method more than one time does not render for each setstate method instead
//** REACT DOES BATCHING PROCESS AND DOES SHALLOW MERGING (IT TAKES INTO CONSIDERATION LAST SETSTATE METHOD in FIRST TYPE AND OBJECT PASSED IN IT)
//  this is done to make app more efficient and does not render again....
// setState form I method by passing object and what to changes and react does shallow merging with state obj.
// this.setState({
//   qty: this.state.qty + 1,
// });

//   II method ----> using callback it does merging

//   this way is used when we need previous state..like in case of qty but in case title first method works fine.
// here in second method batching is done and render is done only once even if more than one setstate method call
// ** Here since prevState is there so in case of more than one setstate method call prev state get updated each time so updated value also changes
// ** accordingly in the ui but rendering is only done once due batching done by react..
// this.setState(
// (prevState) => {
//  return {
//   qty: prevState.qty + 1,
// };
//   },
//** , () => {   this is the second call back to get updated value after execution
//   console.log('this.state', this.state);
// }
// );

//** console.log(this.state);  here value of state will not be updated because setstate call is asynchronous
// ** so in this case to get update value we use second callback which return updated state value after that method has completed its execution..
// };

//decreaseQuantity = () => {
//   II method ----> using callback it does merging
//   this way is used when we need previous state..like in case of qty but in case title first method works fine.
//   Objec destructuring..
//   const { qty } = this.state;
//   if (qty === 0) {
//     return;
//   }
//   this.setState((prevState) => {
//     return {
//       qty: prevState.qty - 1,
//     };
//   });
// };

// render() {
// console.log('this.props', this.props);
//  console.log('this.props', this.props.product);
//   const { price, title, qty } = this.props.product;
//  const {
//  product,
//  onIncreaseQuantity,
// onDecreaseQuantity,
// onDeleteProduct,
// } = this.props;
//     return (
//       <div className='cart-item'>
//         {/* {this.props.jsx} */}
//         <div className='left-block'>
//           <img style={styles.image} />
//         </div>
//         <div className='right-block'>
//           <div style={{ fontSize: 25 }}>{title}</div>
//           <div style={{ color: '#777' }}>INR {price}</div>
//           <div style={{ color: '#777' }}>Qty: {qty}</div>
//           <div className='cart-item-actions'>
//             {/* buttons */}
//             <img
//               alt='increase'
//               className='action-icons'
//               src='https://image.flaticon.com/icons/svg/864/864378.svg'
//               onClick={() => {
//                 onIncreaseQuantity(product);
//               }}
//             />
//             <img
//               alt='decrease'
//               className='action-icons'
//               src='https://image.flaticon.com/icons/svg/864/864373.svg'
//               onClick={() => {
//                 onDecreaseQuantity(product);
//               }}
//             />
//             <img
//               alt='delete'
//               className='action-icons'
//               src='https://image.flaticon.com/icons/svg/1214/1214428.svg'
//               onClick={() => {
//                 onDeleteProduct(product.id);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

//! converting to functional component as it does not have any state..

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct,
  } = props;

  return (
    <div className='cart-item'>
      <div className='left-block'>
        <img style={styles.image} />
      </div>
      <div className='right-block'>
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: '#777' }}>INR {price}</div>
        <div style={{ color: '#777' }}>Qty: {qty}</div>
        <div className='cart-item-actions'>
          {/* buttons */}
          <img
            alt='increase'
            className='action-icons'
            src='https://image.flaticon.com/icons/svg/864/864378.svg'
            onClick={() => {
              onIncreaseQuantity(product);
            }}
          />
          <img
            alt='decrease'
            className='action-icons'
            src='https://image.flaticon.com/icons/svg/864/864373.svg'
            onClick={() => {
              onDecreaseQuantity(product);
            }}
          />
          <img
            alt='delete'
            className='action-icons'
            src='https://image.flaticon.com/icons/svg/1214/1214428.svg'
            onClick={() => {
              onDeleteProduct(product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default CartItem;
