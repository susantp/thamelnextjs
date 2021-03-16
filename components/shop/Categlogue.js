import React, { Component } from 'react'

export default class Categlogue extends Component {
    render() {
        return (
            <div className="col-lg-9">
                <div className="boxed-slider owl-carousel owl-carousel-lazy owl-theme owl-theme-light owl-loaded owl-drag">
                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1760px, 0px, 0px)', transition: 'all 0s ease 0s', width: '5280px' }}><div className="owl-item cloned" style={{ width: '880px' }}><img className="slide-bg owl-lazy" data-src="assets/images/banners/banner-1.jpg" alt="banner" width={870} height={300} src="assets/images/banners/banner-1.jpg" style={{ opacity: 1 }} /></div><div className="owl-item cloned" style={{ width: '880px' }}><img className="slide-bg owl-lazy" data-src="assets/images/banners/banner-2.jpg" alt="banner" width={870} height={300} src="assets/images/banners/banner-2.jpg" style={{ opacity: 1 }} /></div><div className="owl-item active" style={{ width: '880px' }}><img className="slide-bg owl-lazy" data-src="assets/images/banners/banner-1.jpg" alt="banner" width={870} height={300} src="assets/images/banners/banner-1.jpg" style={{ opacity: 1 }} /></div><div className="owl-item" style={{ width: '880px' }}><img className="slide-bg owl-lazy" data-src="assets/images/banners/banner-2.jpg" alt="banner" width={870} height={300} src="assets/images/banners/banner-2.jpg" style={{ opacity: 1 }} /></div><div className="owl-item cloned" style={{ width: '880px' }}><img className="slide-bg owl-lazy" data-src="assets/images/banners/banner-1.jpg" alt="banner" width={870} height={300} src="assets/images/banners/banner-1.jpg" style={{ opacity: 1 }} /></div><div className="owl-item cloned" style={{ width: '880px' }}><img className="slide-bg owl-lazy" data-src="assets/images/banners/banner-2.jpg" alt="banner" width={870} height={300} src="assets/images/banners/banner-2.jpg" style={{ opacity: 1 }} /></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><i className="icon-angle-left" /></button><button type="button" role="presentation" className="owl-next"><i className="icon-angle-right" /></button></div><div className="owl-dots disabled" /></div>
                <nav className="toolbox pt-4">
                    <div className="toolbox-left">
                        <div className="toolbox-item toolbox-sort">
                            <label>Sort By:</label>
                            <div className="select-custom">
                                <select name="orderby" className="form-control">
                                    <option value="menu_order" selected="selected">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by newness</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                            </div>{/* End .select-custom */}
                        </div>{/* End .toolbox-item */}
                    </div>{/* End .toolbox-left */}
                    <div className="toolbox-right">
                        <div className="toolbox-item toolbox-show">
                            <label>Show:</label>
                            <div className="select-custom">
                                <select name="count" className="form-control">
                                    <option value={12}>12</option>
                                    <option value={24}>24</option>
                                    <option value={36}>36</option>
                                </select>
                            </div>{/* End .select-custom */}
                        </div>{/* End .toolbox-item */}
                        <div className="toolbox-item layout-modes">
                            <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                                <i className="icon-mode-grid" />
                            </a>
                            <a href="category-list.html" className="layout-btn btn-list" title="List">
                                <i className="icon-mode-list" />
                            </a>
                        </div>{/* End .layout-modes */}
                    </div>{/* End .toolbox-right */}
                </nav>
                <div className="row">
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-1.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-hot">HOT</div>
                                    <div className="product-label label-sale">-20%</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Fleece Jacket</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg" />
                                </a>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Ray Ban 5228</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$33.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-3.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-sale">-20%</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-5.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-sale">-30%</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top">5.00</span>
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-6.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-hot">HOT</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-7.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-sale">-8%</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-4.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-sale">-40%</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-8.jpg" />
                                </a>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-9.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-hot">HOT</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-10.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-sale">-30%</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top">5.00</span>
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-11.jpg" />
                                </a>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-12.jpg" />
                                </a>
                                <div className="label-group">
                                    <div className="product-label label-hot">HOT</div>
                                </div>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="category.html" className="product-category">category</a>
                                    </div>
                                    <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                                </div>
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">$70.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .col-sm-4 */}
                </div>{/* End .row */}
                <nav className="toolbox toolbox-pagination">
                    <div className="toolbox-item toolbox-show">
                        <label>Show:</label>
                        <div className="select-custom">
                            <select name="count" className="form-control">
                                <option value={12}>12</option>
                                <option value={24}>24</option>
                                <option value={36}>36</option>
                            </select>
                        </div>{/* End .select-custom */}
                    </div>{/* End .toolbox-item */}
                    <ul className="pagination toolbox-item">
                        <li className="page-item disabled">
                            <a className="page-link page-link-btn" href="#"><i className="icon-angle-left" /></a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><span className="page-link">...</span></li>
                        <li className="page-item">
                            <a className="page-link page-link-btn" href="#"><i className="icon-angle-right" /></a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}
