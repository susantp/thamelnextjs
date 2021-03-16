import React from "react";
import { useDispatch } from "react-redux";
import { addItemCart } from "../../../store/actions/cart/cart";

export default function SingleItemComponent({ product }) {
  const dispatch = useDispatch();
  const {
    name,
    product_image,
    category,
    rating,
    old_price,
    product_price,
    discount_off,
  } = product;

  const handleAddToCart = () => {
    //add product to cart
    console.log("add to cart", product);
    dispatch(addItemCart(product));
  };

  return (
    <div className="product-default">
      <figure>
        <a href="/product">
          <img src={product_image} alt="product" />
        </a>
        <div className="label-group">
          {discount_off ? (
            <div className="product-label label-hot">HOT</div>
          ) : (
            ""
          )}
          {discount_off ? (
            <div className="product-label label-sale">{discount_off} Off</div>
          ) : (
            ""
          )}
        </div>
      </figure>
      <div className="product-details">
        <div className="category-list">
          <a href="#" className="product-category">
            {category}
          </a>
        </div>
        <h3 className="product-title">
          <a href="#">{name}</a>
        </h3>
        <div className="ratings-container">
          <div className="product-ratings">
            <span className="ratings" style={{ width: "80%" }} />
            {/* End .ratings */}
            <span className="tooltiptext tooltip-top" />
          </div>
          {/* End .product-ratings */}
        </div>
        {/* End .product-container */}
        <div className="price-box">
          <del className="old-price">${old_price}</del>
          <span className="product-price">${product_price}</span>
        </div>
        {/* End .price-box */}
        <div className="product-action">
          <a href="#" className="btn-icon-wish">
            <i className="icon-heart" />
          </a>
          <button
            className="btn-icon btn-add-cart"
            data-toggle="modal"
            data-target="#addCartModal"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <a href="#" className="btn-quickview" title="Quick View">
            <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
      {/* End .product-details */}
    </div>
  );
}
