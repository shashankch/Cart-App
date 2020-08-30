import React from 'react';

// * changing to functional component because it does not have any state..
// class Navbar extends React.Component {
//   render() {
//     return (
//       <div style={styles.nav}>
//         <div style={styles.cartIconContainer}>
//           <img
//             style={styles.cartIcon}
//             src='https://image.flaticon.com/icons/svg/833/833314.svg'
//             alt='cart-icon'
//           />

//           <span style={styles.cartCount}>3</span>
//         </div>
//       </div>
//     );
//   }
// }
//!! for every functional component it passes props as default as argument.

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src='https://image.flaticon.com/icons/svg/833/833314.svg'
          alt='cart-icon'
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
    // backgroundColor:'white'
  },
  nav: {
    height: 70,
    background: '#2874F0',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartCount: {
    background: '#ECDA16',
    borderRadius: '50%',
    padding: '2px 4px',
    position: 'absolute',
    right: 5,
    top: -9,
  },
};

export default Navbar;
