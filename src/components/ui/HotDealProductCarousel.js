'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import ProductCard from "@/components/ui/ProductCard"; // Import custom icons

export default function HotProductCarousel() {
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

    const hotProducts = [
        {
            href: '/en/products/sample-able-brewing-system-consetetur',
            src: '/assets/images/products/p-1.jpg',
            alt: '[Sample] Able Brewing System consetetur',
            title: '[Sample] Able Brewing System consetetur',
            price: '$2,000.00',
            sold: '20/50 products',
            isOnSale: true
        },
        {
            href: '/en/products/sample-tiered-wire-basket-consetetur-sadipscing-elitr',
            src: '/assets/images/products/p-2.jpg',
            alt: '[Sample] Tiered Wire Basket consetetur sadipscing elitr',
            title: '[Sample] Tiered Wire Basket consetetur sadipscing elitr',
            price: '$5.00 - $15.00',
            sold: '10/60 products',
            isOnSale: true
        },
        {
            href: '/en/products/fog-linen-chambray-towel-beige-stripe',
            src: '/assets/images/products/p-3.jpg',
            alt: 'Fog Linen Chambray Towel - Beige Stripe',
            title: 'Fog Linen Chambray Towel - Beige Stripe',
            price: '$5.00 - $15.00',
            sold: '16/54 products',
            isOnSale: true
        },
        {
            href: '/en/products/chemex-coffeemaker-3-cup-consetetur-sadipscing-elitr',
            src: '/assets/images/products/p-4.jpg',
            alt: 'Chemex Coffeemaker 3 Cup consetetur sadipscing',
            title: 'Chemex Coffeemaker 3 Cup consetetur sadipscing',
            price: '$5.00 - $15.00',
            sold: '16/54 products',
            isOnSale: true
        },
        {
            href: '/en/products/chester\'s-fries-flamen-hot-corn-potato-snacks',
            src: '/assets/images/products/p-5.jpg',
            alt: 'Chester\'s Fries Flamen Hot Corn Potato Snacks',
            title: 'Chester\'s Fries Flamen Hot Corn Potato Snacks',
            price: '$5.00 - $15.00',
            sold: '26/44 products',
            isOnSale: true
        },
        {
            href: '/en/products/sample-canvas-laundry-cart-sed-diam-nonumy-eirmod',
            src: '/assets/images/products/p-6.jpg',
            alt: '[Sample] Canvas Laundry Cart sed diam nonumy eirmod',
            title: '[Sample] Canvas Laundry Cart sed diam nonumy eirmod',
            price: '$15.00 - $25.00',
            sold: '16/154 products',
            isOnSale: true
        }
    ];




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
                >
                    {hotProducts.map((product, index) => (
                        <SwiperSlide key={index} style={{ width: "224.25px", marginRight: 6 }}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
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
