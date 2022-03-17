import React from 'react';

import ProductCard from './ProductCard';
import GalleryTitle from './GalleryTitle';

function ProductGallery() {
  return (
    <>
      <div>
        <GalleryTitle />
      </div>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default ProductGallery;