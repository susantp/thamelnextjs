import React, { Component } from 'react'

export default class TopHeader extends Component {
    render() {
        return (
            <div className="header-top">
          <div className="container">
            <div className="header-left d-none d-sm-block">
              <p className="top-message text-uppercase">
                FREE Returns. Standard Shipping
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
        )
    }
}
