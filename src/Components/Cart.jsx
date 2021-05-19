import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
//import "./Checkout.css";
//import CheckoutProduct from "./CheckoutProduct";
import useStyles from "./style/Cart";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      Basket is empty press Shopping for adding new products.
      <br />
      <Button
        className={classes.emptyButton}
        variant="contained"
        color="secondary"
        component={Link}
        to="/"
      >
        Shopping
      </Button>
    </Typography>
  );

  if (!cart.line_items) return <Spinner />;

  const renderCart = () => (
    <>
      <div>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty cart
            </Button>
            <Button
              component={Link}
              className={classes.checkoutButton}
              to="/checkout"
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Container className={classes.wrapper}>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? renderEmptyCart() : renderCart()}
      </Container>
    </>
  );
};

export default Cart;
