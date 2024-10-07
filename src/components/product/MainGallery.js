import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { NextIcon, PrevIcon } from "@/components/icons/NavigationIcons";
import SwiperNavigation from "@/components/ui/SwiperNavigation";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function MainGallery({ swiperRef, thumbsSwiper, images, prevRef, nextRef }) {
    return (
        <div className="w-full overflow-hidden rounded-md relative mx-auto ">
            <Swiper
                ref={swiperRef}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                onSwiper={(swiper) => {
                    if (prevRef.current && nextRef.current) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;

                        if (swiper.navigation) {
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative overflow-hidden mx-auto rounded-lg flex justify-center">
                            <Zoom>
                                <Image
                                    alt={image.alt}
                                    src={image.src}
                                    sizes={image.sizes}
                                    width={500}
                                    height={500}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    className="object-cover"
                                />
                            </Zoom>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SwiperNavigation nextRef={nextRef} prevRef={prevRef} />
        </div>
    );
}

export default MainGallery;
