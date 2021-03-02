import React from "react";

export default function Summary() {
  return (
    <div className="col-lg-4">
      <div className="cart-summary">
        <h3>Summary</h3>
        <h4>
          <a
            data-toggle="collapse"
            href="#total-estimate-section"
            className="collapsed"
            role="button"
            aria-expanded="false"
            aria-controls="total-estimate-section"
          >
            Estimate Shipping and Tax
          </a>
        </h4>
        <div className="collapse" id="total-estimate-section">
          <form action="#">
            <div className="form-group form-group-sm">
              <label>Country</label>
              <div className="select-custom">
                <select className="form-control form-control-sm">
                  <option value="USA">United States</option>
                  <option value="Turkey">Turkey</option>
                  <option value="China">China</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              {/* End .select-custom */}
            </div>
            {/* End .form-group */}
            <div className="form-group form-group-sm">
              <label>State/Province</label>
              <div className="select-custom">
                <select className="form-control form-control-sm">
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                </select>
              </div>
              {/* End .select-custom */}
            </div>
            {/* End .form-group */}
            <div className="form-group form-group-sm">
              <label>Zip/Postal Code</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            {/* End .form-group */}
            <div className="form-group form-group-custom-control">
              <label>Flat Way</label>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="flat-rate"
                />
                <label className="custom-control-label" htmlFor="flat-rate">
                  Fixed $5.00
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .form-group */}
            <div className="form-group form-group-custom-control">
              <label>Best Rate</label>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="best-rate"
                />
                <label className="custom-control-label" htmlFor="best-rate">
                  Table Rate $15.00
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .form-group */}
          </form>
        </div>
        {/* End #total-estimate-section */}
        <table className="table table-totals">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$17.90</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$0.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Order Total</td>
              <td>$17.90</td>
            </tr>
          </tfoot>
        </table>
        <div className="checkout-methods">
          <a
            href="checkout-shipping.html"
            className="btn btn-block btn-sm btn-primary"
          >
            Go to Checkout
          </a>
          <a href="#" className="btn btn-link btn-block">
            Check Out with Multiple Addresses
          </a>
        </div>
        {/* End .checkout-methods */}
      </div>
      {/* End .cart-summary */}
    </div>
  );
}
