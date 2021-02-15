import React, { Component } from "react";

export default class ProductDesc extends Component {
  render() {
    return (
      <div className="product-single-tabs">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="product-tab-desc"
              data-toggle="tab"
              href="#product-desc-content"
              role="tab"
              aria-controls="product-desc-content"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="product-tab-more-info"
              data-toggle="tab"
              href="#product-more-info-content"
              role="tab"
              aria-controls="product-more-info-content"
              aria-selected="false"
            >
             Information
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="product-tab-tags"
              data-toggle="tab"
              href="#product-tags-content"
              role="tab"
              aria-controls="product-tags-content"
              aria-selected="false"
            >
              Tags
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="product-tab-reviews"
              data-toggle="tab"
              href="#product-reviews-content"
              role="tab"
              aria-controls="product-reviews-content"
              aria-selected="false"
            >
              Reviews (1)
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="product-desc-content"
            role="tabpanel"
            aria-labelledby="product-tab-desc"
          >
            <div className="product-desc-content">
             This deluxe Tibetan singing bowl set includes a beautiful brass singing bowl approximately 4 inches in diameter with a soft plush cushion and wooden striker. The singing bowl has a decorative Tibetan Buddhist prayer "Om Mani Padme Hum" inscribed around the outside. The cushion is approximately 1.5 inches thick and has a decorative gold patterned fabric around the outside edge. Easy to play, this singing bowl creates incredibly relaxing sounds that can be used for yoga, meditation, and relaxation. This is the perfect decoration or meditation accessory which can produce peaceful, relaxing sounds to accompany any meditation practice.
            </div>
            {/* End .product-desc-content */}
          </div>
          {/* End .tab-pane */}
          <div
            className="tab-pane fade fade"
            id="product-more-info-content"
            role="tabpanel"
            aria-labelledby="product-tab-more-info"
          >
            <div className="product-desc-content">
              <p>
                 <table id="productDetails_detailBullets_sections1" className="a-keyvalue prodDetTable" role="presentation">
  <tbody><tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Item Weight
      </th>
      <td className="a-size-base">
        1.3 pounds
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Package Dimensions
      </th>
      <td className="a-size-base">
        5.1 x 5.1 x 4.6 inches
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        ASIN
      </th>
      <td className="a-size-base">
        B017LG4Q0K
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Item model number
      </th>
      <td className="a-size-base">
        4334202619
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">Customer Reviews</th>
      <td className="a-size-base">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n/*\n* Fix for UDP-1061. Average customer reviews has a small extra line on hover\n* https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40\n*/\n.noUnderline a:hover {\ntext-decoration: none;\n}\n" }} />
        <div id="averageCustomerReviews" data-asin="B017LG4Q0K" data-ref="dpx_acr_pop_">
          <span className="a-declarative" data-action="acrStarsLink-click-metrics" data-acrstarslink-click-metrics="{}">
            <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline" title="3.9 out of 5 stars">
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&asin=B017LG4Q0K&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <i className="a-icon a-icon-star a-star-4"><span className="a-icon-alt">3.9 out of 5 stars</span></i>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <span className="a-letter-space" />
            </span>
          </span>
          <span className="a-letter-space" />
          <span className="a-declarative" data-action="acrLink-click-metrics" data-acrlink-click-metrics="{}">
            <a id="acrCustomerReviewLink" className="a-link-normal" href="#customerReviews">
              <span id="acrCustomerReviewText" className="a-size-base">34 ratings</span>
            </a>
          </span>
        </div>
        <br />
        3.9 out of 5 stars
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Best Sellers Rank
      </th>
      <td>
        <span>
          <span>#106,431 in Musical Instruments (<a href="/gp/bestsellers/musical-instruments/ref=pd_zg_ts_musical-instruments">See Top 100 in Musical Instruments</a>)</span>
          <br />
          <span>#880 in <a href="/gp/bestsellers/musical-instruments/4972150011/ref=pd_zg_hrsr_musical-instruments">Singing Bowls</a></span>
          <br />
        </span>
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Is Discontinued By Manufacturer
      </th>
      <td className="a-size-base">
        No
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Date First Available
      </th>
      <td className="a-size-base">
        November 5, 2015
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Size
      </th>
      <td className="a-size-base">
        4 inch
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Percussion Diameter
      </th>
      <td className="a-size-base">
        4 inches
      </td>
    </tr>
    <tr>
      <th className="a-color-secondary a-size-base prodDetSectionEntry">
        Speaker Diameter
      </th>
      <td className="a-size-base">
        4 inches
      </td>
    </tr>
  </tbody></table>

              </p>
            </div>
            {/* End .product-desc-content */}
          </div>
          {/* End .tab-pane */}
          <div
            className="tab-pane fade"
            id="product-tags-content"
            role="tabpanel"
            aria-labelledby="product-tab-tags"
          >
            <div className="product-tags-content">
              <form action="#">
                <h4>Add Your Tags:</h4>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    required
                  />
                  <input
                    type="submit"
                    className="btn btn-dark"
                    defaultValue="Add Tags"
                  />
                </div>
                {/* End .form-group */}
              </form>
              <p className="note">
                Use spaces to separate tags. Use single quotes (') for phrases.
              </p>
            </div>
            {/* End .product-tags-content */}
          </div>
          {/* End .tab-pane */}
          <div
            className="tab-pane fade"
            id="product-reviews-content"
            role="tabpanel"
            aria-labelledby="product-tab-reviews"
          >
            <div className="product-reviews-content">
              <div className="row">
                <div className="col-xl-7">
                  <h2 className="reviews-title">
                    1 review 
                  </h2>
                  <ol className="comment-list">
                    <li className="comment-container">
                      <div className="comment-avatar">
                        <img
                          src="https://via.placeholder.com/150/92c952"
                          width={65}
                          height={65}
                          alt="avatar"
                        />
                      </div>
                      {/* End .comment-avatar*/}
                      <div className="comment-box">
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings */}
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .ratings-container */}
                        <div className="comment-info mb-1">
                          <h4 className="avatar-name">Bargain Hunter</h4> -{" "}
                          <span className="comment-date">
                            December 22, 2015
                          </span>
                        </div>
                        {/* End .comment-info */}
                        <div className="comment-text">
                          <p>
                            I bought a different (slightly smaller) singing bowl for someone else. When I heard it, I decided I had to have one for myself and this one is lovely! Fast delivery, the bowl is beautifully designed, good quality material, and plays a warm, soothing tone. It's about 4.5" diameter but still fits in the palm of my hand if I want to play it that way. The longer mallet also makes it easy to play with the bowl sitting on the tall cushion provided. The mallet is a tiny bit rough and doesn't come with a suede covered end but I don't mind that. The cushion is nothing fancy but is firm and gives the bowl a nice elevation to show it off. It plays nicely and I just love the tone. One of my favorite new items!
                          </p>
                        </div>
                        {/* End .comment-text */}
                      </div>
                      {/* End .comment-box */}
                    </li>
                    {/* comment-container */}
                    
                  </ol>
                  {/* End .comment-list */}
                </div>
                <div className="col-xl-5">
                  <div className="add-product-review">
                    <form action="#" className="comment-form m-0">
                      <h3 className="review-title">Add a Review</h3>
                      <div className="rating-form">
                        <label htmlFor="rating">Your rating</label>
                        <span className="rating-stars">
                          <a className="star-1" href="#">
                            1
                          </a>
                          <a className="star-2" href="#">
                            2
                          </a>
                          <a className="star-3" href="#">
                            3
                          </a>
                          <a className="star-4" href="#">
                            4
                          </a>
                          <a className="star-5" href="#">
                            5
                          </a>
                        </span>
                        <select
                          name="rating"
                          id="rating"
                          required
                          style={{ display: "none" }}
                        >
                          <option value>Rate…</option>
                          <option value={5}>Perfect</option>
                          <option value={4}>Good</option>
                          <option value={3}>Average</option>
                          <option value={2}>Not that bad</option>
                          <option value={1}>Very poor</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Your Review</label>
                        <textarea
                          cols={5}
                          rows={6}
                          className="form-control form-control-sm"
                          defaultValue={""}
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="row">
                        <div className="col-md-6 col-xl-12">
                          <div className="form-group">
                            <label>Your Name</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                        </div>
                        <div className="col-md-6 col-xl-12">
                          <div className="form-group">
                            <label>Your E-mail</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="btn btn-dark ls-n-15"
                        defaultValue="Submit"
                      />
                    </form>
                  </div>
                  {/* End .add-product-review */}
                </div>
              </div>
            </div>
            {/* End .product-reviews-content */}
          </div>
          {/* End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
    );
  }
}
