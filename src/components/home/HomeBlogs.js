'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import Image from "next/image";
import Link from "next/link";

export default function HomeBlogs() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;

            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, []);

    const blogPosts = [
        {
            id: 1,
            title: "The litigants on the screen are not actors",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi-million dollar home currently.",
            link: "/en/blog/the-litigants-on-the-screen-are-not-actors",
            imgSrc: "/assets/images/blog/blog-1.png"
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi-million dollar home currently.",
            link: "/en/blog/essential-qualities-of-highly-successful-music",
            imgSrc: "/assets/images/blog/blog-2.png"
        },
        {
            id: 3,
            title: "Essential Qualities of Highly Successful Music",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
            link: "/en/blog/essential-qualities-of-highly-successful-music",
            imgSrc: "/assets/images/blog/blog-3.png"
        },
        {
            id: 4,
            title: "Essential Qualities of Highly Successful Music",
            author: "Melissa Jones",
            date: "24 April 2022",
            summary: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
            link: "/en/blog/essential-qualities-of-highly-successful-music",
            imgSrc: "/assets/images/blog/blog-4.png"
        },
        {
            id: 5,
            title: "Essential Qualities of Highly Successful Music",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
            link: "/en/blog/essential-qualities-of-highly-successful-music",
            imgSrc: "/assets/images/blog/blog-5.png"
        },
        {
            id: 6,
            title: "Essential Qualities of Highly Successful Music",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
            link: "/en/blog/essential-qualities-of-highly-successful-music",
            imgSrc: "/assets/images/blog/blog-6.png"
        },
        {
            id: 7,
            title: "Essential Qualities of Highly Successful Music",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
            link: "/en/blog/essential-qualities-of-highly-successful-music",
            imgSrc: "/assets/images/blog/blog-7.png"
        },
        {
            id: 8,
            title: "Essential Qualities of Highly Successful Music",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
            link: "/en/blog/essential-qualities-of-highly-successful-music",
            imgSrc: "/assets/images/blog/blog-8.png"
        },
        {
            id: 9,
            title: "The litigants on the screen are not actors",
            author: "Melissa Jones",
            date: "21 April 2022",
            summary: "Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.",
            link: "/en/blog/the-litigants-on-the-screen-are-not-actors",
            imgSrc: "/assets/images/blog/blog-9.png"
        }
    ];

    return (
        <div className="heightFull relative">
            <div className="py-3 uppercase mb-1.5 rounded bg-white px-5">
                <h3 className="text-fill-base text-[16px] lg:leading-7 font-bold">
                    <div>Blogs</div>
                </h3>
            </div>
            <div className="heightFull relative">
                <div className="carouselWrapper relative dotsCircleNone">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation]}
                        onSwiper={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={
                            {
                                320: {
                                    slidesPerView: 1
                                },
                                767: {
                                    slidesPerView: 2
                                },
                                1024:{
                                    slidesPerView: 4
                                }

                            }
                        }
                    >
                        {blogPosts.map((post) => (
                            <SwiperSlide key={post.id} style={{width: "341.25px", marginRight: 5}}>
                                <Link className="group flex flex-col rounded bg-white overflow-hidden text-brand-muted"
                                   href="#">
                                    <div className="relative inline-block overflow-hidden mx-auto box-sizing rounded">
                                        <div className="block w-full box-sizing">
                                            <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg"
                                                 width={440} height={280} version="1.1"/>
                                        </div>
                                        <Image
                                            alt={post.title || "Product name"}
                                            width={0}
                                            height={0}
                                            loading="lazy"
                                            decoding="async"
                                            className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                            sizes="100vw"
                                            src={post.imgSrc}
                                            style={{color: "transparent"}}
                                        />
                                    </div>
                                    <div className="flex flex-col p-3 lg:p-5">
                                        <h2 className="text-fill-base text-base font-semibold mb-1 lg:mb-1.5 text-base line-clamp-2 min-h-[48px] group-hover:text-skin-primary">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm leading-7 lg:leading-[24px] text-[12px] mb-10 text-gray-500 uppercase">
                                            Post By: <span className="post-on ">{post.author}</span>
                                        </p>
                                        <div className="mt-2 mb-5 text-[14px] font-medium line-clamp-2">
                                            {post.summary}
                                        </div>
                                        <div
                                            className="text-[12px] flex justify-between items-center border-t border-black/10 pt-5">
                                            <div
                                                className="text-black p-0 font-bold uppercase group-hover:text-skin-primary">Read
                                                More
                                            </div>
                                            <div className="entry-meta text-gray-500 flex">{post.date}</div>
                                        </div>
                                    </div>
                                </Link>
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
    );
}
