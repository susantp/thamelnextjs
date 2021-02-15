import React from "react";

function Footer() {
    const d = new Date();
    const thisYear = d.getFullYear();
    return (
        <footer className="footer bg-dark">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">
                                            Address
                                        </span>{" "}
                                        11461 San Pablo Ave, El Cerrito, CA
                                        94530 USA
                                    </li>
                                    <li>
                                        <span className="contact-info-label">
                                            Phone
                                        </span>
                                        Hotline <a href="#">(800) 936-0737</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">
                                            Email
                                        </span>{" "}
                                        <a href="#">enquiry@thamelmart.com</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">
                                            Working Days/Hours
                                        </span>
                                        Mon - Sun / 9:00AM - 8:00 PM
                                    </li>
                                </ul>
                                <div className="social-icons">
                                    <a
                                        href="#"
                                        className="social-icon social-instagram icon-instagram"
                                        target="_blank"
                                        title="Instagram"
                                    />
                                    <a
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                        title="Twitter"
                                    />
                                    <a
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                        title="Facebook"
                                    />
                                </div>
                                {/* End .social-icons */}
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-lg-3 */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">
                                    Customer Service
                                </h4>
                                <ul className="links">
                                    <li>
                                        <a href="#">Help &amp; FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">Order Tracking</a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping &amp; Delivery</a>
                                    </li>
                                    <li>
                                        <a href="#">Orders History</a>
                                    </li>
                                    <li>
                                        <a href="#">Advanced Search</a>
                                    </li>
                                    <li>
                                        <a href="#">My Account</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">Corporate Sales</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-lg-3 */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Popular Tags</h4>
                                <div className="tagcloud">
                                    <a href="#">singing bowls</a>
                                    <a href="#">prayer wheel</a>
                                    <a href="#">tibetan bells</a>
                                    <a href="#">kukris</a>
                                </div>
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-lg-3 */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">
                                    Subscribe newsletter
                                </h4>
                                <p>
                                    Get all the latest information on events,
                                    sales and offers. Sign up for newsletter:
                                </p>
                                <form action="#" className="mb-0">
                                    <input
                                        type="email"
                                        className="form-control m-b-3"
                                        placeholder="Email address"
                                        required
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-primary shadow-none"
                                        defaultValue="Subscribe"
                                    />
                                </form>
                            </div>
                            {/* End .widget */}
                        </div>
                        {/* End .col-lg-3 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </div>
            {/* End .footer-middle */}
            <div className="container">
                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-copyright py-3 pr-4 mb-0">
                        © Thamel Mart. {thisYear}. All Rights Reserved. 
                    </p>
                    <a href="#">
                        <img
                            src="assets/images/payments.png"
                            alt="payment methods"
                            className="footer-payments py-3"
                        />
                    </a>
                </div>
                {/* End .footer-bottom */}
                <a href="#"></a>
            </div>
            {/* End .container */}
            <a href="#"></a>
        </footer>
    );
}

export default Footer;
