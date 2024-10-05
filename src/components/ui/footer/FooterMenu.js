import React from 'react';
import Image from "next/image";

function FooterMenu(props) {
    return (
        <div
            className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px] pt-10 md:pt-16">
            <div className="pb-10 sm:pb-0 col-span-full sm:col-span-1 md:col-span-4">
                <div className="text-sm xl:max-w-[350px] mx-auto sm:ms-0 mb-2">
                    <h3 className="text-fill-base text-sm font-semibold uppercase mb-4 lg:mb-5">
                        About The Store
                    </h3>
                    <div className="mb-3">
                        Address: Acme Widgets 123 Widget Street Acmeville, AC 12345
                        United States of America
                    </div>
                    <div className="mb-3">Phone: (1800)-000-6890</div>
                    <div className="mb-3">Email: yourexample@email.com</div>
                </div>
                <ul className="flex flex-wrap  space-x-4 md:space-s-5 mx-auto md:mx-0">
                    <li className="transition hover:opacity-80">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/"
                        >
                            <div
                                className="relative inline-block overflow-hidden mx-auto box-sizing transform scale-85 md:scale-100">
                                <div className="block w-full box-sizing">
                                    <svg
                                        className="block max-w-full h-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        version="1.1"
                                    />
                                </div>
                                <Image
                                    alt="facebook"
                                    loading="lazy"
                                    width={0}
                                    height={0}
                                    decoding="async"
                                    data-nimg={1}
                                    className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                    src="/assets/images/social/facebook.svg"
                                    style={{color: "transparent"}}
                                />
                            </div>
                        </a>
                    </li>
                    <li className="transition hover:opacity-80">
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                            <div
                                className="relative inline-block overflow-hidden mx-auto box-sizing transform scale-85 md:scale-100">
                                <div className="block w-full box-sizing">
                                    <svg
                                        className="block max-w-full h-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        version="1.1"
                                    />
                                </div>
                                <Image
                                    alt="twitter"
                                    loading="lazy"
                                    width={0}
                                    height={0}
                                    decoding="async"
                                    data-nimg={1}
                                    className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                    src="/assets/images/social/twitter.svg"
                                    style={{color: "transparent"}}
                                />
                            </div>
                        </a>
                    </li>
                    <li className="transition hover:opacity-80">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/"
                        >
                            <div
                                className="relative inline-block overflow-hidden mx-auto box-sizing transform scale-85 md:scale-100">
                                <div className="block w-full box-sizing">
                                    <svg
                                        className="block max-w-full h-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        version="1.1"
                                    />
                                </div>
                                <Image
                                    alt="instagram"
                                    loading="lazy"
                                    width={0}
                                    height={0}
                                    decoding="async"
                                    data-nimg={1}
                                    className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                    src="/assets/images/social/instagram.svg"
                                    style={{color: "transparent"}}
                                />
                            </div>
                        </a>
                    </li>
                    <li className="transition hover:opacity-80">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.youtube.com/"
                        >
                            <div
                                className="relative inline-block overflow-hidden mx-auto box-sizing transform scale-85 md:scale-100">
                                <div className="block w-full box-sizing">
                                    <svg
                                        className="block max-w-full h-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        version="1.1"
                                    />
                                </div>
                                <Image
                                    alt="youtube"
                                    loading="lazy"
                                    width={0}
                                    height={0}
                                    decoding="async"
                                    data-nimg={1}
                                    className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                    src="/assets/images/social/youtube.svg"
                                    style={{color: "transparent"}}
                                />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-fill-base text-sm font-semibold uppercase  mb-4 lg:mb-5">
                    Information
                </h3>
                <ul className="text-sm lg:text-14px flex flex-col space-y-3">
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/about-us"
                        >
                            About us
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/contact-us"
                        >
                            About The Store
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/privacy"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/terms"
                        >
                            Terms &amp; Condition
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/checkout"
                        >
                            Checkout
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/faq"
                        >
                            Faq
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-fill-base text-sm font-semibold uppercase  mb-4 lg:mb-5">
                    Categories
                </h3>
                <ul className="text-sm lg:text-14px flex flex-col space-y-3">
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/search"
                        >
                            Electronic &amp; Digital
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/search"
                        >
                            Health &amp; Beauty
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/search"
                        >
                            Return Policy
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/search"
                        >
                            Top 10 Offers
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/search"
                        >
                            Jewelry &amp; Watches
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/search"
                        >
                            Book &amp; Office
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-fill-base text-sm font-semibold uppercase  mb-4 lg:mb-5">
                    Brands
                </h3>
                <ul className="text-sm lg:text-14px flex flex-col space-y-3">
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en"
                        >
                            Common Good
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en"
                        >
                            OFS
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en"
                        >
                            Sagaform
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en"
                        >
                            Feugiat nulla
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en"
                        >
                            Vulputate velit
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en"
                        >
                            Samsung Galaxy
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-fill-base text-sm font-semibold uppercase  mb-4 lg:mb-5">
                    Our Services
                </h3>
                <ul className="text-sm lg:text-14px flex flex-col space-y-3">
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/about-us"
                        >
                            About us
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/contact-us"
                        >
                            About The Store
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/privacy"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/terms"
                        >
                            Terms &amp; Condition
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/checkout"
                        >
                            Checkout
                        </a>
                    </li>
                    <li className="flex items-baseline">
                        <a
                            className="transition-colors duration-200 hover:text-brand"
                            href="/en/faq"
                        >
                            Faq
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FooterMenu;