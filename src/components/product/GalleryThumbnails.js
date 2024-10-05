import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper/modules";
import Image from "next/image";


export  default  function GalleryThumbnails({ images, setThumbsSwiper }){

    return (
    <div className="py-5 shrink-0 xl:w-[100px] 2xl:w-[120px]">
        <Swiper
            direction="vertical"
            spaceBetween={10}
            slidesPerView={'auto'} // This setting allows Swiper to adjust to the content dynamically
            modules={[Navigation, Thumbs]}
            watchSlidesProgress={true}
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            style={{ height: '400px' }} // Explicitly set the height
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ height: '100px' }}> {/* Ensure each slide has a consistent height */}
                    <div className="relative inline-block overflow-hidden mx-auto box-sizing rounded border border-border-base transition hover:opacity-75">
                        <Image
                            alt={`Product thumb gallery ${index + 1}`}
                            src={image.src}
                            sizes={image.sizes}
                            width={100}
                            height={100}
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
)};