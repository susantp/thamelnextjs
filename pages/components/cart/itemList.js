import React from "react";

export default function ItemList() {
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
            <tr className="product-row">
              <td className="product-col">
                <figure className="product-image-container">
                  <a href="product.html" className="product-image">
                    <img
                      src="assets/images/products/product-4.jpg"
                      alt="product"
                    />
                  </a>
                </figure>
                <h2 className="product-title">
                  <a href="product.html">Men Watch</a>
                </h2>
              </td>
              <td>$17.90</td>
              <td>
                <input className="vertical-quantity form-control" type="text" />
              </td>
              <td>$17.90</td>
            </tr>
            <tr className="product-action-row">
              <td colSpan={4} className="clearfix">
                <div className="float-left">
                  <a href="#" className="btn-move">
                    Move to Wishlist
                  </a>
                </div>
                {/* End .float-left */}
                <div className="float-right">
                  <a href="#" title="Edit product" className="btn-edit">
                    <span className="sr-only">Edit</span>
                    <i className="icon-pencil" />
                  </a>
                  <a href="#" title="Remove product" className="btn-remove">
                    <span className="sr-only">Remove</span>
                  </a>
                </div>
                {/* End .float-right */}
              </td>
            </tr>
            <tr className="product-row">
              <td className="product-col">
                <figure className="product-image-container">
                  <a href="product.html" className="product-image">
                    <img
                      src="assets/images/products/product-3.jpg"
                      alt="product"
                    />
                  </a>
                </figure>
                <h2 className="product-title">
                  <a href="product.html">Computer Mouse</a>
                </h2>
              </td>
              <td>$8.90</td>
              <td>
                <input className="vertical-quantity form-control" type="text" />
              </td>
              <td>$8.90</td>
            </tr>
            <tr className="product-action-row">
              <td colSpan={4} className="clearfix">
                <div className="float-left">
                  <a href="#" className="btn-move">
                    Move to Wishlist
                  </a>
                </div>
                {/* End .float-left */}
                <div className="float-right">
                  <a href="#" title="Edit product" className="btn-edit">
                    <span className="sr-only">Edit</span>
                    <i className="icon-pencil" />
                  </a>
                  <a href="#" title="Remove product" className="btn-remove">
                    <span className="sr-only">Remove</span>
                  </a>
                </div>
                {/* End .float-right */}
              </td>
            </tr>
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
