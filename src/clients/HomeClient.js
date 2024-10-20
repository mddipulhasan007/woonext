'use client'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import HeroSliderBlock from "@/components/home/HeroSliderBlock";
import HomeCategory from "@/components/home/HomeCategory";
import HotDeals from "@/components/home/HotDeals";
import BestProducts from "@/components/home/BestProducts";
import GetDiscount from "@/components/home/GetDiscount";
import CategoryTab from "@/components/home/CategoryTab";
import OfferProducts from "@/components/home/OfferProducts";
import PopularProducts from "@/components/home/PopularProducts";
import HomeBlogs from "@/components/home/HomeBlogs";
import {axiosInstance} from "@/services/axios";




export default function HomeClient({ products }) {


    const [hotProducts, setHotproducts] = useState([]);
    const [bestProducts, setBestproducts] = useState([]);
    const [popularProducts, setPopularproducts] = useState([]);

    useEffect(() => {

        async function getHotproducts() {
            const hotProducts = await axiosInstance.get('/products', {
                params: {
                    per_page: 8,
                    page: 1
                }
            })
            setHotproducts(hotProducts.data)

            const bestProducts = await axiosInstance.get('/products', {
                params: {
                    per_page: 8,
                    page: 2
                }
            })
            setBestproducts(bestProducts.data)
            const popularProducts = await axiosInstance.get('/products', {
                params: {
                    per_page: 8,
                    page: 3
                }
            })
            setPopularproducts(popularProducts.data)


        }
        getHotproducts()

    }, []);






  return (
    <>
      <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
        <HeroSliderBlock />
        <HomeCategory />
      </div>

      <div className="bg-gray-100 py-10 sm:py-14">
        <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
          <HotDeals products={hotProducts} />
          <BestProducts products={bestProducts} />
          <GetDiscount />
          {/*<CategoryTab />*/}
          <OfferProducts />
          <PopularProducts products={popularProducts} />
          <HomeBlogs />
        </div>
      </div>
    </>
  );
}
