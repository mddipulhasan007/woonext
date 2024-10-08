import React from 'react';
import {toggleDrawerCart} from "@/slice/drawerSlice";
import {useDispatch} from "react-redux";

function CartHeader() {
    const dispatch = useDispatch();
    return (
        <div
            className="relative flex items-center justify-between w-full border-b ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 border-border-base overflow-hidden">
            <h3 className="text-fill-base font-bold text-fill-base text-xl">
                Shopping Cart
            </h3>
            <div className="flex items-center">
                <button
                    className="flex flex-shrink items-center text-15px transition duration-150 ease-in focus:outline-none text-brand-dark opacity-50 hover:opacity-100 ltr:-mr-1.5 rtl:-ml-1.5"
                    aria-label="Clear All"
                >
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0)">
                            <path
                                d="M14.3546 3.46335L13.207 16.5406H4.79372L3.64636 3.46335L2.1925 3.59079L3.36082 16.9052C3.42231 17.5189 3.95478 18 4.57336 18H13.4274C14.0458 18 14.5784 17.5191 14.6409 16.8964L15.8085 3.59079L14.3546 3.46335Z"
                                fill="black"
                            />
                            <path
                                d="M11.6758 0H6.32445C5.65381 0 5.10822 0.54559 5.10822 1.21623V3.52705H6.56766V1.45944H11.4325V3.52702H12.8919V1.2162C12.892 0.54559 12.3464 0 11.6758 0Z"
                                fill="black"
                            />
                            <path
                                d="M16.7838 2.79724H1.21625C0.813183 2.79724 0.486511 3.12391 0.486511 3.52698C0.486511 3.93005 0.813183 4.25672 1.21625 4.25672H16.7838C17.1869 4.25672 17.5136 3.93005 17.5136 3.52698C17.5136 3.12391 17.1869 2.79724 16.7838 2.79724Z"
                                fill="black"
                            />
                        </g>
                    </svg>
                    <span className="ltr:pl-1 lg:rtl:pr-1">Clear All</span>
                </button>

                <button
                    onClick={() => dispatch(toggleDrawerCart())}
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
    );
}

export default CartHeader;