import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { SingleItemComponent } from '../ResuableComponent/SingleItemComponent/SingleItemComponent';
 
const OwlSlider = ({product}) => {

    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          {product.map(product => 
            <Slide index={product.id}> <SingleItemComponent product={product}/> </Slide>
          ) }
         
         
        </Slider>
      </CarouselProvider>
    );
  }
export default OwlSlider