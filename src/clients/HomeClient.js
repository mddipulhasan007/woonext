import React from "react";
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

export default function HomeClient({ products }) {
  return (
    <>
      <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
        <HeroSliderBlock />
        <HomeCategory />
      </div>

      <div className="bg-zinc-100 py-10 sm:py-14">
        <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
          <HotDeals />
          <BestProducts />
          <GetDiscount />
          {/*<CategoryTab />*/}
          <OfferProducts />
          <PopularProducts />
          <HomeBlogs />
        </div>
      </div>
    </>
  );
}
