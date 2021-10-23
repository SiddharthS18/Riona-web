import React, { Component } from "react";
import {
  StoreProducts,
  DetailProduct,
  TrProducts,
} from "./components/Shop/Data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Products: [],
    TrProducts: TrProducts,
    DetailProduct: DetailProduct,
    cart: [],
    cartSubTotal: 0,
  };

  getItem = (id, type) => {
    const Product = StoreProducts.find(
      (item) => item.id === id && item.type === type
    );
    return Product;
  };
  handleDetail = (id, type) => {
    const Product = this.getItem(id, type);
    this.setState(() => {
      return { DetailProduct: Product };
    });
  };
  getItemsByType = (type) => {
    let tempProducts = [];
    StoreProducts.forEach((item) => {
      if (item.type === type) {
        const Product = item;
        tempProducts = [...tempProducts, Product];
      }
    });
    this.setState(() => {
      return { Products: tempProducts };
    });
  };

  handleItems = (type) => {
    this.getItemsByType(type);
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    this.setState(() => {
      return { cartSubTotal: subTotal };
    });
  };
  addToCart = (id, type) => {
    console.log("Running add to cart");
    let tempProducts = [...this.state.Products];
    const index = tempProducts.indexOf(this.getItem(id, type));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { Products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  increment = (id, type) => {
    console.log("This is increment");
  };

  decrement = (id, type) => {
    console.log("this is decrement");
  };
  removeItem = (id, type) => {
    let tempProducts = StoreProducts;
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id, type));
    console.log(this.getItem(id, type));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleItems: this.handleItems,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
