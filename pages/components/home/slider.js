import React from "react";

function Slider() {
    return (
        <div
            className="home-slider owl-carousel owl-theme owl-carousel-lazy show-nav-hover nav-big mb-2 text-uppercase owl-loaded owl-drag loaded"
            data-owl-options="{
				'loop': false
			}"
        >
            {/* End .home-slide */}
            {/* End .home-slide */}
            <div className="owl-stage-outer">
                <div
                    className="owl-stage"
                    style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "3806px",
                    }}
                >
                    <div
                        className="owl-item active"
                        style={{ width: "1903px" }}
                    >
                        <div className="home-slide home-slide1 banner loaded">
                            <img
                                className="owl-lazy slide-bg"
                                src="assets/images/slider/slide-1.jpg"
                                data-src="assets/images/slider/slide-1.jpg"
                                alt="slider image"
                                style={{ opacity: 1 }}
                            />
                            <div className="container">
                                <div className="banner-layer banner-layer-middle">
                                    <h4 className="text-transform-none m-b-3">
                                        2.5" Dragon Embossed
                                    </h4>
                                    <h2 className="text-transform-none mb-0">
                                        Tingsha Tibetan Meditation Bell
                                    </h2>
                                    <h3 className="m-b-3">30% Off</h3>
                                    <h5 className="d-inline-block mb-0">
                                        Starting At
                                        <b className="coupon-sale-text ml-4 mr-1 text-white bg-secondary align-middle">
                                            $
                                            <em className="align-text-top">
                                                199
                                            </em>
                                            99
                                        </b>
                                    </h5>
                                    <a
                                        href="#"
                                        className="btn btn-dark btn-lg ls-10"
                                    >
                                        Shop Now!
                                    </a>
                                </div>
                                {/* End .banner-layer */}
                            </div>
                        </div>
                    </div>
                    <div className="owl-item" style={{ width: "1903px" }}>
                        <div className="home-slide home-slide2 banner banner-md-vw">
                            <img
                                className="owl-lazy slide-bg"
                                src="assets/images/lazy.png"
                                data-src="assets/images/slider/slide-2.jpg"
                                alt="slider image"
                            />
                            <div className="container">
                                <div className="banner-layer banner-layer-middle d-flex justify-content-center">
                                    <div className="mx-auto">
                                        <h4 className="m-b-1">Extra</h4>
                                        <h3 className="m-b-2">20% off</h3>
                                        <h3 className="mb-2 heading-border">
                                            Singing Bowls
                                        </h3>
                                        <h2 className="text-transform-none m-b-4">
                                            Summer Sale
                                        </h2>
                                        <a
                                            href="#"
                                            className="btn btn-block btn-dark"
                                        >
                                            Shop All Sale
                                        </a>
                                    </div>
                                </div>
                                {/* End .banner-layer */}
                            </div>
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
    );
}

export default Slider;
