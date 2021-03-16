import React from "react";

export default function AddToCartModal() {
  return (
    <div
      className="modal fade"
      id="addCartModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="addCartModal"
      style={{ paddingRight: "17px", display: "block" }}
      aria-modal="true"
    >
      <div className="modal-dialog" role="document">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal-content">
          <div className="modal-body add-cart-box text-center">
            <h4>We are developing the site. Please have patience</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
