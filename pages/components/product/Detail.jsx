import React, {Component} from "react";
import {SideBySideMagnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION} from "react-image-magnifiers";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import { ProductFullImageSlider, productFullImageSlider } from "./ProductFullImageSlider";

export default class Detail extends Component {
   
    state = {
        imageSrc: "assets/images/products/zoom/2-big.jpg",
        largeImageSrc: "assets/images/products/zoom/2-big.jpg",
        alwaysInPlace: false,
        overlayOpacity: 0.6,
        switchSides: false,
        fillAvailableSpace: false,
        fillAlignTop: true,
        fillGapLeft: 0,
        fillGapRight: 10,
        fillGapTop: 10,
        fillGapBottom: 10,
        displayMangnifier: false
    };
    handleClick = (e) => {
        const stateCopy = {
            ...this.state
        };
        stateCopy.imageSrc = e.target.src;
        stateCopy.largeImageSrc = e.target.src;
        this.setState(stateCopy);
        console.log(this.state);
    }
    onOpenModal = () => {
        this.setState({displayMangnifier: true})
    }
    onCloseModal = () => {
        this.setState({displayMangnifier: false})
    }
    render() {
        const {
            imageSrc,
            largeImageSrc,
            alwaysInPlace,
            overlayOpacity,
            switchSides,
            fillAvailableSpace,
            fillAlignTop,
            fillGapLeft,
            fillGapRight,
            fillGapTop,
            fillGapBottom,
            displayMangnifier
        } = this.state;
        return (
            <div>
            <Modal open={displayMangnifier} onClose={this.onCloseModal} center>
            <ProductFullImageSlider />
            </Modal>
            
                <div className="product-single-container product-single-default">
                <div className="row">
                
                    <div className="col-md-6 col-sm-12 product-single-gallery" onClick={this.onOpenModal}>
                       
                        <SideBySideMagnifier
                        
                            className="input-position"
                            style={{
                            order: "1"
                        }}
                            imageSrc={imageSrc}
                            largeImageSrc={largeImageSrc}
                            alwaysInPlace={alwaysInPlace}
                            overlayOpacity={overlayOpacity}
                            switchSides={switchSides}
                            zoomPosition="left"
                            inPlaceMinBreakpoint={641}
                            fillAvailableSpace={fillAvailableSpace}
                            fillAlignTop={fillAlignTop}
                            fillGapTop={fillGapTop}
                            fillGapRight={fillGapRight}
                            fillGapBottom={fillGapBottom}
                            fillGapLeft={fillGapLeft}
                            zoomContainerBorder="1px solid #ccc"
                            zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                            MOUSE_ACTIVATION
                            TOUCH_ACTIVATION/>

                        <div className="prod-thumbnail owl-dots" id="carousel-custom-dots">
                            <div className="owl-dot active">
                                <img src="assets/images/products/zoom/2-big.jpg" onClick={this.handleClick}/>
                            </div>
                            <div className="owl-dot">
                                <img src="assets/images/products/zoom/3-big.jpg" onClick={this.handleClick}/>
                            </div>
                            <div className="owl-dot">
                                <img src="assets/images/products/zoom/5-big.jpg" onClick={this.handleClick}/>
                            </div>
                            <div className="owl-dot">
                                <img src="assets/images/products/zoom/6-big.jpg" onClick={this.handleClick}/>
                            </div>
                        </div>
                    </div>
                    {/* End .product-single-gallery */}
                    <div className="col-md-6 col-sm-12 product-single-details">
                        <h1 className="product-title">Beautiful Tibetan Singing Bowl for Meditation and Healing
                        </h1>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span
                                    className="ratings"
                                    style={{
                                    width: "60%"
                                }}/> {/* End .ratings */}
                            </div>
                            {/* End .product-ratings */}
                            <a href="{this.reviewRoute}" className="rating-link">
                                ( 6 Reviews )
                            </a>
                        </div>
                        {/* End .ratings-container */}
                        <hr className="short-divider"/>
                        <div className="price-box">
                            <span className="product-price">$12</span>
                            + $39.99 shipping
                        </div>
                        {/* End .price-box */}
                        <div className="product-desc">

                            <ul className="nav nav-tabs" role="tablist">
                                
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="product-tab-desc"
                                        data-toggle="tab"
                                        href="#product-desc-content"
                                        role="tab"
                                        aria-controls="product-desc-content"
                                        aria-selected="true">
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link "
                                        id="product-tab-features"
                                        data-toggle="tab"
                                        href="#product-features-content"
                                        role="tab"
                                        aria-controls="product-features-content"
                                        aria-selected="false">
                                        Features
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="product-desc-content"
                                    role="tabpanel"
                                    aria-labelledby="product-tab-desc">
                                    <div className="product-desc-content">
                                        This deluxe Tibetan singing bowl set includes a beautiful brass singing bowl
                                        approximately 4 inches in diameter with a soft plush cushion and wooden striker.
                                        The singing bowl has a decorative Tibetan Buddhist prayer "Om Mani Padme Hum"
                                        inscribed around the outside. The cushion is approximately 1.5 inches thick and
                                        has a decorative gold patterned fabric around the outside edge. Easy to play,
                                        this singing bowl creates incredibly relaxing sounds that can be used for yoga,
                                        meditation, and relaxation. This is the perfect decoration or meditation
                                        accessory which can produce peaceful, relaxing sounds to accompany any
                                        meditation practice.
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade "
                                    id="product-features-content"
                                    role="tabpanel"
                                    aria-labelledby="product-tab-features">
                                    <div className="product-features-content">
                                        <ul
                                            style={{
                                            listStyleType: "circle"
                                        }}>
                                            <li>Complete Set with Wooden Striker and Cushion, 4 Inch Diameter.</li>
                                            <li>
                                                Calming, peaceful sounds to enhance meditation and relaxation
                                            </li>
                                            <li>High quality brass singing bowl with decorative Om Mani Padme Hum inscription
                                            </li>
                                            <li>Great value: deluxe set includes plush cushion and wooden striker
                                            </li>
                                            <li>Convenient size: bowl is approximately 4 inches in diameter
                                            </li>
                                            <li>Easy to play, even for beginners
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="divider"/>
                        <div className="product-action">
                            <div className="product-single-qty">
                                <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                                    <span className="input-group-btn input-group-prepend"></span>
                                    <input className="horizontal-quantity form-control" type="text"/>
                                    <span className="input-group-btn input-group-append"></span>
                                </div>
                            </div>
                            <a
                                href="cart.html"
                                className="btn btn-dark add-cart icon-shopping-cart"
                                title="Add to Cart">Add to Cart</a>
                        </div>
                        <hr className="divider mb-1"/>
                        <div className="product-single-share">
                            <label className="sr-only">Share:</label>
                            <div className="social-icons mr-2">
                                <a
                                    href="#"
                                    className="social-icon social-facebook icon-facebook"
                                    target="_blank"
                                    title="Facebook"/>
                                <a
                                    href="#"
                                    className="social-icon social-twitter icon-twitter"
                                    target="_blank"
                                    title="Twitter"/>
                                <a
                                    href="#"
                                    className="social-icon social-linkedin fab fa-linkedin-in"
                                    target="_blank"
                                    title="Linkedin"/>
                                <a
                                    href="#"
                                    className="social-icon social-gplus fab fa-google-plus-g"
                                    target="_blank"
                                    title="Google +"/>
                                <a
                                    href="#"
                                    className="social-icon social-mail icon-mail-alt"
                                    target="_blank"
                                    title="Mail"/>
                            </div>
                            {/* End .social-icons */}
                            <a href="{this.handleWishlist}" className="add-wishlist" title="Add to Wishlist">
                                Add to Wishlist
                            </a>
                        </div>
                        {/* End .product single-share */}
                    </div>
                    {/* End .product-single-details */}
                </div>
                {/* End .row */}
            </div>
            
            
            </div>
        );
    }
}
