import React from "react";
import { useSelector } from "react-redux";
import {SingleItemComponent} from '../ResuableComponent/SingleItemComponent/SingleItemComponent'
import  OwlSlider  from "./OwlSlider";

function IndexFeaturedSection() {
 const {featuredProduct} = useSelector((state) => state.featuredProduct)

 console.log("featuredproduct", featuredProduct);
  
  return (
    <section className="featured-products-section">
      <div className="container">
        <h2 className="section-title heading-border ls-20 border-0">
          Featured Products
        </h2>
        <OwlSlider product={featuredProduct} />
        {/* <div
          className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center owl-loaded owl-drag"
          data-owl-options="{
						'dots': false,
						'nav': true
					}"
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "2400px",
              }}
            >
            {featuredProduct.map(product => 
             
                <SingleItemComponent key={product.id}  product={product} />
            )}
              
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
        </div> */}
        {/* End .featured-proucts */}
      </div>
    </section>
  );
}

export default IndexFeaturedSection;
