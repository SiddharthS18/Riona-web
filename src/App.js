import "./App.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Login from "./components/Login Register/Login";
import Register from "./components/Login Register/Register";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Shop/ProductList";
import ProductDetails from "./components/Shop/ProductDetails";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Cart" component={Cart} />
        <Route path="/About" component={About} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/ProductDetails" component={ProductDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
