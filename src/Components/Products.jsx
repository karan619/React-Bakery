import React from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import ProductCard from "./ProductCard";
import useStyles from "./style/ProductSyle";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Products;
