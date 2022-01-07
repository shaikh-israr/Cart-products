import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Badge,
} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
}));

function Header({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  const classes = useStyles();
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.root}>
            <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
              <div>Home</div>
            </Link>
            <Link to='cart' style={{ color: '#fff' }}>
              <IconButton color='inherit'>
                <Badge badgeContent={cartCount} color='secondary'>
                  <ShoppingCartOutlinedIcon
                    style={{ width: '28px', height: '28px' }}
                  />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
