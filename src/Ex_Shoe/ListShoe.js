import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return (
        <ItemShoe
          handleAddToCart={this.props.handleAddToCart}
          item={item}
          key={index}
        />
      );
    });
  };
  render() {
    return <div className="col-6 row">{this.renderListShoe()}</div>;
  }
}
