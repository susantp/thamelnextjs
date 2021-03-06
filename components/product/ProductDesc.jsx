import React, {Component} from "react";

export default class ProductDesc extends Component {
    render() {
        return (
            <div className="product-single-tabs">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="product-tab-more-info"
                            data-toggle="tab"
                            href="#product-more-info-content"
                            role="tab"
                            aria-controls="product-more-info-content"
                            aria-selected="false">
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
                            aria-selected="false">
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
                            aria-selected="false">
                            Reviews (1)
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    {/* End .tab-pane */}
                    <div
                        className="tab-pane fade show active"
                        id="product-more-info-content"
                        role="tabpanel"
                        aria-labelledby="product-tab-more-info">
                        <div className="product-desc-content">
                            
                                <table
                                    id="productDetails_detailBullets_sections1"
                                    className="a-keyvalue prodDetTable"
                                    role="presentation">
                                    <tbody>
                                        <tr>
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
                                    </tbody>
                                </table>
                        </div>
                        {/* End .product-desc-content */}
                    </div>
                    {/* End .tab-pane */}
                    <div
                        className="tab-pane fade"
                        id="product-tags-content"
                        role="tabpanel"
                        aria-labelledby="product-tab-tags">
                        <div className="product-tags-content">
                            <form action="#">
                                <h4>Add Your Tags:</h4>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-sm" required/>
                                    <input type="submit" className="btn btn-dark" defaultValue="Add Tags"/>
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
                        aria-labelledby="product-tab-reviews">
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
                                                    alt="avatar"/>
                                            </div>
                                            {/* End .comment-avatar*/}
                                            <div className="comment-box">
                                                <div className="ratings-container">
                                                    <div className="product-ratings">
                                                        <span
                                                            className="ratings"
                                                            style={{
                                                            width: "80%"
                                                        }}/> {/* End .ratings */}
                                                    </div>
                                                    {/* End .product-ratings */}
                                                </div>
                                                {/* End .ratings-container */}
                                                <div className="comment-info mb-1">
                                                    <h4 className="avatar-name">Bargain Hunter</h4>
                                                    -{" "}
                                                    <span className="comment-date">
                                                        December 22, 2015
                                                    </span>
                                                </div>
                                                {/* End .comment-info */}
                                                <div className="comment-text">
                                                    <p>
                                                        I bought a different (slightly smaller) singing bowl for someone else. When I
                                                        heard it, I decided I had to have one for myself and this one is lovely! Fast
                                                        delivery, the bowl is beautifully designed, good quality material, and plays a
                                                        warm, soothing tone. It's about 4.5" diameter but still fits in the palm of my
                                                        hand if I want to play it that way. The longer mallet also makes it easy to play
                                                        with the bowl sitting on the tall cushion provided. The mallet is a tiny bit
                                                        rough and doesn't come with a suede covered end but I don't mind that. The
                                                        cushion is nothing fancy but is firm and gives the bowl a nice elevation to show
                                                        it off. It plays nicely and I just love the tone. One of my favorite new items!
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
                                                    style={{
                                                    display: "none"
                                                }}>
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
                                                    defaultValue={""}/>
                                            </div>
                                            {/* End .form-group */}
                                            <div className="row">
                                                <div className="col-md-6 col-xl-12">
                                                    <div className="form-group">
                                                        <label>Your Name</label>
                                                        <input type="text" className="form-control form-control-sm" required/>
                                                    </div>
                                                    {/* End .form-group */}
                                                </div>
                                                <div className="col-md-6 col-xl-12">
                                                    <div className="form-group">
                                                        <label>Your E-mail</label>
                                                        <input type="text" className="form-control form-control-sm" required/>
                                                    </div>
                                                    {/* End .form-group */}
                                                </div>
                                            </div>
                                            <input type="submit" className="btn btn-dark ls-n-15" defaultValue="Submit"/>
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
