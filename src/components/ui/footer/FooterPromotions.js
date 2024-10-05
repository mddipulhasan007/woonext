import React from 'react';

function FooterPromotions(props) {
    return (
        <div className="group py-10 py:mb-12 featuredCarousel border-b border-black/5">


            <div className="carouselWrapper relative dotsCircleNone">
                <div
                    className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
                    dir="ltr"
                >
                    <div className="swiper-wrapper">
                        <div
                            className="swiper-slide swiper-slide-active"
                            style={{width: "260px", marginRight: "20px"}}
                        >
                            <div className="group flex flex-col gap-4">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center cursor-pointer pt-2 ease-in-out">
                                    <svg width="21px" height="26px" viewBox="0 0 21 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className="">
                                        <path
                                            d="M7.5999 19.6001L3.68862 24.6289C3.57111 24.78 3.67878 25.0001 3.87017 25.0001H5.70026C5.76383 25.0001 5.82457 24.9738 5.86805 24.9274L9.19548 21.3781C9.29873 21.268 9.4783 21.2855 9.55831 21.4136L11.7999 25.0001"
                                            stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path
                                            d="M18.062 18.443L17.6114 17.8434L18.062 18.443ZM1.01352 8.18184L0.264562 8.14229L1.01352 8.18184ZM1.69442 5.1529L2.38638 5.4422L1.69442 5.1529ZM2.56801 4.86425L2.18125 5.50683L2.56801 4.86425ZM20.0979 16.2296L19.4629 15.8305L20.0979 16.2296ZM19.8678 15.2767L20.2545 14.6341L19.8678 15.2767ZM16 2.8L16.7161 2.57696L16.5229 1.9567L15.8814 2.05944L16 2.8ZM18.8852 14.5846L19.1082 15.3006L20.5404 14.8546L20.3173 14.1385L18.8852 14.5846ZM10.7875 9.0787L10.3635 9.69735L11.6008 10.5454L12.0248 9.92671L10.7875 9.0787ZM15.1859 0.35688C14.8307 0.143769 14.37 0.258943 14.1569 0.614128C13.9438 0.969313 14.0589 1.43001 14.4141 1.64312L15.1859 0.35688ZM17.4141 3.44312C17.7693 3.65623 18.23 3.54106 18.4431 3.18587C18.6562 2.83069 18.5411 2.36999 18.1859 2.15688L17.4141 3.44312ZM3.11614 4.10384L2.37557 4.22245L2.61278 5.70357L3.35334 5.58497L3.11614 4.10384ZM19.4629 15.8305C18.9731 16.6098 18.3486 17.2894 17.6114 17.8434L18.5125 19.0426C19.3965 18.3783 20.1458 17.5627 20.7329 16.6288L19.4629 15.8305ZM17.6114 17.8434C16.7053 18.5244 15.6426 19.0052 14.4804 19.2542L14.7947 20.7209C16.1614 20.428 17.4259 19.8591 18.5125 19.0426L17.6114 17.8434ZM14.4804 19.2542C13.3177 19.5034 12.0771 19.5159 10.829 19.2849L10.556 20.7599C11.9879 21.0249 13.4284 21.0137 14.7947 20.7209L14.4804 19.2542ZM10.829 19.2849C9.58067 19.0539 8.35172 18.5842 7.21419 17.8995L6.44066 19.1847C7.72642 19.9585 9.12417 20.4949 10.556 20.7599L10.829 19.2849ZM7.21419 17.8995C6.07665 17.2148 5.05595 16.3305 4.21146 15.2974L3.0501 16.2467C4.00316 17.4126 5.1549 18.4108 6.44066 19.1847L7.21419 17.8995ZM4.21146 15.2974C3.36697 14.2643 2.71756 13.1056 2.29824 11.8895L0.880179 12.3785C1.359 13.7671 2.09705 15.0808 3.0501 16.2467L4.21146 15.2974ZM2.29824 11.8895C1.87895 10.6736 1.69883 9.4269 1.76248 8.22138L0.264562 8.14229C0.19021 9.55058 0.401331 10.9898 0.880179 12.3785L2.29824 11.8895ZM1.76248 8.22138C1.81424 7.24088 2.02638 6.30326 2.38638 5.4422L1.00246 4.8636C0.573671 5.88919 0.325061 6.99638 0.264562 8.14229L1.76248 8.22138ZM2.38638 5.4422C2.37682 5.46505 2.34674 5.50047 2.29723 5.51637C2.25047 5.53138 2.20689 5.52226 2.18125 5.50683L2.95477 4.22166C2.25196 3.79865 1.33231 4.07466 1.00246 4.8636L2.38638 5.4422ZM20.7329 16.6288C21.1689 15.9351 20.9199 15.0345 20.2545 14.6341L19.481 15.9193C19.4585 15.9057 19.4527 15.8902 19.4513 15.8845C19.4493 15.8765 19.4478 15.8545 19.4629 15.8305L20.7329 16.6288ZM2.18125 5.50683L19.481 15.9193L20.2545 14.6341L2.95477 4.22166L2.18125 5.50683ZM15.2839 3.02304L18.8852 14.5846L20.3173 14.1385L16.7161 2.57696L15.2839 3.02304ZM12.0248 9.92671L16.6186 3.224L15.3814 2.376L10.7875 9.0787L12.0248 9.92671ZM14.4141 1.64312L17.4141 3.44312L18.1859 2.15688L15.1859 0.35688L14.4141 1.64312ZM3.35334 5.58497L16.1186 3.54056L15.8814 2.05944L3.11614 4.10384L3.35334 5.58497Z"
                                            fill="#2B38D1"></path>
                                    </svg>
                                </div>
                                <div className="ps-0 text-center">
                                    <h3 className="text-fill-base text-sm font-semibold sm:text-[12px] sm:leading-4 uppercase font-bold">
                                        Fast Delivery
                                    </h3>
                                    <p className="text-sm leading-7 lg:leading-[1.85em] sm:leading-4 font-normal sm:text-[13px]">
                                        Deliver in 24 hours max!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="swiper-slide swiper-slide-next"
                            style={{width: "260px", marginRight: "20px"}}
                        >
                            <div className="group flex flex-col gap-4">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center cursor-pointer pt-2 ease-in-out">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" className="" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 11.3125V6.25C1 4.86929 2.11929 3.75 3.5 3.75H5.8125H7.01562M20.25 7.53125V6.25C20.25 4.86929 19.1307 3.75 17.75 3.75H15.4375"
                                            stroke="#2B38D1" strokeWidth="1.5"></path>
                                        <path
                                            d="M1 13.375H4.4375C5.57659 13.375 6.5 14.2984 6.5 15.4375V15.4375C6.5 16.5766 5.57659 17.5 4.4375 17.5H1V13.375Z"
                                            stroke="#2B38D1" strokeWidth="1.5"></path>
                                        <path
                                            d="M5.125 7.1875L7.07354 1.34189C7.1416 1.13771 7.33266 1 7.54788 1H15.4621C15.7943 1 16.0342 1.31795 15.9429 1.63736L14.75 5.8125L14.0625 7.875"
                                            stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path
                                            d="M15.4375 23H3.8C2.2536 23 1 21.7464 1 20.2V10.675C1 9.1286 2.2536 7.875 3.8 7.875H20.2C21.7464 7.875 23 9.1286 23 10.675V20.2C23 21.7464 21.7464 23 20.2 23H16.8289H15.0437"
                                            stroke="#2B38D1" strokeWidth="1.5"></path>
                                    </svg>
                                </div>
                                <div className="ps-0 text-center">
                                    <h3 className="text-fill-base text-sm font-semibold sm:text-[12px] sm:leading-4 uppercase font-bold">
                                        Safe Payment
                                    </h3>
                                    <p className="text-sm leading-7 lg:leading-[1.85em] sm:leading-4 font-normal sm:text-[13px]">
                                        100% secure payment
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="swiper-slide swiper-slide-next"
                            style={{width: "260px", marginRight: "20px"}}
                        >
                            <div className="group flex flex-col gap-4">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center cursor-pointer pt-2 ease-in-out">
                                    <svg width="22px" height="26px" className="" viewBox="0 0 22 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12.9136 11.1186C13.4987 11.1186 13.973 10.6444 13.973 10.0593C13.973 9.47427 13.4987 9 12.9136 9C12.3286 9 11.8543 9.47427 11.8543 10.0593C11.8543 10.6444 12.3286 11.1186 12.9136 11.1186ZM6.17723 9.33386C6.44463 9.01752 6.91784 8.97784 7.23418 9.24524L7.73982 9.67264C8.05616 9.94004 8.09583 10.4133 7.82844 10.7296C7.56104 11.0459 7.08782 11.0856 6.77148 10.8182L6.26585 10.3908C5.94951 10.1234 5.90983 9.6502 6.17723 9.33386ZM8.76861 11.5243C9.03601 11.208 9.50922 11.1683 9.82556 11.4357L10.0152 11.596L10.7736 12.2371L11.2793 12.6645L15.3243 16.0837C15.6407 16.3511 15.6803 16.8243 15.4129 17.1407C15.1455 17.457 14.6723 17.4967 14.356 17.2293L10.3109 13.8101L9.80529 13.3826L9.04684 12.7415L8.85722 12.5813C8.54088 12.3139 8.50121 11.8407 8.76861 11.5243ZM9.73569 16.4152C9.73569 17.0003 9.26141 17.4745 8.67637 17.4745C8.09132 17.4745 7.61705 17.0003 7.61705 16.4152C7.61705 15.8302 8.09132 15.3559 8.67637 15.3559C9.26141 15.3559 9.73569 15.8302 9.73569 16.4152Z"
                                              fill="#2B38D1"></path>
                                        <path
                                            d="M1 16.2498V7.44689C1 5.10711 2.96513 3.27467 5.2392 3.49391L6.34923 3.60093C7.29689 3.6923 8.20196 3.17777 8.62764 2.30566C9.47738 0.564779 11.9026 0.564779 12.7524 2.30566C13.178 3.17777 14.0831 3.6923 15.0308 3.60093L16.1408 3.49391C18.4149 3.27467 20.38 5.10712 20.38 7.44689V16.2498C20.38 17.4224 19.874 18.5351 18.9976 19.2895L13.1836 24.2942C11.7419 25.5353 9.63808 25.5353 8.1964 24.2942L2.3824 19.2895C1.50602 18.5351 1 17.4224 1 16.2498Z"
                                            stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path
                                            d="M1 7.44689C1 5.10711 2.96513 3.27467 5.2392 3.49391L6.34923 3.60093C7.29689 3.6923 8.20196 3.17777 8.62764 2.30566C9.47738 0.564779 11.9026 0.564779 12.7524 2.30566C13.178 3.17777 14.0831 3.6923 15.0308 3.60093L16.1408 3.49391C18.4149 3.27467 20.38 5.10712 20.38 7.44689"
                                            stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="square"></path>
                                    </svg>
                                </div>
                                <div className="ps-0 text-center">
                                    <h3 className="text-fill-base text-sm font-semibold sm:text-[12px] sm:leading-4 uppercase font-bold">
                                        Online Discount
                                    </h3>
                                    <p className="text-sm leading-7 lg:leading-[1.85em] sm:leading-4 font-normal sm:text-[13px]">
                                        Add multi-buy discount
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div
                            className="swiper-slide swiper-slide-next"
                            style={{width: "260px", marginRight: "20px"}}
                        >
                            <div className="group flex flex-col gap-4">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center cursor-pointer pt-2 ease-in-out">
                                    <svg width="28px" height="26px" className="" viewBox="0 0 28 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.95714 17.1751V17.1751C4.56278 17.4417 3.21515 16.5278 2.94712 15.1337L1.49398 7.57539C1.20201 6.0568 2.19523 4.59054 3.7141 4.30006C5.84956 3.89167 8.8161 3.32434 11.0642 2.89441C13.3382 2.45952 16.3579 1.93862 18.5073 1.57549C20.0034 1.32272 21.4228 2.31414 21.7092 3.80416C21.8101 4.32882 21.9181 4.89047 22.0257 5.44992"
                                            stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path
                                            d="M6.10693 9.6801V18.9102C6.10693 20.3262 7.25788 21.4741 8.67764 21.4741H8.992C9.52827 21.4741 9.96299 21.9088 9.96299 22.4451C9.96299 23.5022 10.0524 25.0661 11.112 25.0365C11.8308 25.0164 12.0877 24.14 12.4786 23.5381L12.991 22.749C13.5074 21.9539 14.3912 21.4741 15.3393 21.4741H23.0736C25.0613 21.4741 26.6726 19.8673 26.6726 17.8849V9.76549C26.6726 7.82707 25.4022 6.13737 23.4592 6.09062C21.3657 6.04023 18.4467 6.09063 16.3898 6.09063H9.70539C7.71772 6.09063 6.10693 7.69769 6.10693 9.6801Z"
                                            stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <ellipse cx="11.2482" cy="13.7825" rx="1.28535" ry="1.28195"
                                                 fill="#2B38D1"></ellipse>
                                        <ellipse cx="16.3898" cy="13.7825" rx="1.28535" ry="1.28195"
                                                 fill="#2B38D1"></ellipse>
                                        <ellipse cx="21.531" cy="13.7825" rx="1.28535" ry="1.28195"
                                                 fill="#2B38D1"></ellipse>
                                    </svg>
                                </div>
                                <div className="ps-0 text-center">
                                    <h3 className="text-fill-base text-sm font-semibold sm:text-[12px] sm:leading-4 uppercase font-bold">
                                        Help Center
                                    </h3>
                                    <p className="text-sm leading-7 lg:leading-[1.85em] sm:leading-4 font-normal sm:text-[13px]">
                                        Dedicated 24/7 support
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="swiper-slide swiper-slide-next"
                            style={{width: "260px", marginRight: "20px"}}
                        >
                            <div className="group flex flex-col gap-4">
                                <div
                                    className="flex flex-shrink-0 items-center justify-center cursor-pointer pt-2 ease-in-out">
                                    <svg width="23px" height="24px" className="" viewBox="0 0 23 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.8916 19.0584L9.06588 19.2219C4.62937 19.2832 1 15.7037 1 11.2667V11.2667"
                                            stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <rect x="1" y="2.46698" width="20.5333" height="20.5333" rx="2.8"
                                              stroke="#2B38D1" strokeWidth="1.5"></rect>
                                        <path d="M6.86621 3.93333V1" stroke="#2B38D1" strokeWidth="1.5"
                                              strokeLinecap="round"></path>
                                        <path d="M15.667 3.93333V1" stroke="#2B38D1" strokeWidth="1.5"
                                              strokeLinecap="round"></path>
                                        <line x1="5.59961" y1="13.1747" x2="11.7996" y2="13.1747" stroke="#2B38D1"
                                              strokeWidth="1.5" strokeLinecap="round"></line>
                                        <line x1="5.59961" y1="9.32483" x2="14.3663" y2="9.32483" stroke="#2B38D1"
                                              strokeWidth="1.5" strokeLinecap="round"></line>
                                    </svg>
                                </div>
                                <div className="ps-0 text-center">
                                    <h3 className="text-fill-base text-sm font-semibold sm:text-[12px] sm:leading-4 uppercase font-bold">
                                        Curated items
                                    </h3>
                                    <p className="text-sm leading-7 lg:leading-[1.85em] sm:leading-4 font-normal sm:text-[13px]">
                                        From handpicked sellers
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="flex items-center w-full absolute z-10 top-2/4">
                    <div
                        className="swiper-prev w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation 3xl:text-2xl -start-6 3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10 swiper-button-lock swiper-button-disabled"
                        id="featured-carousel-button-prev"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                        </svg>
                    </div>
                    <div
                        className="swiper-next w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-brand-light absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-navigation 3xl:text-2xl -end-6 3xl:top-auto 2xl:translate-x-0 3xl:-translate-y-2 swiper-button-lock swiper-button-disabled"
                        id="featured-carousel-button-next"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPromotions;