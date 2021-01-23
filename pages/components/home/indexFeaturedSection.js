import React from "react";

function IndexFeaturedSection() {
    return (
        <section className="featured-products-section">
            <div className="container">
                <h2 className="section-title heading-border ls-20 border-0">
                    Featured Products
                </h2>
                <div
                    className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center owl-loaded owl-drag"
                    data-owl-options="{
						'dots': false,
						'nav': true
					}"
                >
                    <div className="owl-stage-outer">
                        <div
                            className="owl-stage"
                            style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all 0s ease 0s",
                                width: "2400px",
                            }}
                        >
                            <div
                                className="owl-item active"
                                style={{ width: "380px", marginRight: "20px" }}
                            >
                                <div className="product-default">
                                    <figure>
                                        <a href="#">
                                            <img
                                                src="assets/images/products/product-10.jpg"
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">
                                                HOT
                                            </div>
                                            <div className="product-label label-sale">
                                                20% Off
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a
                                                href="#"
                                                className="product-category"
                                            >
                                                Singing Bowl
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="#">
                                                Buddhist Singing Bowl [SQ]
                                            </a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span
                                                    className="ratings"
                                                    style={{ width: "80%" }}
                                                />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">
                                                $59.00
                                            </del>
                                            <span className="product-price">
                                                $49.00
                                            </span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <button
                                                className="btn-icon btn-add-cart"
                                                data-toggle="modal"
                                                data-target="#addCartModal"
                                            >
                                                ADD TO CART
                                            </button>
                                            <a
                                                href="#"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div
                                className="owl-item active"
                                style={{ width: "380px", marginRight: "20px" }}
                            >
                                <div className="product-default">
                                    <figure>
                                        <a href="#">
                                            <img
                                                src="assets/images/products/product-3.jpg"
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">
                                                HOT
                                            </div>
                                            <div className="product-label label-sale">
                                                30% Off
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a
                                                href="#"
                                                className="product-category"
                                            >
                                                Tibetan Bell
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="#">Tingsha Cymbals</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span
                                                    className="ratings"
                                                    style={{ width: "80%" }}
                                                />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">
                                                $59.00
                                            </del>
                                            <span className="product-price">
                                                $49.00
                                            </span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <button
                                                className="btn-icon btn-add-cart"
                                                data-toggle="modal"
                                                data-target="#addCartModal"
                                            >
                                                ADD TO CART
                                            </button>
                                            <a
                                                href="#"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div
                                className="owl-item active"
                                style={{ width: "380px", marginRight: "20px" }}
                            >
                                <div className="product-default">
                                    <figure>
                                        <a href="#">
                                            <img
                                                src="assets/images/products/product-13.jpg"
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a
                                                href="#"
                                                className="product-category"
                                            >
                                                Handicrafts
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="#">
                                                Pure Hemp Natural Color Backpack
                                            </a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span
                                                    className="ratings"
                                                    style={{ width: "80%" }}
                                                />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">
                                                $59.00
                                            </del>
                                            <span className="product-price">
                                                $49.00
                                            </span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <button
                                                className="btn-icon btn-add-cart"
                                                data-toggle="modal"
                                                data-target="#addCartModal"
                                            >
                                                ADD TO CART
                                            </button>
                                            <a
                                                href="#"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div
                                className="owl-item active"
                                style={{ width: "380px", marginRight: "20px" }}
                            >
                                <div className="product-default">
                                    <figure>
                                        <a href="#">
                                            <img
                                                src="assets/images/products/product-2.jpg"
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">
                                                HOT
                                            </div>
                                            <div className="product-label label-sale">
                                                40% Off
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a
                                                href="#"
                                                className="product-category"
                                            >
                                                Musical Baby Toy
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="#">
                                                Magic Color Mixing Bowl
                                            </a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span
                                                    className="ratings"
                                                    style={{ width: "80%" }}
                                                />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">
                                                $59.00
                                            </del>
                                            <span className="product-price">
                                                $49.00
                                            </span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <button
                                                className="btn-icon btn-add-cart"
                                                data-toggle="modal"
                                                data-target="#addCartModal"
                                            >
                                                ADD TO CART
                                            </button>
                                            <a
                                                href="#"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div
                                className="owl-item"
                                style={{ width: "380px", marginRight: "20px" }}
                            >
                                <div className="product-default">
                                    <figure>
                                        <a href="#">
                                            <img
                                                src="assets/images/products/product-8.jpg"
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">
                                                HOT
                                            </div>
                                            <div className="product-label label-sale">
                                                15% Off
                                            </div>
                                        </div>
                                        <div className="label-group">
                                            <div className="product-label label-hot">
                                                HOT
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a
                                                href="#"
                                                className="product-category"
                                            >
                                                Category
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="#">Product Short Name</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span
                                                    className="ratings"
                                                    style={{ width: "80%" }}
                                                />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">
                                                $59.00
                                            </del>
                                            <span className="product-price">
                                                $49.00
                                            </span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <button
                                                className="btn-icon btn-add-cart"
                                                data-toggle="modal"
                                                data-target="#addCartModal"
                                            >
                                                ADD TO CART
                                            </button>
                                            <a
                                                href="#"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div
                                className="owl-item"
                                style={{ width: "380px", marginRight: "20px" }}
                            >
                                <div className="product-default">
                                    <figure>
                                        <a href="#">
                                            <img
                                                src="assets/images/products/product-1.jpg"
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">
                                                HOT
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a
                                                href="#"
                                                className="product-category"
                                            >
                                                Category
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="#">Product Short Name</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span
                                                    className="ratings"
                                                    style={{ width: "80%" }}
                                                />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">
                                                $59.00
                                            </del>
                                            <span className="product-price">
                                                $49.00
                                            </span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <button
                                                className="btn-icon btn-add-cart"
                                                data-toggle="modal"
                                                data-target="#addCartModal"
                                            >
                                                ADD TO CART
                                            </button>
                                            <a
                                                href="#"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
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
                        <button
                            type="button"
                            role="presentation"
                            className="owl-next"
                        >
                            <i className="icon-angle-right" />
                        </button>
                    </div>
                    <div className="owl-dots disabled" />
                </div>
                {/* End .featured-proucts */}
            </div>
        </section>
    );
}

export default IndexFeaturedSection;
