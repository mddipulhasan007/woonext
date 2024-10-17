import React, { useState } from 'react';
import ProductNamePrice from "@/components/product/ProductNamePrice";
import ProductVariations from "@/components/product/ProductVariations";
import QuantityUpdate from "@/components/product/QuantityUpdate";
import AddtoCartButton from "@/components/product/AddtoCartButton";
import AddtoWishlist from "@/components/product/AddtoWishlist";
import ShareButton from "@/components/product/ShareButton";

function ProductDetailsAndAddToCart({ product }) {
    const [selectedVariation, setSelectedVariation] = useState(null); // Track selected variation for variable products
    const isVariableProduct = product.type === "variable"; // Check if product is variable

    // State to keep track of the quantity
    const [quantity, setQuantity] = useState(1);

    // Function to decrease the quantity
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Function to increase the quantity
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
//console.log(product)
    return (
        <div className="flex flex-col col-span-5 shrink-0 xl:ltr:pl-2 xl:rtl:pr-2">
            <ProductNamePrice product={product} />

            {/* Show variations only for variable products */}
            {isVariableProduct && (
                <ProductVariations product={product} setSelectedVariation={setSelectedVariation} />
            )}

            <div className="pb-2" />
            <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
                <QuantityUpdate quantity={quantity} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
                <div className="flex flex-col md:flex-row gap-2.5">
                    {/* Pass selectedVariation to AddtoCartButton. If it's a simple product, variation isn't needed */}
                    <AddtoCartButton
                        product={product}
                        quantity={quantity}
                        selectedVariation={selectedVariation}
                        isVariableProduct={isVariableProduct}
                    />
                    <AddtoWishlist />
                    <ShareButton />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsAndAddToCart;
