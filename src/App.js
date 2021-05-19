import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Aboutus from "./Components/Aboutus";
//import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { commerce } from "./lib/commerce";
import Checkout from "./Components/Checkout";
import Spinner from "./Components/Spinner";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errormessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
    refreshCart();
  };

  if (!products.length) return <Spinner />;

  //console.log(cart);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
            <Aboutus />
            <Footer />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errormessage}
            />
          </Route>

          <Route path="/">
            <Header totalItems={cart.total_items} />
            <Home products={products} onAddToCart={handleAddToCart} />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
