import React, { Component } from 'react'
import data from "./../common/data.json";
export default class SideBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = data;
    }
    
    render() {
        const {categories} = this.state;
        return (
            <>
  <div className="sidebar-overlay" />
  <div className="sidebar-toggle">
    <i className="fas fa-sliders-h" />
  </div>
  <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
    <div className="pin-wrapper" style={{ height: "1735.67px" }}>
      <div
        className="sidebar-wrapper"
        style={{ borderBottom: "0px none rgb(119, 119, 119)", width: "280px" }}
      >
        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-2"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-2"
            >
              Categories
            </a>
          </h3>
          <div className="collapse show" id="widget-body-2">
            <div className="widget-body">
              <ul className="cat-list">
                {categories.map((category) => {
                  return (
                    <li>
                      <a href="#">{category.parent}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* End .widget-body */}
          </div>
          {/* End .collapse */}
        </div>
        {/* End .widget */}

        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-3"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-3"
            >
              Price
            </a>
          </h3>
          <div className="collapse show" id="widget-body-3">
            <div className="widget-body">
              <form action="#">
                <div className="price-slider-wrapper">
                  <div
                    id="price-slider"
                    className="noUi-target noUi-ltr noUi-horizontal"
                  >
                    <div className="noUi-base">
                      <div className="noUi-connects">
                        <div
                          className="noUi-connect"
                          style={{
                            transform: "translate(20%, 0px) scale(0.5, 1)",
                          }}
                        />
                      </div>
                      <div
                        className="noUi-origin"
                        style={{ transform: "translate(-80%, 0px)", zIndex: 5 }}
                      >
                        <div
                          className="noUi-handle noUi-handle-lower"
                          data-handle={0}
                          tabIndex={0}
                          role="slider"
                          aria-orientation="horizontal"
                          aria-valuemin={0.0}
                          aria-valuemax={60.0}
                          aria-valuenow={20.0}
                          aria-valuetext={200.0}
                        />
                      </div>
                      <div
                        className="noUi-origin"
                        style={{ transform: "translate(-30%, 0px)", zIndex: 4 }}
                      >
                        <div
                          className="noUi-handle noUi-handle-upper"
                          data-handle={1}
                          tabIndex={0}
                          role="slider"
                          aria-orientation="horizontal"
                          aria-valuemin={30.0}
                          aria-valuemax={100.0}
                          aria-valuenow={70.0}
                          aria-valuetext={700.0}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End #price-slider */}
                </div>
                {/* End .price-slider-wrapper */}
                <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                  <button type="submit" className="btn btn-primary">
                    Filter
                  </button>
                  <div className="filter-price-text">
                    Price:
                    <span id="filter-price-range">$200.00 - $700.00</span>
                  </div>
                  {/* End .filter-price-text */}
                </div>
                {/* End .filter-price-action */}
              </form>
            </div>
            {/* End .widget-body */}
          </div>
          {/* End .collapse */}
        </div>
        {/* End .widget */}
        <div className="widget">
          <h3 className="widget-title">
            <a
              data-toggle="collapse"
              href="#widget-body-6"
              role="button"
              aria-expanded="true"
              aria-controls="widget-body-6"
            >
              Color
            </a>
          </h3>
          <div className="collapse show" id="widget-body-6">
            <div className="widget-body">
              <ul className="config-swatch-list">
                <li className="active">
                  <a href="#" style={{ backgroundColor: "#000" }} />
                  <span>Black</span>
                </li>
                <li>
                  <a href="#" style={{ backgroundColor: "#0188cc" }} />
                  <span>Blue</span>
                </li>
                <li>
                  <a href="#" style={{ backgroundColor: "#81d742" }} />
                  <span>Green</span>
                </li>
                <li>
                  <a href="#" style={{ backgroundColor: "#6085a5" }} />
                  <span>Indigo</span>
                </li>
                <li>
                  <a href="#" style={{ backgroundColor: "#ab6e6e" }} />
                  <span>Red</span>
                </li>
                <li>
                  <a href="#" style={{ backgroundColor: "#ddb373" }} />
                  <span>Brown</span>
                </li>
                <li>
                  <a href="#" style={{ backgroundColor: "#6b97bf" }} />
                  <span>Light-Blue</span>
                </li>
                <li>
                  <a href="#" style={{ backgroundColor: "#eded68" }} />
                  <span>Yellow</span>
                </li>
              </ul>
            </div>
            {/* End .widget-body */}
          </div>
          {/* End .collapse */}
        </div>
        {/* End .widget */}
        <div className="widget widget-featured">
          <h3 className="widget-title">Featured</h3>
          <div className="widget-body">
            <div className="owl-carousel widget-featured-products owl-loaded owl-drag">
              {/* End .featured-col */}
              {/* End .featured-col */}
              <div
                className="owl-stage-outer owl-height"
                style={{ height: "297px" }}
              >
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-474px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: "1424px",
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: "237.333px" }}
                  >
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-13.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "237.333px" }}
                  >
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-13.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: "237.333px" }}
                  >
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-13.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "237.333px" }}>
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-13.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "237.333px" }}
                  >
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-13.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "237.333px" }}
                  >
                    <div className="featured-col">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-13.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/product-8.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="icon-angle-left" />
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="icon-angle-right" />
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
            {/* End .widget-featured-slider */}
          </div>
          {/* End .widget-body */}
        </div>
        {/* End .widget */}
        {/* <div className="widget widget-block">
          <h3 className="widget-title">Custom HTML Block</h3>
          <h5>This is a custom sub-title.</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non
            placerat mi.{" "}
          </p>
        </div> */}
        {/* End .widget */}
      </div>
    </div>
    {/* End .sidebar-wrapper */}
  </aside>
</>
        )
    }
}
