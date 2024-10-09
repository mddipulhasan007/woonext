import React from 'react';
import ProductTab from "@/components/product/ProductTab";
import ProductGalleryAndDetails from "@/components/product/ProductGalleryAndDetails";

function ProductDetails({product}) {
    return (
        <div className="pt-6 pb-2 md:pt-7">
            <ProductGalleryAndDetails product={product}/>
            <ProductTab product={product}/>
        </div>

    );
}

export default ProductDetails;