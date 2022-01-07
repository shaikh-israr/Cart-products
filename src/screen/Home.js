import React, { useEffect } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import Header from '../components/Header';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addProductData, addToCart } from '../redux/shopping/shopping-actions';

function Home() {
  const product = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();

  const getProduct = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch(addProductData(res.data));
      })
      .catch((err) => console.log(err));
  };

  const addtocart = (id) => {
    dispatch(addToCart(id));
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div style={{ background: '#e1e1e3' }}>
      <Header />
      <div style={{ margin: 20 }}>
        <Grid lg={12} item container spacing={2}>
          {product.map((n, i) => {
            return (
              <Grid item lg={3} sm={6} xs={12} key={i}>
                <Paper style={{ padding: 15 }}>
                  <div style={{ margin: 15, marginBottom: 20 }}>
                    <img
                      src={n.image}
                      style={{ height: 160, width: '100%' }}
                      alt=''
                    />
                    {n.category}
                    <h4>Price:{n.price}</h4>

                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => addtocart(n.id)}
                    >
                      add to cart
                    </Button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
