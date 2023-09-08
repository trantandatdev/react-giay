import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./Data.js";
export default class CartShoe extends Component {
  renderCart = () => {
    let { cart } = this.props;
    return cart.map((item, index) => {
      let { name, price, image, soLuong, id } = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img width={100} src={image} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(id, GIAM_SO_LUONG);
              }}
              className="btn btn-dark"
            >
              -
            </button>
            <strong className="mx-3">{soLuong}</strong>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(id, TANG_SO_LUONG);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    );
  }
}
