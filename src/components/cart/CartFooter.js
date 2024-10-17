import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Link from "next/link";

function CartFooter() {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const cartItems = useSelector((state) => state.cart.items);

    // State to track if the component has mounted (to avoid hydration issues)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Check if cart is empty based on the number of items
    const isCartEmpty = cartItems.length === 0;

    // Only render content when the component has mounted to avoid mismatch
    if (!isMounted) {
        return null; // Or return a loading state if needed
    }

    return (
        <div className="px-5 pt-5 pb-5 border-t border-border-base md:px-7 md:pt-6 md:pb-6">
            <div className="flex pb-5 md:pb-7">
                <div className="ltr:pr-3 rtl:pl-3">
                    <h3 className="text-fill-base text-sm font-semibold mb-2.5">
                        Subtotal:
                    </h3>
                    <p className="text-sm leading-7 lg:leading-[24px] leading-6">
                        Final price and discounts will be determined at the time of
                        payment processing.
                    </p>
                </div>
                <div
                    className="shrink-0 font-semibold text-base md:text-lg text-brand-dark -mt-0.5 min-w-[80px] ltr:text-right rtl:text-left">
                    ${Number(totalPrice).toFixed(2)}
                </div>
            </div>
            <div className="flex flex-col">
                <Link
                    href={isCartEmpty ? "#" : "/checkout"}
                    className={`w-full px-5 py-3 md:py-4 flex items-center justify-center rounded font-semibold text-sm sm:text-15px transition duration-300 focus:outline-none ${
                        isCartEmpty
                            ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                            : 'bg-brand text-brand-light hover:bg-opacity-90'
                    }`}
                    aria-disabled={isCartEmpty}
                >
                    <span className="py-0.5">Proceed To Checkout</span>
                </Link>
            </div>
        </div>
    );
}

export default CartFooter;
