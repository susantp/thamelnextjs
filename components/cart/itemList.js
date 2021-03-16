import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../store/actions/cart/cartSelector";

function ItemList({ cartItems }) {
  console.log("show cart item", cartItems);
  return (
    <div className="col-lg-8">
      <div className="cart-table-container">
        <table className="table table-cart">
          <thead>
            <tr>
              <th className="product-col">Product</th>
              <th className="price-col">Price</th>
              <th className="qty-col">Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <React.Fragment>
                <tr key={uuid()} className="product-row">
                  <td className="product-col">
                    <figure className="product-image-container">
                      <Link href="/product">
                        <a className="product-image">
                          <img src={item.product_image} alt="product" />
                        </a>
                      </Link>
                    </figure>
                    <h2 className="product-title">
                      {/* <Link href="/product"> */}
                      <a>{item.name}</a>
                      {/* </Link> */}
                    </h2>
                  </td>
                  <td> {item.product_price} </td>
                  <td>
                    <input
                      value={item.quantity}
                      className="vertical-quantity form-control"
                      type="text"
                    />
                  </td>
                  <td> {item.product_price * item.quantity} </td>
                </tr>
                <tr className="product-action-row">
                  <td colSpan={4} className="clearfix">
                    <div className="float-left">
                      <a className="btn-move">Move to Wishlist</a>
                    </div>
                    {/* End .float-left */}
                    <div className="float-right">
                      <a title="Edit product" className="btn-edit">
                        <span className="sr-only">Edit</span>
                        <i className="icon-pencil" />
                      </a>
                      <a title="Remove product" className="btn-remove">
                        <span className="sr-only">Remove</span>
                      </a>
                    </div>
                    {/* End .float-right */}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="clearfix">
                <div className="float-left">
                  <a href="category.html" className="btn btn-outline-secondary">
                    Continue Shopping
                  </a>
                </div>
                {/* End .float-left */}
                <div className="float-right">
                  <a
                    href="#"
                    className="btn btn-outline-secondary btn-clear-cart"
                  >
                    Clear Shopping Cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-secondary btn-update-cart"
                  >
                    Update Shopping Cart
                  </a>
                </div>
                {/* End .float-right */}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* End .cart-table-container */}
      <div className="cart-discount">
        <h4>Apply Discount Code</h4>
        <form action="#">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter discount code"
              required
            />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" type="submit">
                Apply Discount
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(ItemList);
