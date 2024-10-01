'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import ProductCard from "@/components/ui/ProductCard";

export default function BestProductsCarousel() {
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

    const bestProducts = [
        {
            href: '#',
            src: '/assets/images/products/p-10.jpg',
            alt: 'Australian Large Granny Smith Apples',
            title: 'Australian Large Granny Smith Apples',
            price: '$65.60',
            originalPrice: '$90.00',
            sold: '270 products',
            isInStock: true,
            isOnSale: true,
        },
        {
            href: '#',
            src: '/assets/images/products/p-1.jpg',
            alt: '[Sample] Able Brewing System consetetur sadipscing elitr',
            title: '[Sample] Able Brewing System consetetur sadipscing elitr',
            price: '$2,000.00',
            sold: 'Out of Stock',
            isInStock: false,
            isOnSale: false,
        },
        {
            href: '#',
            src: '/assets/images/products/p-11.jpg',
            alt: 'Organic Red Seedless Grapes',
            title: 'Organic Red Seedless Grapes',
            price: '$45.00',
            originalPrice: '$55.00',
            sold: '180 products',
            isInStock: true,
            isOnSale: true,
        },
        {
            href: '#',
            src: '/assets/images/products/p-12.jpg',
            alt: 'Electric Blender Set with Extra Jars',
            title: 'Electric Blender Set with Extra Jars',
            price: '$150.00',
            originalPrice: '$200.00',
            sold: '320 products',
            isInStock: true,
            isOnSale: true,
        },
        {
            href: '#',
            src: '/assets/images/products/p-13.jpg',
            alt: 'Organic Bananas - Fresh Bunch',
            title: 'Organic Bananas - Fresh Bunch',
            price: '$10.00',
            originalPrice: '$12.00',
            sold: '500 products',
            isInStock: true,
            isOnSale: false,
        },
        {
            href: '#',
            src: '/assets/images/products/p-14.jpg',
            alt: 'Non-stick Frying Pan with Heat-resistant Handle',
            title: 'Non-stick Frying Pan with Heat-resistant Handle',
            price: '$30.00',
            originalPrice: '$45.00',
            sold: '120 products',
            isInStock: true,
            isOnSale: true,
        },
        {
            href: '#',
            src: '/assets/images/products/p-15.jpg',
            alt: 'Elegant Ceramic Tea Pot',
            title: 'Elegant Ceramic Tea Pot',
            price: '$25.00',
            originalPrice: '$30.00',
            sold: '250 products',
            isInStock: true,
            isOnSale: false,
        },
    ];





    return (

        <div className="heightFull relative mb-8 lg:mb-15">
            <div className=" py-3 uppercase mb-1.5 rounded bg-white px-5">
                <h3 className="text-fill-base text-[16px] lg:leading-7 font-bold">
                    <div>Best Products</div>
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
                        {bestProducts.map((product, index) => (
                            <SwiperSlide key={index} style={{width: "224.25px", marginRight: 6}}>
                                <ProductCard product={product}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex items-center w-full absolute z-10 top-2/4">
                        <div
                            ref={prevRef}
                            className="swiper-prev w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation start-3 xl:start-5"
                        >
                            <PrevIcon/>
                        </div>
                        <div
                            ref={nextRef}
                            className="swiper-next w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation end-3 xl:end-5"
                        >
                            <NextIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
    ;
}
