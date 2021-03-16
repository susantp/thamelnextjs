import React from "react";

function IndexTopInfoBoxBanner() {
    return (
        <div className="container">
            <div
                className="info-boxes-slider owl-carousel owl-theme mb-2 owl-loaded owl-drag"
                data-owl-options="{
					'dots': false,
					'loop': false,
					'responsive': {
						'576': {
							'items': 2
						},
						'992': {
							'items': 3
						}
					}
				}"
            >
                {/* End .info-box */}
                {/* End .info-box */}
                {/* End .info-box */}
                <div className="owl-stage-outer">
                    <div
                        className="owl-stage"
                        style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: "1581px",
                        }}
                    >
                        <div
                            className="owl-item active"
                            style={{ width: "526.667px" }}
                        >
                            <div className="info-box info-box-icon-left">
                                <i className="icon-shipping" />
                                <div className="info-box-content">
                                    <h4>SHIPPING OPTIONS &amp; RETURN</h4>
                                    <p className="text-body">
                                        shipping options available
                                    </p>
                                </div>
                                {/* End .info-box-content */}
                            </div>
                        </div>
                        <div
                            className="owl-item active"
                            style={{ width: "526.667px" }}
                        >
                            <div className="info-box info-box-icon-left">
                                <i className="icon-money" />
                                <div className="info-box-content">
                                    <h4>MONEY BACK GUARANTEE</h4>
                                    <p className="text-body">
                                        100% money back guarantee
                                    </p>
                                </div>
                                {/* End .info-box-content */}
                            </div>
                        </div>
                        <div
                            className="owl-item active"
                            style={{ width: "526.667px" }}
                        >
                            <div className="info-box info-box-icon-left">
                                <i className="icon-support" />
                                <div className="info-box-content">
                                    <h4>ONLINE SUPPORT 24/7</h4>
                                    <p className="text-body">
                                        24/7 in communication channel
                                    </p>
                                </div>
                                {/* End .info-box-content */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-nav disabled">
                    <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
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
            {/* End .info-boxes-slider */}
            <div className="banners-container">
                <div className="banners-slider owl-carousel owl-theme owl-loaded owl-drag">
                    {/* End .banner */}
                    {/* End .banner */}
                    {/* End .banner */}
                    <div className="owl-stage-outer">
                        <div
                            className="owl-stage"
                            style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all 0s ease 0s",
                                width: "1600px",
                            }}
                        >
                            <div
                                className="owl-item active"
                                style={{
                                    width: "513.333px",
                                    marginRight: "20px",
                                }}
                            >
                                <div className="banner banner1 banner-sm-vw">
                                    <figure>
                                        <img
                                            src="assets/images/banners/banner-1.jpg"
                                            alt="banner"
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle">
                                        <h3 className="m-b-2">
                                            Bells Gongs Tingshas
                                        </h3>
                                        <h4 className="m-b-3 ls-10 text-primary">
                                            <sup className="text-dark">
                                                <del>20%</del>
                                            </sup>
                                            30%<sup>OFF</sup>
                                        </h4>
                                        <a
                                            href="#"
                                            className="btn btn-sm btn-dark ls-10"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="owl-item active"
                                style={{
                                    width: "513.333px",
                                    marginRight: "20px",
                                }}
                            >
                                <div className="banner banner2 banner-sm-vw text-uppercase">
                                    <figure>
                                        <img
                                            src="assets/images/banners/banner-2.jpg"
                                            alt="banner"
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle text-center">
                                        <div className="row align-items-lg-center">
                                            <div className="col-lg-7 text-lg-right">
                                                <h3 className="m-b-1">
                                                    Deal Promos
                                                </h3>
                                                <h4 className="pb-4 pb-lg-0 mb-0 text-body">
                                                    Starting at $99
                                                </h4>
                                            </div>
                                            <div className="col-lg-5 text-lg-left px-0 px-xl-3">
                                                <a
                                                    href="#"
                                                    className="btn btn-sm btn-dark ls-10"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="owl-item active"
                                style={{
                                    width: "513.333px",
                                    marginRight: "20px",
                                }}
                            >
                                <div className="banner banner3 banner-sm-vw">
                                    <figure>
                                        <img
                                            src="assets/images/banners/banner-3.jpg"
                                            alt="banner"
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle text-right">
                                        <h3 className="m-b-2">Prayer Wheel</h3>
                                        <h4 className="m-b-2 text-secondary text-uppercase">
                                            Starting at $99
                                        </h4>
                                        <a
                                            href="#"
                                            className="btn btn-sm btn-dark ls-10"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-nav disabled">
                        <button
                            type="button"
                            role="presentation"
                            className="owl-prev"
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
                    <div className="owl-dots disabled">
                        <button role="button" className="owl-dot active">
                            <span />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexTopInfoBoxBanner;
