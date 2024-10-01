import React, { useRef, useEffect } from 'react';
import {NextIcon, PrevIcon} from "@/components/icons/NavigationIcons";

function SwiperNavigation({prevRef,nextRef}) {

    return (
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
    );
}

export default SwiperNavigation;