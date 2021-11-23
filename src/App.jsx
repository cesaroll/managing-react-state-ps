import React, {useState} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);


  const addToCart = (id, sku) => {
    setCart((items) => {
      const itemInCart = items.find(i => i.sku === sku);
      if (itemInCart) {
        // Return new array with the matching item replaced
        return items.map( (i) =>
          i.sku === sku ? {...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Return new array with the new item appended
        return [...items, {id, sku, quantity: 1}];
      }
    });
  };

  const updateQuantity = (sku, quantity) => {
    setCart((items) => {
      return items.map(i => i.sku === sku ? {...i, quantity} : i );
    });
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>}/>
            <Route path="/:category" element={<Products/>}/>
            <Route path="/:category/:id" element={<Detail addToCart={addToCart}/>} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity}/>}/>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
