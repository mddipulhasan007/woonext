"use client";
import React from 'react';


import "react-toastify/dist/ReactToastify.css";
import RelatedProducts from "@/components/product/RelatedProducts";
import Breadcrumb from "@/components/product/Breadcrumb";
import ProductDetails from "@/components/product/ProductDetails";





function ProductClient({product}) {
    return (
        <>
            <div className="pt-6 lg:pt-7 ">
                <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                    <Breadcrumb product={product}/>
                    <ProductDetails product={product}/>
                    <RelatedProducts />

                </div>
            </div>
        </>
    );
}

export default ProductClient;