'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import ProductCard from "@/components/ui/ProductCard";
import SwiperNavigation from "@/components/ui/SwiperNavigation";

export default function PopularProductsCarousel({products}) {
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

    const popularProducts = products.slice(20, 28);


    return (
        <div className="heightFull relative mb-8 lg:mb-15">
            <div className="py-3 uppercase mb-1.5 rounded bg-white px-5">
                <h3 className="text-fill-base text-[16px] lg:leading-7 font-bold">
                    <div>Popular Products</div>
                </h3>
            </div>
            <div className="heightFull">
                <div className="carouselWrapper relative dotsCircleNone">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={6}
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
                                    slidesPerView: 6
                                }

                            }
                        }
                    >
                        {popularProducts.map((product, index) => (
                            <SwiperSlide key={index} style={{ width: "224.25px", marginRight: 6 }}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <SwiperNavigation prevRef={prevRef} nextRef={nextRef} />
                </div>
            </div>
        </div>
    );
}
