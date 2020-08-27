import React from 'react';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 56000,
      title: 'Mobile Phone',
      qty: 1,
      img: '',
    };
    //   this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity = () => {
    // this.state.qty += 1; does not render new value react does not know
    console.log('this.state', this.state);

    // setState form I method by passing object and what to changes and react does shallow merging with state obj.
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    //   II method ----> using callback it does merging 
    //   this way is used when we need previous state..like in case of qty but in case title first method works fine.
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  render() {
    const { price, title, qty } = this.state;
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
              onClick={this.increaseQuantity}
            />
            <img
              alt='decrease'
              className='action-icons'
              src='https://image.flaticon.com/icons/svg/864/864373.svg'
            />
            <img
              alt='delete'
              className='action-icons'
              src='https://image.flaticon.com/icons/svg/1214/1214428.svg'
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default CartItem;
