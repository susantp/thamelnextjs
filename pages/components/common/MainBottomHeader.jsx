import React, { Component } from 'react';
import data from "./data.json";
import uuid from "react-uuid";

export default class MainBottomHeader extends Component {
constructor(props) {
  super(props)

  this.state = data;
}
    render() {
      const {categories} = this.state;
        return (
          
        <div className="header-bottom sticky-header d-none d-lg-block">

          <div className="container">
            <nav className="main-nav w-100">
              <ul className="menu">
                <li>
                  <a href="#">Shop By Categories</a>
                  <div className="megamenu megamenu-fixed-width megamenu-4cols">
                    <div className="row">
                      {categories.map((category,index) => {
                      if(category.child !== undefined && category.child.length !== 0){
                        return (
                         
                          <div className="col-lg-3" key={uuid()}>
                            <a href="#" className="nolink text-primary">
                              {category.parent}
                            </a>
                            
                        {category.child.slice(0,5).map(child => {
                          return (
                          <ul className="submenu" key={uuid()}>
                          <li>
                            <a href="#">{child.title.charAt(0).toUpperCase()+child.title.slice(1).toLowerCase()}</a>
                          </li>
                        </ul>
                        )
                        })}
                        
                      </div>

                        )
                      }
                      
                     })}
                      
                      
											
                    </div>
                  </div>
                  {/* End .megamenu */}
                </li>
                <li>
                  <a href="#">Today's Deal</a>
                </li>
                <li>
                  <a href="#">Featured Products</a>
                  
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
        )
    }
}


