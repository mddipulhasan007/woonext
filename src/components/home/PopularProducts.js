'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import ProductCard from "@/components/ui/ProductCard";
import SwiperNavigation from "@/components/ui/SwiperNavigation";

export default function PopularProductsCarousel() {
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

    const popularProducts = [
        {
            id: 1,
            title: "[Sample] Able Brewing System consetetur",
            category: "Common Good",
            price: "$2,000.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-1.jpg",
            link: "#",
            buttonLabel: "Add to Cart"
        },
        {
            id: 2,
            title: "[Sample] Tiered Wire Basket consetetur sadipscing elitr",
            category: "Common Good",
            price: "$5.00 - $15.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-2.jpg",
            link: "#",
            buttonLabel: "Product Details"
        },
        {
            id: 1,
            title: "[Sample] Able Brewing System consetetur",
            category: "Common Good",
            price: "$2,000.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-1.jpg",
            link: "#",
            buttonLabel: "Add to Cart"
        },
        {
            id: 2,
            title: "[Sample] Tiered Wire Basket consetetur sadipscing elitr",
            category: "Common Good",
            price: "$5.00 - $15.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-2.jpg",
            link: "#",
            buttonLabel: "Product Details"
        },
        {
            id: 3,
            title: "Fog Linen Chambray Towel - Beige Stripe",
            category: "1 Bag",
            price: "$5.00 - $15.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-3.jpg",
            link: "#",
            buttonLabel: "Product Details"
        },
        {
            id: 4,
            title: "Chemex Coffeemaker 3 Cup consetetur sadipscing",
            category: "1 each",
            price: "$5.00 - $15.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-4.jpg",
            link: "#",
            buttonLabel: "Product Details"
        },
        {
            id: 5,
            title: "Chester's Fries Flamen Hot Corn Potato Snacks",
            category: "1 each",
            price: "$5.00 - $15.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-5.jpg",
            link: "#",
            buttonLabel: "Product Details"
        },
        {
            id: 6,
            title: "[Sample] Canvas Laundry Cart sed diam nonumy eirmod",
            category: "1 each",
            price: "$5.00 - $15.00",
            rating: 5,
            reviewCount: 1,
            stockStatus: "In Stock",
            stockCount: 70,
            src: "/assets/images/products/p-6.jpg",
            link: "#",
            buttonLabel: "Product Details"
        }
    ];


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
