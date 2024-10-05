"use client";
import React from 'react';
import HeroSliderBlock from "@/components/home/HeroSliderBlock";
import HomeCategory from "@/components/home/HomeCategory";
import HotDeals from "@/components/home/HotDeals";
import BestProducts from "@/components/home/BestProducts";
import GetDiscount from "@/components/home/GetDiscount";
import OfferProducts from "@/components/home/OfferProducts";
import PopularProducts from "@/components/home/PopularProducts";
import HomeBlogs from "@/components/home/HomeBlogs";

import "react-toastify/dist/ReactToastify.css";
import RelatedProducts from "@/components/product/RelatedProducts";
import Breadcrumb from "@/components/product/Breadcrumb";
import ProductDetails from "@/components/product/ProductDetails";





function ProductClient(props) {
    return (
        <>
            <div className="pt-6 lg:pt-7 ">
                <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                    <Breadcrumb/>
                    <ProductDetails/>
                    <RelatedProducts />

                </div>
            </div>
        </>
    );
}

export default ProductClient;