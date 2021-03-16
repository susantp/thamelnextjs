import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SingleItemComponent from "../ResuableComponent/SingleItemComponent/SingleItemComponent";
import uuid from "react-uuid";

const OwlSlider = ({ products }) => {
  const [visibleSlides, setvisibleSlides] = useState(4);
  const [slideHeight, setSlideHeight] = useState(320);

  const reportWindowSize = (e) => {
    // setvisibleSlides(3);
    console.log(e.target.innerWidth);
    const innerWidth = e.target.innerWidth;
    if (innerWidth < 800) {
      setvisibleSlides(2);
      setSlideHeight(330);
    } else {
      setvisibleSlides(4);
      setSlideHeight(320);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  return (
    <CarouselProvider
      visibleSlides={visibleSlides}
      totalSlides={6}
      step={3}
      naturalSlideWidth={200}
      naturalSlideHeight={slideHeight}
    >
      <Slider>
        {products.map((product) => (
          <Slide key={uuid()} index={product.id}>
            <SingleItemComponent product={product} />
            {/* <p>{product.id}</p> */}
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};
export default OwlSlider;
