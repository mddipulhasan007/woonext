'use client';
import React, { useRef, useEffect, useState } from 'react';
import GalleryPreview from "@/components/product/GalleryPreview";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import GalleryThumbnails from "@/components/product/GalleryThumbnails";
import MainGallery from "@/components/product/MainGallery";

const images = [
    {
        alt: 'Product gallery 1',
        src: '/assets/images/products/p-3-1.jpg',
        sizes: '100vw',
    },
    {
        alt: 'Product gallery 2',
        src: '/assets/images/products/p-3-2.jpg',
        sizes: '100vw',
    },
    {
        alt: 'Product gallery 3',
        src: '/assets/images/products/p-3-3.jpg',
        sizes: '100vw',
    },
    {
        alt: 'Product gallery 2',
        src: '/assets/images/products/p-3-2.jpg',
        sizes: '100vw',
    },
    {
        alt: 'Product gallery 1',
        src: '/assets/images/products/p-3-1.jpg',
        sizes: '100vw',
    },
    {
        alt: 'Product gallery 3',
        src: '/assets/images/products/p-3-3.jpg',
        sizes: '100vw',
    },    {
        alt: 'Product gallery 1',
        src: '/assets/images/products/p-3-1.jpg',
        sizes: '100vw',
    },
    {
        alt: 'Product gallery 3',
        src: '/assets/images/products/p-3-3.jpg',
        sizes: '100vw',
    },
    // Add more images as needed
];

const ProductGallery = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            const swiperInstance = swiperRef.current.swiper;

            if (swiperInstance && thumbsSwiper) {
                // Assign navigation elements to swiper params safely
                swiperInstance.params.navigation.prevEl = prevRef.current;
                swiperInstance.params.navigation.nextEl = nextRef.current;

                // Check and initialize navigation only when references are properly assigned
                if (prevRef.current && nextRef.current) {
                    swiperInstance.navigation.init();
                    swiperInstance.navigation.update();
                }
            }
        }
    }, [thumbsSwiper, swiperRef]);

    return (
        <div className="col-span-5 mb-6 overflow-hidden md:mb-8 lg:mb-0">
            <div className="w-full xl:flex relative flex-col">
                {/*<GalleryPreview />*/}
                <MainGallery swiperRef={swiperRef} thumbsSwiper={thumbsSwiper } images={images} prevRef={prevRef} nextRef={nextRef}/>
                <GalleryThumbnails images={images} setThumbsSwiper={setThumbsSwiper} />
            </div>
        </div>
    );
}




export default ProductGallery;
