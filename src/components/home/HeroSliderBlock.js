'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useEffect } from 'react';
import HomeCategory from './HomeCategory';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import Image from "next/image";

export default function HeroSliderBlock() {
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

  // Slide data array
  const slides = [
    {
      backgroundImage: 'url("/assets/images/hero/home1/slide-1.jpg")',
      subTitle: 'Top Trending',
      title: 'Trending Your New Style',
      href: '#',
    },
    {
      backgroundImage: 'url("/assets/images/hero/home1/slide-2.jpg")',
      subTitle: 'New Arrivals',
      title: 'Apple Top AirPods Pro',
      href: '#',
    },
    {
      backgroundImage: 'url("/assets/images/hero/home1/slide-3.jpg")',
      subTitle: 'Top Offer',
      title: 'Cellphone 25MP Pro Camera',
      href: '#',
    },
  ];

  // Banner data array
  const banners = [
    {
      imgSrc: '/assets/images/banner/home1/slider-1.png',
      alt: 'Free delivery from your store',
      href: '#',
    },
    {
      imgSrc: '/assets/images/banner/home1/slider-2.png',
      alt: 'Fresh Healthy Breakfast food',
      href: '#',
    },
  ];

  return (
    
      <div className="grid xl:gap-[5px] grid-cols-1 xl:grid-cols-12">
        <div className="xl:col-span-8 mb-5 xl:mb-12">
          <div className="carouselWrapper relative dotsCircle">
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full bg-no-repeat bg-cover bg-center flex items-center rounded min-h-[320px] md:min-h-[367px] bg-fill-thumbnail p-7 sm:py-18 xl:py-16 sm:px-16 xl:px-24 md:min-h-[270px] xl:min-h-[375px]"
                    style={{
                      backgroundImage: slide.backgroundImage,
                      backgroundPosition: 'center center',
                    }}
                  >
                    <div className="sm:absolute inset-0 m-[15px] md:mt-[30px] xl:mt-[50px] w-full mx-auto max-w-[480px] md:max-w-[580px] xl:max-w-[700px]">
                      <div className="text-left md:w-8/12 lg:w-6/12">
                        <p className="text-[12px] leading-7 uppercase font-bold text-brand-light">
                          {slide.subTitle}
                        </p>
                        <h2 className="text-4xl md:text-4xl font-semibold mt-2 leading-8 xl:text-5xl 2xl:text-[36px] text-brand-light leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3">
                          {slide.title}
                        </h2>
                        <a
                          className="h-[44px] mt-5 md:mt-12 text-base inline-flex items-center justify-center transition duration-300 rounded px-10 py-2 font-semibold text-fill-base bg-white hover:text-white hover:bg-brand"
                          href={slide.href}
                        >
                          Get it Now
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center w-full absolute z-10 top-2/4">
              <div
                ref={prevRef}
                className="swiper-prev w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation 3xl:text-2xl start-3 xl:start-5"
                id="prevActivateId"
              >
                <PrevIcon />
              </div>
              <div
                ref={nextRef}
                className="swiper-next w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation 3xl:text-2xl end-3 xl:end-5"
                id="nextActivateId"
              >
                <NextIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 mb-5 xl:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 xl:gap-[5px]">
            {banners.map((banner, index) => (
              <div key={index} className="mx-auto w-full overflow-hidden rounded">
                <a
                  className="h-full w-full group flex justify-center relative overflow-hidden"
                  href={banner.href}
                >
                  <div className="relative inline-block overflow-hidden w-full box-sizing">
                    <div className="block w-full box-sizing">
                      <svg
                        className="block max-w-full h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width={441}
                        height={185}
                        version="1.1"
                      />
                    </div>
                    <Image
                      alt={banner.alt || "Product name"}
                      loading="lazy"
                      width={0}
                      height={0}
                      decoding="async"
                      data-nimg={1}
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover object-left-top"
                      style={{ color: 'transparent' }}
                      sizes="100vw"
                      srcSet={banner.imgSrc}
                      src={banner.imgSrc}
                    />
                  </div>
                  <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      

  );
}
