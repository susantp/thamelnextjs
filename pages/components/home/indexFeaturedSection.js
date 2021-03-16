import React from "react";
import { useSelector } from "react-redux";
import OwlSlider from "./OwlSlider";

function IndexFeaturedSection() {
  const { featuredProduct } = useSelector((state) => state.featuredProduct);

  console.log("featuredproduct", featuredProduct);

  return (
    <section className="featured-products-section">
      <div className="container">
        <h2 className="section-title heading-border ls-20 border-0">
          Featured Products
        </h2>
        <OwlSlider products={featuredProduct} />
      </div>
    </section>
  );
}

export default IndexFeaturedSection;
