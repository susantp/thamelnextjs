import React from "react";
import Link from "next/link";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../store/actions/cart/cartSelector";
import { removeItemCart } from "../../store/actions/cart/cart";
import * as utils from "./../../utils/urls";

const HeaderMiddle = ({ cartItemsCount, cartItems, cartItemsTotal }) => {
  const dispatch = useDispatch();

  const removeCartItem = (item) => {
    dispatch(removeItemCart(item));
  };
  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-left col-lg-2 w-auto pl-0">
          <button
            className="mobile-menu-toggler text-primary mr-2"
            type="button"
          >
            <i className="icon-menu" />
          </button>
          <Link href={utils.DEVHOST}>
            <a className="logo">
              <img src="assets/images/logo.png" alt="Porto Logo" />
            </a>
          </Link>
        </div>
        {/* End .header-left */}
        <div className="header-right w-lg-max">
          <div className="header-icon header-icon header-search header-search-inline header-search-category w-lg-max text-right">
            <a href="#" className="search-toggle" role="button">
              <i className="icon-search-3" />
            </a>
            <form action="#" method="get">
              <div className="header-search-wrapper">
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Search..."
                  required
                />
                <div className="select-custom">
                  <select id="cat" name="cat">
                    <option value>All Categories</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                    <option value={4}>List</option>
                  </select>
                </div>
                {/* End .select-custom */}
                <button className="btn icon-search-3 p-0" type="submit" />
              </div>
              {/* End .header-search-wrapper */}
            </form>
          </div>
          {/* End .header-search */}
          <div className="header-contact d-none d-lg-flex pl-4 ml-3 mr-xl-5 pr-4">
            <img
              alt="phone"
              src="assets/images/phone.png"
              width={30}
              height={30}
              className="pb-1"
            />
            <h6>
              Call us now
              <a href="tel:#" className="text-dark font1">
                +1-800.936.0737
              </a>
            </h6>
          </div>
          <a href="login.html" className="header-icon login-link">
            <i className="icon-user-2" />
          </a>
          <a href="#" className="header-icon">
            <i className="icon-wishlist-2" />
          </a>
          <div className="dropdown cart-dropdown">
            <a
              href="#"
              className="dropdown-toggle dropdown-arrow"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <i className="icon-shopping-cart" />
              <span className="cart-count badge-circle">{cartItemsCount}</span>
            </a>
            <div className="dropdown-menu">
              <div className="dropdownmenu-wrapper">
                <div className="dropdown-cart-header">
                  <span> {cartItemsCount} Items</span>
                  <Link href={"/cart"}>
                    <a className="float-right"> View Cart </a>
                  </Link>
                </div>
                {/* End .dropdown-cart-header */}
                <div className="dropdown-cart-products">
                  {cartItems.map(
                    (item) => (
                      <div key={item.id} className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            {item.name}

                            {/* <a href="#">{item.name} </a> */}
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">
                              {item.quantity}{" "}
                            </span>
                            x ${item.product_price}
                          </span>
                        </div>
                        {/* End .product-details */}
                        <figure className="product-image-container">
                          {/* <a href="#" className="product-image">
                            <img
                              src={item.product_image}
                              alt="product"
                              width={80}
                              height={80}
                            />
                          </a> */}
                          <img
                            src={item.product_image}
                            alt="product"
                            width={80}
                            height={80}
                          />
                          <a
                            onClick={() => removeCartItem(item)}
                            style={{ cursor: "pointer" }}
                            className="btn-remove icon-cancel"
                            title="Remove Product"
                          />
                        </figure>
                      </div>
                    )
                    /* End .product */
                  )}
                </div>
                {/* End .cart-product */}
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price float-right">
                    ${cartItemsTotal}
                  </span>
                </div>
                {/* End .dropdown-cart-total */}
                <div className="dropdown-cart-action">
                  <Link href={utils.DEVHOST + "/cart"}>
                    <a className="btn btn-dark btn-block">Checkout</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
  cartItems: selectCartItems,
  cartItemsTotal: selectCartTotal,
});

export default connect(mapStateToProps)(HeaderMiddle);
