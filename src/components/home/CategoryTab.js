
'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PrevIcon, NextIcon } from '@/components/icons/NavigationIcons';
import ProductCard from "@/components/ui/ProductCard";
import SwiperNavigation from "@/components/ui/SwiperNavigation";

function CategoryTab() {
    const [selectedTab, setSelectedTab] = useState(0);
    const swiperRefs = useRef([]);
    const prevRefs = useRef([]);
    const nextRefs = useRef([]);

    const tabs = [
        { name: "Bags & Accessories", key: "bags" },
        { name: "Electronic & Digital", key: "electronic" },
        { name: "Garden & Kitchen", key: "garden" },
        { name: "Home & Kitchen", key: "home" },
    ];

    const productsForTabs = {
        bags: [
            { href: '#', src: '/assets/images/products/p-10.jpg', alt: 'Australian Large Granny Smith Apples', title: 'Australian Large Granny Smith Apples', price: '$65.60', originalPrice: '$90.00', sold: '270 products', isInStock: true, isOnSale: true },
            { href: '#', src: '/assets/images/products/p-1.jpg', alt: '[Sample] Able Brewing System consetetur sadipscing elitr', title: '[Sample] Able Brewing System consetetur sadipscing elitr', price: '$2,000.00', sold: 'Out of Stock', isInStock: false, isOnSale: false },
            { href: '#', src: '/assets/images/products/p-2.jpg', alt: 'Leather Travel Bag', title: 'Leather Travel Bag', price: '$120.00', originalPrice: '$150.00', sold: '150 products', isInStock: true, isOnSale: true },
            { href: '#', src: '/assets/images/products/p-3.jpg', alt: 'Canvas Tote Bag', title: 'Canvas Tote Bag', price: '$25.00', originalPrice: '$30.00', sold: '400 products', isInStock: true, isOnSale: false },
            { href: '#', src: '/assets/images/products/p-4.jpg', alt: 'Luxury Handbag', title: 'Luxury Handbag', price: '$300.00', originalPrice: '$350.00', sold: '50 products', isInStock: true, isOnSale: true },
            { href: '#', src: '/assets/images/products/p-5.jpg', alt: 'Backpack with Multiple Compartments', title: 'Backpack with Multiple Compartments', price: '$80.00', originalPrice: '$100.00', sold: '200 products', isInStock: true, isOnSale: false },
            { href: '#', src: '/assets/images/products/p-6.jpg', alt: 'Laptop Bag', title: 'Laptop Bag', price: '$55.00', originalPrice: '$70.00', sold: '300 products', isInStock: true, isOnSale: true },
            { href: '#', src: '/assets/images/products/p-7.jpg', alt: 'Travel Duffel Bag', title: 'Travel Duffel Bag', price: '$90.00', originalPrice: '$120.00', sold: '120 products', isInStock: true, isOnSale: true },
        ],
        electronic: [
            { href: '#', src: '/assets/images/products/p-11.jpg', alt: 'Organic Red Seedless Grapes', title: 'Organic Red Seedless Grapes', price: '$45.00', originalPrice: '$55.00', sold: '180 products', isInStock: true, isOnSale: true },
            { href: '#', src: '/assets/images/products/p-12.jpg', alt: 'Electric Blender Set with Extra Jars', title: 'Electric Blender Set with Extra Jars', price: '$150.00', originalPrice: '$200.00', sold: '320 products', isInStock: true, isOnSale: true },
        ],
        garden: [
            { href: '#', src: '/assets/images/products/p-13.jpg', alt: 'Organic Bananas - Fresh Bunch', title: 'Organic Bananas - Fresh Bunch', price: '$10.00', originalPrice: '$12.00', sold: '500 products', isInStock: true, isOnSale: false },
            { href: '#', src: '/assets/images/products/p-14.jpg', alt: 'Non-stick Frying Pan with Heat-resistant Handle', title: 'Non-stick Frying Pan with Heat-resistant Handle', price: '$30.00', originalPrice: '$45.00', sold: '120 products', isInStock: true, isOnSale: true },
        ],
        home: [
            { href: '#', src: '/assets/images/products/p-11.jpg', alt: 'Organic Red Seedless Grapes', title: 'Organic Red Seedless Grapes', price: '$45.00', originalPrice: '$55.00', sold: '180 products', isInStock: true, isOnSale: true },
            { href: '#', src: '/assets/images/products/p-12.jpg', alt: 'Electric Blender Set with Extra Jars', title: 'Electric Blender Set with Extra Jars', price: '$150.00', originalPrice: '$200.00', sold: '320 products', isInStock: true, isOnSale: true },
        ],
    };

    useEffect(() => {
        // Initialize swiper when a tab changes
        if (swiperRefs.current[selectedTab]) {
            const swiperInstance = swiperRefs.current[selectedTab].swiper;

            if (swiperInstance) {
                swiperInstance.params.navigation.prevEl = prevRefs.current[selectedTab];
                swiperInstance.params.navigation.nextEl = nextRefs.current[selectedTab];
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
            }
        }
    }, [selectedTab]);

    return (
        <div className="mb-8 lg:mb-15">
            <div className="listing-tabs category-listing-tab">
                <div className="sm:flex items-center block-title mb-1.5 gap-2 px-5 py-2.5 rounded bg-white ltabs-heading">
                    <h3 className="text-base text-[16px] uppercase text-skin-base font-bold border-0 hover:text-skin-primary lg:basis-[30%]">
                        <a href="#?category=electronic-digital">Electronic &amp; Digital</a>
                    </h3>
                    <div className="ltabs-tabs-wrap flex flex-wrap justify-end lg:basis-[70%]">
                        <ul className="flex text-[14px] leading-7">
                            {tabs.map((tab, index) => (
                                <li
                                    key={tab.key}
                                    className={`ps-5 cursor-pointer ${selectedTab === index ? 'text-skin-primary' : 'text-fill-base'} hover:text-skin-primary`}
                                    onClick={() => setSelectedTab(index)}
                                >
                                    {tab.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="heightFull relative">
                    {tabs.map((tab, index) => (
                        <div key={tab.key} style={{ display: selectedTab === index ? 'block' : 'none' }}>
                            <div className="carouselWrapper relative dotsCircleNone">
                                <Swiper
                                    ref={(el) => (swiperRefs.current[index] = el)}
                                    spaceBetween={10}
                                    slidesPerView={6}
                                    modules={[Navigation]}
                                    onSwiper={(swiper) => {
                                        swiper.params.navigation.prevEl = prevRefs.current[index];
                                        swiper.params.navigation.nextEl = nextRefs.current[index];
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    }}
                                    breakpoints={
                                        {
                                            320: {
                                                slidesPerView: 2
                                            },
                                            767: {
                                                slidesPerView: 3
                                            },
                                            1024:{
                                                slidesPerView: 6
                                            }

                                        }
                                    }
                                    loop={true}
                                >
                                    {productsForTabs[tab.key].map((product, idx) => (
                                        <SwiperSlide key={idx}>
                                            <ProductCard product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <SwiperNavigation prevRef={(el) => (prevRefs.current[index] = el)} nextRef={(el) => (nextRefs.current[index] = el)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryTab;
