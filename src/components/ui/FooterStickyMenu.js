import React from 'react';
import Link from "next/link";

function FooterStickyMenu({mobileMenuToggle, toggleSearch, toggleDrawerCart}) {
    return (
        <div
            className="lg:hidden fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-brand-light w-full h-14 px-4 md:px-6 lg:px-8 text-brand-muted pb-0.5">
            <button
                aria-label="Menu"
                onClick={mobileMenuToggle}
                className="flex flex-col items-center justify-center outline-none shrink-0 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={14}
                    viewBox="0 0 25.567 18"
                >
                    <g transform="translate(-776 -462)">
                        <rect
                            data-name="Rectangle 941"
                            width="12.749"
                            height="2.499"
                            rx="1.25"
                            transform="translate(776 462)"
                            fill="currentColor"
                        />
                        <rect
                            data-name="Rectangle 942"
                            width="25.567"
                            height="2.499"
                            rx="1.25"
                            transform="translate(776 469.75)"
                            fill="currentColor"
                        />
                        <rect
                            data-name="Rectangle 943"
                            width="17.972"
                            height="2.499"
                            rx="1.25"
                            transform="translate(776 477.501)"
                            fill="currentColor"
                        />
                    </g>
                </svg>
            </button>
            <button
                className="relative flex items-center justify-center h-auto shrink-0 focus:outline-none"
                aria-label="Search Button"
                onClick={toggleSearch}
            >
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path
                        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <Link className="shrink-0" href="/">
                <span className="sr-only">Home</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="20px"
                    viewBox="0 0 17.996 20.442"
                >
                    <path
                        d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
                        transform="translate(-30.619 0.236)"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.4"
                    />
                </svg>
            </Link>
            <button
                className="flex items-center justify-center shrink-0 h-auto focus:outline-none transform"
                aria-label="cart-button"
                onClick={toggleDrawerCart}
            >
                <div className="relative flex items-center">
                    <div className="flex items-center relative cart-button">
                        <svg
                            className="text-opacity-100"
                            width={27}
                            height={23}
                            viewBox="0 0 27 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.3787 20.7212C19.0834 20.7212 18.8002 20.6036 18.5913 20.3944C18.3825 20.1851 18.2652 19.9014 18.2652 19.6055H16.0381C16.0381 20.4932 16.39 21.3445 17.0165 21.9722C17.643 22.5999 18.4927 22.9525 19.3787 22.9525C20.2647 22.9525 21.1144 22.5999 21.7409 21.9722C22.3674 21.3445 22.7194 20.4932 22.7194 19.6055H20.4923C20.4923 19.9014 20.3749 20.1851 20.1661 20.3944C19.9573 20.6036 19.6741 20.7212 19.3787 20.7212Z"
                                fill="currentColor"
                            />
                            <path
                                d="M11.5425 20.7212C11.2472 20.7212 10.9639 20.6036 10.7551 20.3944C10.5463 20.1851 10.4289 19.9014 10.4289 19.6055H8.19141C8.19141 20.0457 8.27794 20.4815 8.44607 20.8882C8.6142 21.2949 8.86062 21.6644 9.17128 21.9757C9.48194 22.2869 9.85075 22.5338 10.2566 22.7023C10.6625 22.8707 11.0976 22.9574 11.5369 22.9574C11.9763 22.9574 12.4113 22.8707 12.8172 22.7023C13.2231 22.5338 13.5919 22.2869 13.9025 21.9757C14.2132 21.6644 14.4596 21.2949 14.6278 20.8882C14.7959 20.4815 14.8824 20.0457 14.8824 19.6055H12.6553C12.6553 19.9012 12.5381 20.1849 12.3294 20.3941C12.1207 20.6033 11.8377 20.721 11.5425 20.7212Z"
                                fill="currentColor"
                            />
                            <path
                                d="M26.0699 2.26204C26.0092 2.25168 25.9477 2.24655 25.8862 2.2467H8.06945C7.77412 2.2467 7.49089 2.36424 7.28205 2.57347C7.07322 2.78271 6.95591 3.06649 6.95591 3.36239C6.95591 3.65829 7.07322 3.94207 7.28205 4.1513C7.49089 4.36053 7.77412 4.47808 8.06945 4.47808H24.5715L24.2771 6.24785L22.7161 15.635H8.18985L4.4038 6.24785L2.14539 0.697278C2.02596 0.43616 1.81062 0.231252 1.54419 0.125208C1.27777 0.0191644 0.980789 0.0201555 0.715076 0.127975C0.449363 0.235795 0.23539 0.442136 0.117698 0.704045C5.8841e-06 0.965954 -0.012336 1.26325 0.0832412 1.53405L3.68904 10.3989L6.14998 16.9341C6.33162 17.4843 6.70675 17.8664 7.24821 17.8664H23.6591C23.9228 17.8665 24.178 17.7729 24.3792 17.6022C24.5804 17.4314 24.7147 17.1947 24.758 16.9341L26.5355 6.24785L26.9851 3.54578C27.0336 3.25395 26.9644 2.95478 26.7928 2.71404C26.6212 2.4733 26.3612 2.31072 26.0699 2.26204Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span
                            className="cart-counter-badge  h-[18px] min-w-[18px] rounded-full flex items-center justify-center bg-red-600 text-brand-light absolute -top-1 ltr:left-3 rtl:right-3 text-11px">
          0
        </span>
                    </div>
                </div>
            </button>
            <button className="shrink-0 focus:outline-none" aria-label="Authentication">
                <svg
                    width={16}
                    height={16}
                    viewBox="0 0 448 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                        className=""
                    />
                </svg>
            </button>
        </div>

    );
}

export default FooterStickyMenu;