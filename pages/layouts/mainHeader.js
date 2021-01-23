import React from "react";

export default function MainHeader() {
    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left d-none d-sm-block">
                        <p className="top-message text-uppercase">
                            FREE Returns. Standard Shipping Orders $99+
                        </p>
                    </div>
                    {/* End .header-left */}
                    <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                        <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                            <a href="#">Links</a>
                            <div className="header-menu">
                                <ul>
                                    <li>
                                        <a href="#">Track Order </a>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Our Stores</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#">Help &amp; FAQs</a>
                                    </li>
                                </ul>
                            </div>
                            {/* End .header-menu */}
                        </div>
                        {/* End .header-dropown */}
                        <span className="separator" />
                        {/* <div class="header-dropdown ">
							<a href="#">USD</a>
							<div class="header-menu">
								<ul>
									<li><a href="#">EUR</a></li>
									<li><a href="#">USD</a></li>
								</ul>
                            </div>
                            <!-- End .header-menu
                        </div>
                        <!-- End .header-dropown */}
                        {/* <div class="header-dropdown mr-auto mr-sm-3 mr-md-0">
							<a href="#"><img src="assets/images/flags/en.png" alt="England flag">ENG</a>
							<div class="header-menu">
								<ul>
									<li><a href="#"><img src="assets/images/flags/en.png" alt="England flag">ENG</a></li>
									<li><a href="#"><img src="assets/images/flags/fr.png" alt="France flag">FRA</a></li>
								</ul>
                            </div>
                            <!-- End .header-menu
                        </div>
                        <!-- End .header-dropown */}
                        <span className="separator" />
                        <div className="social-icons">
                            <a
                                href="#"
                                className="social-icon social-instagram icon-instagram"
                                target="_blank"
                            />
                            <a
                                href="#"
                                className="social-icon social-twitter icon-twitter"
                                target="_blank"
                            />
                            <a
                                href="#"
                                className="social-icon social-facebook icon-facebook"
                                target="_blank"
                            />
                        </div>
                        {/* End .social-icons */}
                    </div>
                    {/* End .header-right */}
                </div>
                {/* End .container */}
            </div>
            {/* End .header-top */}
            <div className="header-middle">
                <div className="container">
                    <div className="header-left col-lg-2 w-auto pl-0">
                        <button
                            className="mobile-menu-toggler text-primary mr-2"
                            type="button"
                        >
                            <i className="icon-menu" />
                        </button>
                        <a href="index.html" className="logo">
                            <img
                                src="assets/images/logo.png"
                                alt="Porto Logo"
                            />
                        </a>
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
                                            <option value>
                                                All Categories
                                            </option>
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
                                    <button
                                        className="btn icon-search-3 p-0"
                                        type="submit"
                                    />
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
                                <span className="cart-count badge-circle">
                                    2
                                </span>
                            </a>
                            <div className="dropdown-menu">
                                <div className="dropdownmenu-wrapper">
                                    <div className="dropdown-cart-header">
                                        <span>2 Items</span>
                                        <a
                                            href="cart.html"
                                            className="float-right"
                                        >
                                            View Cart
                                        </a>
                                    </div>
                                    {/* End .dropdown-cart-header */}
                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <a href="#">Kukris</a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">
                                                        1
                                                    </span>
                                                    x $99.00
                                                </span>
                                            </div>
                                            {/* End .product-details */}
                                            <figure className="product-image-container">
                                                <a
                                                    href="#"
                                                    className="product-image"
                                                >
                                                    <img
                                                        src="assets/images/products/cart/product-1.jpg"
                                                        alt="product"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn-remove icon-cancel"
                                                    title="Remove Product"
                                                />
                                            </figure>
                                        </div>
                                        {/* End .product */}
                                        <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <a href="#">
                                                        Pure Hemp Backpack
                                                    </a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">
                                                        1
                                                    </span>
                                                    x $35.00
                                                </span>
                                            </div>
                                            {/* End .product-details */}
                                            <figure className="product-image-container">
                                                <a
                                                    href="#"
                                                    className="product-image"
                                                >
                                                    <img
                                                        src="assets/images/products/cart/product-2.jpg"
                                                        alt="product"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn-remove icon-cancel"
                                                    title="Remove Product"
                                                />
                                            </figure>
                                        </div>
                                        {/* End .product */}
                                    </div>
                                    {/* End .cart-product */}
                                    <div className="dropdown-cart-total">
                                        <span>Total</span>
                                        <span className="cart-total-price float-right">
                                            $134.00
                                        </span>
                                    </div>
                                    {/* End .dropdown-cart-total */}
                                    <div className="dropdown-cart-action">
                                        <a
                                            href="checkout-shipping#"
                                            className="btn btn-dark btn-block"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    {/* End .dropdown-cart-total */}
                                </div>
                                {/* End .dropdownmenu-wrapper */}
                            </div>
                            {/* End .dropdown-menu */}
                        </div>
                        {/* End .dropdown */}
                    </div>
                    {/* End .header-right */}
                </div>
                {/* End .container */}
            </div>
            {/* End .header-middle */}
            <div className="header-bottom sticky-header d-none d-lg-block">
                <div className="container">
                    <nav className="main-nav w-100">
                        <ul className="menu">
                            <li>
                                <a href="#">Shop By Categories</a>
                                <div className="megamenu megamenu-fixed-width megamenu-3cols">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <a
                                                href="#"
                                                className="nolink text-primary"
                                            >
                                                Bells Gongs Tingshas
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="#">
                                                        Handmade Special Bells
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Carving Mantras handmade
                                                        Gong
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Tibetan Tingshas Cymbals
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                href="#"
                                                className="nolink text-primary"
                                            >
                                                Bells Gongs Tingshas
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="#">
                                                        Handmade Special Bells
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Carving Mantras handmade
                                                        Gong
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Tibetan Tingshas Cymbals
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <a
                                                href="#"
                                                className="nolink text-primary"
                                            >
                                                Singing Bowls
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="#">
                                                        Singing Bowls
                                                        Accessories
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Featured Singing Bowls
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Bowls Gift Set
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Hand Beaten Casting
                                                        Bowls
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Special Therapy Singing
                                                        bowls
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                href="#"
                                                className="nolink text-primary"
                                            >
                                                Singing Bowls
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="#">
                                                        Singing Bowls
                                                        Accessories
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Featured Singing Bowls
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Bowls Gift Set
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Hand Beaten Casting
                                                        Bowls
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Special Therapy Singing
                                                        bowls
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <a
                                                href="#"
                                                className="nolink text-primary"
                                            >
                                                Bells Gongs Tingshas
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="#">
                                                        Handmade Special Bells
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Carving Mantras handmade
                                                        Gong
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Tibetan Tingshas Cymbals
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                href="#"
                                                className="nolink text-primary"
                                            >
                                                Bells Gongs Tingshas
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="#">
                                                        Handmade Special Bells
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Carving Mantras handmade
                                                        Gong
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Tibetan Tingshas Cymbals
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <div class="col-lg-4 p-0">
											<img src="assets/images/menu-banner.jpg" alt="Menu banner">
										</div> */}
                                    </div>
                                </div>
                                {/* End .megamenu */}
                            </li>
                            <li>
                                <a href="#">Today's Deal</a>
                            </li>
                            <li>
                                <a href="#">Featured Products</a>
                                {/* <ul>
									<li><a href="cart.html">Shopping Cart</a></li>
									<li><a href="#">Checkout</a>
										<ul>
											<li><a href="checkout-shipping.html">Checkout Shipping</a></li>
											<li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
											<li><a href="checkout-review.html">Checkout Review</a></li>
										</ul>
									</li>
									<li><a href="#">Dashboard</a>
										<ul>
											<li><a href="dashboard.html">Dashboard</a></li>
											<li><a href="my-account.html">My Account</a></li>
										</ul>
									</li>
									<li><a href="about.html">About Us</a></li>
									<li><a href="#">Blog</a>
										<ul>
											<li><a href="blog.html">Blog</a></li>
											<li><a href="single.html">Blog Post</a></li>
										</ul>
									</li>
									<li><a href="contact.html">Contact Us</a></li>
									<li><a href="#" class="login-link">Login</a></li>
									<li><a href="forgot-password.html">Forgot Password</a></li>
								</ul> */}
                            </li>
                            <li>
                                <a href="#">New Arrival</a>
                            </li>
                            <li>
                                <a href="#">Best Seller</a>
                            </li>
                            <li>
                                <a href="#">Gallery</a>
                            </li>
                            <li className="float-right mr-0">
                                <a
                                    href="#"
                                    className="px-4"
                                    style={{ textTransform: "lowercase" }}
                                >
                                    enquiry@thamelmart.com
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* End .container */}
            </div>
            {/* End .header-bottom */}
            {/* End .header-bottom */}
        </header>
    );
}
