import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export const ProductFullImageSlider = () => {

    const images = [
        {
          original: 'assets/images/products/zoom/2-big.jpg',
          thumbnail: 'assets/images/products/zoom/2-big.jpg',
          
        },
        {
          original: 'assets/images/products/zoom/3-big.jpg',
          thumbnail: 'assets/images/products/zoom/3-big.jpg',
        },
        {
          original: 'assets/images/products/zoom/5-big.jpg',
          thumbnail: 'assets/images/products/zoom/5-big.jpg',
        },
        {
            original: 'assets/images/products/zoom/6-big.jpg',
            thumbnail: 'assets/images/products/zoom/6-big.jpg',
          },
      ];
    return (
      <ReactImageGallery items={images}  />
    )
}
