import React from "react";

function IndexNewArrival() {
    return (
        <section className="new-products-section">
            <div className="container">
                <h2 className="section-title heading-border ls-20 border-0">
                    New Arrivals
                </h2>
                <div
                    className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center owl-loaded owl-drag"
                    data-owl-options="{
						'dots': false,
						'nav': true,
						'responsive': {
							'992': {
								'items': 5
							}
						}
					}"
                >
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
                                className="owl-item active"
                                style={{ width: "300px", marginRight: "20px" }}
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
                                                <span className="tooltiptext tooltip-top">
                                                    4.00
                                                </span>
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
                                style={{ width: "300px", marginRight: "20px" }}
                            >
                                <div className="product-default">
                                    <figure>
                                        <a href="#">
                                            <img
                                                src="assets/images/products/product-13.jpg"
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
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
                                className="owl-item active"
                                style={{ width: "300px", marginRight: "20px" }}
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
                                className="owl-item active"
                                style={{ width: "300px", marginRight: "20px" }}
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
                                style={{ width: "300px", marginRight: "20px" }}
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
                                <b className="d-inline-block mr-4 mb-1 mb-md-0">
                                    Big Sale
                                </b>
                                All new kukris items up to 70% off
                                <small className="text-transform-none align-middle">
                                    Online Purchases Only
                                </small>
                            </h2>
                        </div>
                        <div className="col-md-3 text-center text-md-right">
                            <a
                                className="btn btn-light btn-white btn-lg mr-3"
                                href="#"
                            >
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
            </div>
        </section>
    );
}

export default IndexNewArrival;
