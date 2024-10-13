import React from 'react';
import CartIconWhite from "@/components/icons/CartIconWhite";
import { addToCart } from "@/slice/cartSlice";
import { useDispatch } from "react-redux";

function AddtoCartButton({ product, selectedVariation, isVariableProduct }) {
    const isAddToCartDisabled = isVariableProduct && !selectedVariation;
    const dispatch = useDispatch();

    // Prepare the variation details to include attributes and values if it's a variable product
    const variationTocart = selectedVariation
        ? {
            ...selectedVariation,
            id: selectedVariation.id,
            name: product.name,
            attributes: selectedVariation.attributes ?
                Object.entries(selectedVariation.attributes).reduce((acc, [key, value]) => {
                    acc[key] = value; // attribute name as key and attribute value
                    return acc;
                }, {}) : {}
        }
        : {};

    const handleAddToCart = () => {
        if (!isAddToCartDisabled) {
            dispatch(addToCart(variationTocart));
        }
    };

    return (
        <button
            onClick={handleAddToCart}
            data-variant="primary"
            className={`group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 
              ${isAddToCartDisabled ? 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50' : 'hover:text-white hover:bg-opacity-90'} flex-auto w-full px-1.5`}
            disabled={isAddToCartDisabled} // Disable only for variable products without a valid variation
        >
            <CartIconWhite />
            {isAddToCartDisabled ? 'Select Options' : 'Add to Cart'}
        </button>
    );
}

export default AddtoCartButton;
