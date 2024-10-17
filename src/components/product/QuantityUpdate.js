import React, { useState } from 'react';

function QuantityUpdate({quantity, decreaseQuantity, increaseQuantity}) {


    return (
        <div
            className="button--mutiqty flex items-center justify-between rounded overflow-hidden shrink-0 rounded-md h-11 md:h-14 bg-[#f3f5f9] w-40 mb-5">
            <button
                onClick={decreaseQuantity}
                className="flex items-center justify-center shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none !w-8 !h-8 rounded-full transform scale-80 lg:scale-100 text-brand-dark hover:bg-fill-four ltr:ml-auto rtl:mr-auto">
                <span className="sr-only">button-minus</span>
                <svg
                    className="transition-all"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity={1}>
                        <path
                            d="M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                    </g>
                </svg>
            </button>
            <span
                className="font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-base md:text-[17px] w-12 md:w-12">
                {quantity}
            </span>
            <button
                onClick={increaseQuantity}
                className="group flex items-center justify-center flex-shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none !w-8 !h-8 rounded-full scale-80 lg:scale-100 text-heading hover:bg-fill-four ltr:mr-auto rtl:ml-auto !pr-0 justify-center"
                title=""
            >
                <span className="sr-only">button-plus</span>
                <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity={1}>
                        <path
                            d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                    </g>
                </svg>
            </button>
        </div>
    );
}

export default QuantityUpdate;
