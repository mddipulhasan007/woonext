'use client'
import React, {useEffect, useState} from 'react';
import DealBanner from "@/components/ui/DealBanner";
import HotProductCarousel from "@/components/ui/HotDealProductCarousel";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import {axiosInstance} from "@/services/axios";

function HotDeals({products}) {



//console.log(hotProducts)

    return (
        <div className="mb-12 lg:mb-14 navSlider">
            <DealBanner />
            <div className="xl:flex gap-1 relative heightFull">
                <div className="xl:max-w-[466px] relative overflow-hidden flex items-center">
                    <div className="relative inline-block overflow-hidden mx-auto box-sizing">
                        <div className="block w-full box-sizing">
                            <svg
                                className="block max-w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                width={465}
                                height={395}
                                version="1.1"
                            />
                        </div>
                        <Image
                            alt="Product Image"
                            loading="lazy"
                            width={0}
                            height={0}
                            decoding="async"
                            data-nimg={1}
                            className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                            style={{color: "transparent"}}
                            sizes="100vw"
                            src="/assets/images/banner/home1/hotdeals.png"
                        />
                    </div>
                </div>
                <HotProductCarousel products={products} />
            </div>

        </div>
    );
}

export default HotDeals;
