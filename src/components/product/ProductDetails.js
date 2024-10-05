import React from 'react';
import ProductTab from "@/components/product/ProductTab";
import ProductGalleryAndDetails from "@/components/product/ProductGalleryAndDetails";

function ProductDetails(props) {
    return (
        <div className="pt-6 pb-2 md:pt-7">
            <ProductGalleryAndDetails/>
            <ProductTab/>
        </div>

    );
}

export default ProductDetails;