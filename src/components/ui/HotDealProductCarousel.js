'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import ProductCard from "@/components/ui/ProductCard";
import Skeleton from "react-loading-skeleton"; // Import custom icons

export default function HotProductCarousel({products}) {

    const hotProducts = products;
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;

            // Assign navigation elements to swiper params
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            // Initialize and update swiper navigation
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, []);

//console.log(hotProducts.length);
    return (
        <div className="trendy-main-content">
            <div className="carouselWrapper relative dotsCircleNone">

                <Swiper
                    ref={swiperRef}
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        // Set the navigation once Swiper is mounted
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;

                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={
                        {
                            320: {
                              slidesPerView: 2
                            },
                            767: {
                              slidesPerView: 3
                            },
                            1024:{
                                slidesPerView: 4
                            }

                        }
                    }
                >
                    {
                        products.length > 0 ? (
                            products.map((product, index) => (
                                <SwiperSlide key={index} style={{ width: "224.25px", marginRight: 6 }}>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))
                        ) : (
                            // Render Skeleton when hotProducts.length is 0
                            Array.from({ length: 5 }).map((_, index) => (
                                <SwiperSlide key={index} style={{ width: "224.25px", marginRight: 6 }}>
                                    <div style={{ padding: '0rem' }}>
                                        <Skeleton width={224} height={300} />
                                        <Skeleton width={224} height={40} style={{ marginTop: '1rem' }} />
                                        <Skeleton width={224} height={30} style={{ marginTop: '0.5rem' }} />
                                    </div>
                                </SwiperSlide>
                            ))
                        )
                    }
                </Swiper>
                <div className="flex items-center w-full absolute z-10 top-2/4">
                    <div
                        ref={prevRef}
                        className="swiper-prev w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation start-3 xl:start-5"
                    >
                        <PrevIcon />
                    </div>
                    <div
                        ref={nextRef}
                        className="swiper-next w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation end-3 xl:end-5"
                    >
                        <NextIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
