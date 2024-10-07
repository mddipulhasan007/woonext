import React from 'react';

function DrawerCart({drawerCartVisible, toggleDrawerCart}) {
    return (
        <div>
            <div className={`rc-drawer rc-drawer-right ${drawerCartVisible? "rc-drawer-open": ""} `} tabIndex={-1}>
                {
                    drawerCartVisible? (<div onClick={toggleDrawerCart} className="rc-drawer-mask"/>) : ""
                }
                <div
                    tabIndex={0}
                    aria-hidden="true"
                    data-sentinel="start"
                    style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        outline: "none",
                        position: "absolute"
                    }}
                />
                <div className={`rc-drawer-content-wrapper ${drawerCartVisible? "": "rc-drawer-content-wrapper-hidden"}`} style={{width: 378, right: 0}}>
                    <div className="rc-drawer-content" aria-modal="true" role="dialog">
                        <div className="flex flex-col justify-between w-full h-full">
                            <div
                                className="relative flex items-center justify-between w-full border-b ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 border-border-base">
                                <h3 className="text-fill-base font-bold text-fill-base text-xl">
                                    Shopping Cart
                                </h3>
                                <div className="flex items-center">
                                    <button
                                        onClick={toggleDrawerCart}
                                        className="flex items-center justify-center px-4 py-6 text-2xl transition-opacity md:px-6 lg:py-7 focus:outline-none text-brand-dark hover:opacity-60"
                                        aria-label="close"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center px-5 pt-8 pb-5 md:px-7">
                                <div className="flex mx-auto w-[220px] md:w-auto">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-[120px] text-gray-400"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx={176}
                                            cy={416}
                                            r={16}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={32}
                                        />
                                        <circle
                                            cx={400}
                                            cy={416}
                                            r={16}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={32}
                                        />
                                        <path
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={32}
                                            d="M48 80h64l48 272h256"
                                        />
                                        <path
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={32}
                                            d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-fill-base font-bold text-fill-base text-xl mb-1.5 pt-8">
                                    Your cart is empty.
                                </h3>
                                <p className="text-sm leading-7 lg:leading-[24px]">
                                    Please add product to your cart list
                                </p>
                            </div>
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
                                        $0.00
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
                        </div>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    aria-hidden="true"
                    data-sentinel="end"
                    style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        outline: "none",
                        position: "absolute"
                    }}
                />
            </div>
        </div>


    );
}

export default DrawerCart;