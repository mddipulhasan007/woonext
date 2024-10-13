import React from 'react';
import WishListIcon from "@/components/icons/WishListIcon";

function AddtoWishlist(props) {
    return (
        <button
            data-variant="border"
            className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand-light text-base border border-border-four tracking-widest px-5  py-4 md:py-3.5 lg:py-4 w-full md:w-96 group hover:text-brand false"
        >
            <WishListIcon/>
            My Wishlist
        </button>
    );
}

export default AddtoWishlist;