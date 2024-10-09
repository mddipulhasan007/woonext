import React from 'react';
import ProductDetailsAndAddToCart from "@/components/product/ProductDetailsAndAddToCart";
import ProductGallery from "@/components/product/ProductGallery";

function ProductGalleryAndDetails({product}) {
    return (
        <div className="grid-cols-10 lg:grid gap-7 2xl:gap-7 mb-8 lg:mb-12 bg-white p-5 rounded">
            <ProductGallery product={product}/>
            <ProductDetailsAndAddToCart product={product}/>
        </div>
    );
}

export default ProductGalleryAndDetails;