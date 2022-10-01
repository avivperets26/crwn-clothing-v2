import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
