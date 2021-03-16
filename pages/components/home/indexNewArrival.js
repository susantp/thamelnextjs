import React from "react";
import { useSelector } from "react-redux";
import { SingleItemComponent } from "../ResuableComponent/SingleItemComponent/SingleItemComponent";
import OwlSlider from "./OwlSlider";

function IndexNewArrival() {
  const { newArrivalProduct } = useSelector((state) => state.newArrivalProduct);
  return (
    <section className="new-products-section">
      <div className="container">
        <h2 className="section-title heading-border ls-20 border-0">
          New Arrivals
        </h2>
        <OwlSlider products={newArrivalProduct} />
        {/* End .featured-proucts */}
        <div
          className="banner banner-big-sale mb-5"
          style={{
            background:
              '#2A95CB center/cover url("assets/images/banners/banner-4.jpg")',
          }}
        >
          <div className="banner-content row align-items-center py-4 mx-0">
            <div className="col-md-9">
              <h2 className="text-white text-uppercase ls-n-20 mb-md-0 px-4">
                <b className="d-inline-block mr-4 mb-1 mb-md-0">Big Sale</b>
                All new kukris items up to 70% off
                <small className="text-transform-none align-middle">
                  Online Purchases Only
                </small>
              </h2>
            </div>
            <div className="col-md-3 text-center text-md-right">
              <a className="btn btn-light btn-white btn-lg mr-3" href="#">
                View Sale
              </a>
            </div>
          </div>
        </div>
        <h2 className="section-title heading-border border-0 mb-5">
          Browse Categories
        </h2>
        <div className="categories-slider owl-carousel owl-theme show-nav-hover nav-outer owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "1920px",
              }}
            >
              <div
                className="owl-item active"
                style={{ width: "300px", marginRight: "20px" }}
              >
                <div className="product-category">
                  <a href="#">
                    <figure>
                      <img
                        src="assets/images/products/categories/category-1.jpg"
                        alt="category"
                      />
                    </figure>
                    <div className="category-content">
                      <h3>Leather Chairs</h3>
                      <span>
                        <mark className="count">0</mark>
                        30 products
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "300px", marginRight: "20px" }}
              >
                <div className="product-category">
                  <a href="#">
                    <figure>
                      <img
                        src="assets/images/products/categories/category-2.jpg"
                        alt="category"
                      />
                    </figure>
                    <div className="category-content">
                      <h3>Incense</h3>
                      <span>
                        <mark className="count">0</mark>
                        50 products
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "300px", marginRight: "20px" }}
              >
                <div className="product-category">
                  <a href="#">
                    <figure>
                      <img
                        src="assets/images/products/categories/category-3.jpg"
                        alt="category"
                      />
                    </figure>
                    <div className="category-content">
                      <h3>Tibetan Bell</h3>
                      <span>
                        <mark className="count">0</mark>
                        33 products
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "300px", marginRight: "20px" }}
              >
                <div className="product-category">
                  <a href="#">
                    <figure>
                      <img
                        src="assets/images/products/categories/category-4.jpg"
                        alt="category"
                      />
                    </figure>
                    <div className="category-content">
                      <h3>Singing Bowls</h3>
                      <span>
                        <mark className="count">0</mark>
                        65 products
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "300px", marginRight: "20px" }}
              >
                <div className="product-category">
                  <a href="#">
                    <figure>
                      <img
                        src="assets/images/products/categories/category-5.jpg"
                        alt="category"
                      />
                    </figure>
                    <div className="category-content">
                      <h3>
                        <kukris />
                      </h3>
                      <span>
                        <mark className="count">0</mark>
                        73 products
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "300px", marginRight: "20px" }}
              >
                <div className="product-category">
                  <a href="#">
                    <figure>
                      <img
                        src="assets/images/products/categories/category-2.jpg"
                        alt="category"
                      />
                    </figure>
                    <div className="category-content">
                      <h3>Incense</h3>
                      <span>
                        <mark className="count">0</mark>
                        34 products
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <button
              type="button"
              role="presentation"
              className="owl-prev disabled"
            >
              <i className="icon-angle-left" />
            </button>
            <button type="button" role="presentation" className="owl-next">
              <i className="icon-angle-right" />
            </button>
          </div>
          <div className="owl-dots disabled" />
        </div>
      </div>
    </section>
  );
}

export default IndexNewArrival;
