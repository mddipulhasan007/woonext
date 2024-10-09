import React from 'react';

function ProductDetailsAndAddToCart({product}) {
    return (
        <div className="flex flex-col col-span-5 shrink-0 xl:ltr:pl-2 xl:rtl:pr-2">
            <div className="pb-4 lg:pb-8">
                <div className="md:mb-2.5 block -mt-1.5">
                    <h2 className="text-lg font-medium transition-colors duration-300 text-brand-dark md:text-xl xl:text-2xl">
                        {product.name}
                    </h2>
                </div>
                <div className="flex items-center mt-5">
                    <div className="text-brand font-medium text-base md:text-xl xl:text-[30px]">
                        {product.price}
                    </div>
                </div>
            </div>
            <dl className="productView-info  text-[14px] leading-8 pb-5 mb-5 border-b border-border-base">
                <dt className="productView-info-name w-40 float-left">Brand:</dt>
                <dd className="productView-info-value">OFS</dd>
                <dt className="productView-info-name w-40 float-left">SKU:</dt>
                <dd className="productView-info-value">200101</dd>
                <dt className="productView-info-name w-40 float-left">Weight:</dt>
                <dd className="productView-info-value" data-product-weight="">
                    1.00 KGS
                </dd>
                <dt className="productView-info-name w-40 float-left">Shipping:</dt>
                <dd className="productView-info-value">Calculated at Checkout</dd>
            </dl>
            <div className="mb-2 pt-0.5">
                <h4 className="mb-3 font-normal capitalize text-15px text-brand-dark text-opacity-70">
                    available in:
                </h4>
                <ul className="flex flex-wrap ltr:-mr-2 rtl:-ml-2">
                    <li className="cursor-pointer rounded border border-border-four h-9 md:h-10 p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 flex justify-center items-center font-medium text-sm md:text-15px text-brand-dark transition duration-200 ease-in-out hover:text-brand hover:border-brand px-3">
                        12oz
                    </li>
                    <li className="cursor-pointer rounded border border-border-four h-9 md:h-10 p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 flex justify-center items-center font-medium text-sm md:text-15px text-brand-dark transition duration-200 ease-in-out hover:text-brand hover:border-brand px-3">
                        24oz
                    </li>
                    <li className="cursor-pointer rounded border border-border-four h-9 md:h-10 p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 flex justify-center items-center font-medium text-sm md:text-15px text-brand-dark transition duration-200 ease-in-out hover:text-brand hover:border-brand px-3">
                        36oz
                    </li>
                </ul>
            </div>
            <div className="pb-2"/>
            <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
                <div
                    className="button--mutiqty  flex items-center justify-between rounded overflow-hidden shrink-0  rounded-md h-11 md:h-14 bg-[#f3f5f9] w-40 mb-5">
                    <button
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
            1
          </span>
                    <button
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
                <div className="flex flex-col md:flex-row gap-2.5">
                    <button
                        data-variant="primary"
                        className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 cursor-not-allowed hover:cursor-not-allowed bg-opacity-50 hover:bg-opacity-50 flex-auto w-full px-1.5"
                        disabled=""
                    >
                        <svg
                            className="ltr:mr-3 rtl:ml-3"
                            width={27}
                            height={23}
                            viewBox="0 0 27 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.3787 20.7212C19.0834 20.7212 18.8002 20.6036 18.5913 20.3944C18.3825 20.1851 18.2652 19.9014 18.2652 19.6055H16.0381C16.0381 20.4932 16.39 21.3445 17.0165 21.9722C17.643 22.5999 18.4927 22.9525 19.3787 22.9525C20.2647 22.9525 21.1144 22.5999 21.7409 21.9722C22.3674 21.3445 22.7194 20.4932 22.7194 19.6055H20.4923C20.4923 19.9014 20.3749 20.1851 20.1661 20.3944C19.9573 20.6036 19.6741 20.7212 19.3787 20.7212Z"
                                fill="#ffffff"
                            />
                            <path
                                d="M11.5425 20.7212C11.2472 20.7212 10.9639 20.6036 10.7551 20.3944C10.5463 20.1851 10.4289 19.9014 10.4289 19.6055H8.19141C8.19141 20.0457 8.27794 20.4815 8.44607 20.8882C8.6142 21.2949 8.86062 21.6644 9.17128 21.9757C9.48194 22.2869 9.85075 22.5338 10.2566 22.7023C10.6625 22.8707 11.0976 22.9574 11.5369 22.9574C11.9763 22.9574 12.4113 22.8707 12.8172 22.7023C13.2231 22.5338 13.5919 22.2869 13.9025 21.9757C14.2132 21.6644 14.4596 21.2949 14.6278 20.8882C14.7959 20.4815 14.8824 20.0457 14.8824 19.6055H12.6553C12.6553 19.9012 12.5381 20.1849 12.3294 20.3941C12.1207 20.6033 11.8377 20.721 11.5425 20.7212Z"
                                fill="#ffffff"
                            />
                            <path
                                d="M26.0699 2.26204C26.0092 2.25168 25.9477 2.24655 25.8862 2.2467H8.06945C7.77412 2.2467 7.49089 2.36424 7.28205 2.57347C7.07322 2.78271 6.95591 3.06649 6.95591 3.36239C6.95591 3.65829 7.07322 3.94207 7.28205 4.1513C7.49089 4.36053 7.77412 4.47808 8.06945 4.47808H24.5715L24.2771 6.24785L22.7161 15.635H8.18985L4.4038 6.24785L2.14539 0.697278C2.02596 0.43616 1.81062 0.231252 1.54419 0.125208C1.27777 0.0191644 0.980789 0.0201555 0.715076 0.127975C0.449363 0.235795 0.23539 0.442136 0.117698 0.704045C5.8841e-06 0.965954 -0.012336 1.26325 0.0832412 1.53405L3.68904 10.3989L6.14998 16.9341C6.33162 17.4843 6.70675 17.8664 7.24821 17.8664H23.6591C23.9228 17.8665 24.178 17.7729 24.3792 17.6022C24.5804 17.4314 24.7147 17.1947 24.758 16.9341L26.5355 6.24785L26.9851 3.54578C27.0336 3.25395 26.9644 2.95478 26.7928 2.71404C26.6212 2.4733 26.3612 2.31072 26.0699 2.26204Z"
                                fill="#ffffff"
                            />
                        </svg>
                        Add to Cart
                    </button>
                    <button
                        data-variant="border"
                        className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand-light text-base border border-border-four tracking-widest px-5  py-4 md:py-3.5 lg:py-4 w-full md:w-96 group hover:text-brand false"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            className="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"/>
                        </svg>
                        My Wishlist
                    </button>
                    <div className="w-full md:w-80 relative group">
                        <button
                            data-variant="border"
                            className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand-light text-base border border-border-four tracking-widest px-5  py-4 md:py-3.5 lg:py-4 w-full hover:text-brand false"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                className="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
                                />
                            </svg>
                            Share
                        </button>
                        <div
                            className="shadow-card bg-brand-light rounded-md p-4 md:p-6 lg:p-7 absolute z-10 ltr:right-0 rtl:left-0 w-[300px] md:min-w-[400px] transition-all duration-300 opacity-0 invisible top-[130%]">
                            <h3 className="text-fill-base text-sm font-semibold mb-2">
                                Share in social network
                            </h3>
                            <p className="text-sm leading-7 lg:leading-[1.85em]">
                                To reach the highest traffic view share this product
                            </p>
                            <div className="flex flex-wrap items-center mb-4 -mx-1">
                                <button
                                    aria-label="facebook"
                                    className="react-share__ShareButton mx-1"
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        padding: 0,
                                        font: "inherit",
                                        color: "inherit",
                                        cursor: "pointer"
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 64 64"
                                        width={40}
                                        height={40}
                                        className="transition-all hover:opacity-90"
                                    >
                                        <circle cx={32} cy={32} r={31} fill="#3b5998"/>
                                        <path
                                            d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                                <button
                                    aria-label="twitter"
                                    className="react-share__ShareButton mx-1"
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        padding: 0,
                                        font: "inherit",
                                        color: "inherit",
                                        cursor: "pointer"
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 64 64"
                                        width={40}
                                        height={40}
                                        className="transition-all hover:opacity-90"
                                    >
                                        <circle cx={32} cy={32} r={31} fill="#00aced"/>
                                        <path
                                            d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                                <button
                                    aria-label="whatsapp"
                                    className="react-share__ShareButton mx-1"
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        padding: 0,
                                        font: "inherit",
                                        color: "inherit",
                                        cursor: "pointer"
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 64 64"
                                        width={40}
                                        height={40}
                                        className="transition-all hover:opacity-90"
                                    >
                                        <circle cx={32} cy={32} r={31} fill="#25D366"/>
                                        <path
                                            d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                                <button
                                    aria-label="linkedin"
                                    className="react-share__ShareButton mx-1"
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        padding: 0,
                                        font: "inherit",
                                        color: "inherit",
                                        cursor: "pointer"
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 64 64"
                                        width={40}
                                        height={40}
                                        className="transition-all hover:opacity-90"
                                    >
                                        <circle cx={32} cy={32} r={31} fill="#007fb1"/>
                                        <path
                                            d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm leading-7 lg:leading-[1.85em]">
                                or copy link
                            </p>
                            <form noValidate="" className="space-y-5">
                                <div className="relative mt-2.5 mb-1.5">
                                    <div className="w-full">
                                        <input
                                            id="shareLink"
                                            placeholder=""
                                            className="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark focus:ring-0 text-brand-dark border-border-two focus:border-1 focus:outline-none focus:border-brand h-11 md:h-12 px-4 border-border-base rounded-md focus:outline focus:border-brand"
                                            autoComplete="off"
                                            spellCheck="false"
                                            aria-invalid="false"
                                            type="link"
                                            defaultValue="https://uminex-digital.vercel.app//products/sample-able-brewing-system-consetetur"
                                            name="shareLink"
                                        />
                                    </div>
                                    <span
                                        className="absolute ltr:right-0.5 rtl:left-0.5 top-[6%] h-[90%] px-2 text-brand text-sm uppercase font-bold flex items-center bg-brand-light cursor-pointer"
                                        role="button"
                                    >
                    copy
                  </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetailsAndAddToCart;