import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

function CartFooter(props) {
    const totalPrice = useSelector((state)=>state.cart.totalPrice);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    useEffect(() => {
        setCartTotalPrice(totalPrice);
    }, [totalPrice]);
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
                    ${cartTotalPrice}
                </div>
            </div>
            <div className="flex flex-col">
                <a
                    className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-brand-light bg-brand focus:outline-none transition duration-300 hover:bg-opacity-90 cursor-not-allowed !text-brand-dark !text-opacity-25 bg-fill-four hover:bg-fill-four"
                    href="/en"
                >
                    <span className="py-0.5">Proceed To Checkout</span>
                </a>
            </div>
        </div>
    );
}

export default CartFooter;