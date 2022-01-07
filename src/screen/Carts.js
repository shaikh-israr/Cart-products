import { Button, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { removeFromCart } from '../redux/shopping/shopping-actions';

function Carts({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalItem(items);
    setTotalPrice(price);
  }, [cart, totalItem, totalPrice, setTotalPrice, setTotalItem]);

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '70%', padding: 20 }}>
          <Paper style={{ padding: 20 }}>
            <h3>Cart</h3>
            {cart.map((n, i) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    margin: 20,
                  }}
                  key={i}
                >
                  <img
                    src={n.image}
                    style={{ height: 150, borderRadius: 8 }}
                    alt=''
                  />
                  <div
                    style={{
                      margin: 5,
                      marginLeft: 15,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div>{n.title}</div>
                    <div>{n.description}</div>
                    <div>
                      <h4>qty:{n.qty}</h4>
                      <h4>price: {n.price}</h4>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant='outlined'
                      onClick={() => removeProduct(n.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })}
          </Paper>
        </div>
        <div style={{ width: '30%', padding: 20 }}>
          <Paper style={{ padding: 20 }}>
            <div>
              <h2>Cart Summary</h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <span>Total:( {`${totalItem} Item`})</span>
                <h4>{totalPrice}</h4>
              </div>
              <Button variant='contained' color='primary'>
                Proceed to Checkout
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Carts);
