import React from 'react';

function EmptyCart(props) {
    return (
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
    );
}

export default EmptyCart;