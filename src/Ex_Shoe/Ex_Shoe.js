import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from "./Data";

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: {},
  };
  handleAddToCart = (shoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }
    this.setState({ cart: cloneCart });
  };

  handleRemove = (idShoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
  };
  handleChangeQuantity = (idShoe, option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    option == TANG_SO_LUONG && cloneCart[index].soLuong++;
    option == GIAM_SO_LUONG &&
      cloneCart[index].soLuong-- &&
      cloneCart[index].soLuong == 0 &&
      this.handleRemove(idShoe);

    this.setState({
      cart: cloneCart,
    });
  };
  handleDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <CartShoe
            handleChangeQuantity={this.handleChangeQuantity}
            handleRemove={this.handleRemove}
            cart={this.state.cart}
          />
          <ListShoe
            list={this.state.shoeArr}
            handleAddToCart={this.handleAddToCart}
            handleDetail={this.handleDetail}
          />
        </div>
        <DetailShoe detail={this.state.detail}/>
      </div>
    );
  }
}
