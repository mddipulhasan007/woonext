'use client';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons'; // Import custom icons
import Image from "next/image";


export default function HomeCategory() {
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

  const categories = [
    {
      href: "#",
      src: "/assets/images/category/cate1.png",
      alt: "Audio Music",
      title: "Audio Music",
      products: "125 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate2.png",
      alt: "Phones & Tablets",
      title: "Phones & Tablets",
      products: "255 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate3.png",
      alt: "Fashion & Clothing",
      title: "Fashion & Clothing",
      products: "250 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate4.png",
      alt: "Garden & Kitchen",
      title: "Garden & Kitchen",
      products: "120 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate5.png",
      alt: "TV & Video",
      title: "TV & Video",
      products: "250 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate6.png",
      alt: "Beauty & Health",
      title: "Beauty & Health",
      products: "450 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate7.png",
      alt: "Jewelry & Watches",
      title: "Jewelry & Watches",
      products: "320 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate8.png",
      alt: "Top 10 Offers",
      title: "Top 10 Offers",
      products: "350 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate7.png",
      alt: "Jewelry & Watches",
      title: "Jewelry & Watches",
      products: "320 Products"
    },
    {
      href: "#",
      src: "/assets/images/category/cate8.png",
      alt: "Top 10 Offers",
      title: "Top 10 Offers",
      products: "350 Products"
    }
  ];
  

  return (
    <div className="mb-8 lg:mb-12">
      <div className="w-full overflow-hidden">
        <div className="carouselWrapper relative shopby-categories dotsCircleNone">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={8}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              // Set the navigation once Swiper is mounted
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index} style={{ width: "163.75px", marginRight: 10 }}>
                <Link className="group block w-full" href={category.href}>
                  <div className="flex flex-col items-center text-[14px] card-category--zoom gap-2">
                    <div className="card-category--thumb rounded-full relative bg-gray-100 min-w-[100px] h-[100px]">
                      <div className="relative inline-block overflow-hidden mx-auto box-sizing">
                        <div className="block w-full box-sizing">
                            <svg
                                className="block max-w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                width={100}
                                height={100}
                                version="1.1"
                            />
                        </div>
                        <Image
                          alt={category.alt}
                          width={0}
                          height={0}
                          loading="lazy"
                          decoding="async"
                          className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                          sizes="100vw"
                          src={category.src}
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                    <div className="category-info text-center">
                      <h3 className="font-semibold text-brand-dark truncate leading-6 group-hover:text-skin-primary">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.products}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center w-full absolute z-10 top-2/4">
            <div
              ref={prevRef}
              className="swiper-prev w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation 3xl:text-2xl start-3 xl:start-5"
              id="prevActivateId"
            >
              <PrevIcon /> {/* Use imported PrevIcon here */}
            </div>
            <div
              ref={nextRef}
              className="swiper-next w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation 3xl:text-2xl end-3 xl:end-5"
              id="nextActivateId"
            >
              <NextIcon /> {/* Use imported NextIcon here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
