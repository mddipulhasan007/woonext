import React, {useEffect, useState} from 'react';
import ProductCard from "@/components/ui/ProductCard";
import Skeleton from "react-loading-skeleton";
import ProductCardLoader from "@/components/Skeleton/ProductCardLoader";
import SortByPriceAndViewAs from "@/components/products/SortByPriceAndViewAs";

function ProductsGrid({ products }) {



    return (
        <div className="w-full">
            {/*<SortByPriceAndViewAs onSortChange={handleSortChange} />*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1.5">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                ) : (
                    // Render Skeletons if products are empty and loading is true
                    Array.from({ length: 10 }).map((_, index) => (
                        <ProductCardLoader key={index} />
                    ))
                )}
            </div>
        </div>
    );
}



export default ProductsGrid;
