import React, { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure CSS is imported

function ProductNamePrice({ product }) {
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    useEffect(() => {
        if (product.type === 'variable') {
            // Extract prices from the product variations
            const prices = product.variations.map((variation) => parseFloat(variation.price));

            if (prices.length > 0) {
                const min = Math.min(...prices); // Minimum price
                const max = Math.max(...prices); // Maximum price

                setMinPrice(min);
                setMaxPrice(max);
            }
        } else {
            // For simple products, use the product price directly
            setMinPrice(parseFloat(product.price));
            setMaxPrice(parseFloat(product.price));
        }
    }, [product]);

    return (
        <div className="pb-4 lg:pb-8">
            {/* Product Name */}
            <div className="md:mb-2.5 block -mt-1.5">
                <h2 className="text-lg font-medium transition-colors duration-300 text-brand-dark md:text-xl xl:text-2xl">
                    {product? product.name: ""}
                </h2>
            </div>

            {/* Product Price */}
            <div className="flex items-center mt-5">
                <div className="text-brand font-medium text-base md:text-xl xl:text-[30px]">
                    {minPrice === null || maxPrice === null ? (
                        // Show Skeleton while prices are being loaded
                        <Skeleton width={200} height={28} />
                    ) : (
                        // Display price for variable or simple product
                        <span>
                            {product.type === 'variable' && minPrice !== maxPrice ? `$${minPrice} – $${maxPrice}` : `$${minPrice}`}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductNamePrice;
