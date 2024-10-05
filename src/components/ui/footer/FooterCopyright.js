import React from 'react';
import Image from "next/image";

function FooterCopyright(props) {
    return (
        <div className="border-t border-black/10  pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
            <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                <div className="flex flex-col md:flex-row text-center md:justify-between">
                    <p className="text-sm leading-7 lg:leading-[27px]">
                        ©&nbsp;Copyright 2024&nbsp;
                        <a
                            className="transition-colors duration-200 ease-in-out text-brand "
                            href="#"
                        >
                            Wikithemes, Inc.
                        </a>
                        &nbsp; All rights reserved
                    </p>
                    <ul className="flex flex-wrap justify-center items-center space-x-4 -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
                        <li className="mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                            <a
                                href="/"
                                target="_blank"
                                className="inline-flex"
                                rel="noreferrer"
                            >
                                <div className="relative inline-block overflow-hidden mx-auto box-sizing">
                                    <div className="block w-full box-sizing">
                                        <svg
                                            className="block max-w-full h-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={43}
                                            height={25}
                                            version="1.1"
                                        />
                                    </div>
                                    <Image
                                        alt="Master Card"
                                        loading="lazy"
                                        width={0}
                                        height={0}
                                        decoding="async"
                                        data-nimg={1}
                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                        src="/assets/images/payment/mastercard.svg"
                                        style={{color: "transparent"}}
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                            <a
                                href="/"
                                target="_blank"
                                className="inline-flex"
                                rel="noreferrer"
                            >
                                <div className="relative inline-block overflow-hidden mx-auto box-sizing">
                                    <div className="block w-full box-sizing">
                                        <svg
                                            className="block max-w-full h-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={42}
                                            height={28}
                                            version="1.1"
                                        />
                                    </div>
                                    <Image
                                        alt="Visa"
                                        loading="lazy"
                                        width={0}
                                        height={0}
                                        decoding="async"
                                        data-nimg={1}
                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                        src="/assets/images/payment/visa.svg"
                                        style={{color: "transparent"}}
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                            <a
                                href="/"
                                target="_blank"
                                className="inline-flex"
                                rel="noreferrer"
                            >
                                <div className="relative inline-block overflow-hidden mx-auto box-sizing">
                                    <div className="block w-full box-sizing">
                                        <svg
                                            className="block max-w-full h-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={57}
                                            height={32}
                                            version="1.1"
                                        />
                                    </div>
                                    <Image
                                        alt="Paypal"
                                        loading="lazy"
                                        width={0}
                                        height={0}
                                        decoding="async"
                                        data-nimg={1}
                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                        src="/assets/images/payment/paypal.svg"
                                        style={{color: "transparent"}}
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                            <a
                                href="/"
                                target="_blank"
                                className="inline-flex"
                                rel="noreferrer"
                            >
                                <div className="relative inline-block overflow-hidden mx-auto box-sizing">
                                    <div className="block w-full box-sizing">
                                        <svg
                                            className="block max-w-full h-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={75}
                                            height={25}
                                            version="1.1"
                                        />
                                    </div>
                                    <Image
                                        alt="payment-discover"
                                        loading="lazy"
                                        width={0}
                                        height={0}
                                        decoding="async"
                                        data-nimg={1}
                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                        src="/assets/images/payment/discover.svg"
                                        style={{color: "transparent"}}
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                            <a
                                href="/"
                                target="_blank"
                                className="inline-flex"
                                rel="noreferrer"
                            >
                                <div className="relative inline-block overflow-hidden mx-auto box-sizing">
                                    <div className="block w-full box-sizing">
                                        <svg
                                            className="block max-w-full h-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={55}
                                            height={25}
                                            version="1.1"
                                        />
                                    </div>
                                    <Image
                                        alt="payment-american"
                                        loading="lazy"
                                        width={0}
                                        height={0}
                                        decoding="async"
                                        data-nimg={1}
                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                        src="/assets/images/payment/american_logo.svg"
                                        style={{color: "transparent"}}
                                    />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FooterCopyright;