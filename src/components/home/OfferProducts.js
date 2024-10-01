import React from 'react';
import Image from "next/image";

function OfferProducts(props) {
    return (
        <div className="mb-8 lg:mb-15">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-5 ">
                <div className="mx-auto w-full overflow-hidden rounded">
                    <a
                        className="h-full w-full group flex justify-center relative overflow-hidden"
                        href="/en/search"
                    >
                        <div className="relative inline-block overflow-hidden w-full box-sizing">
                            <div className="block w-full box-sizing">
                                <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={467}
                                    height={180}
                                    version="1.1"
                                />
                            </div>
                            <Image
                                alt="Banner Home 1"
                                loading="lazy"
                                width={0}
                                height={0}
                                decoding="async"
                                data-nimg={1}
                                className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover object-left-top"
                                sizes="100vw"
                                src="/assets/images/banner/home1/banner-1.png"
                                style={{color: "transparent"}}
                            />
                        </div>
                        <div
                            className="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"/>
                    </a>
                </div>
                <div className="mx-auto w-full overflow-hidden rounded">
                    <a
                        className="h-full w-full group flex justify-center relative overflow-hidden"
                        href="/en/search"
                    >
                        <div className="relative inline-block overflow-hidden w-full box-sizing">
                            <div className="block w-full box-sizing">
                                <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={467}
                                    height={180}
                                    version="1.1"
                                />
                            </div>
                            <Image
                                alt="Banner Home 2"
                                loading="lazy"
                                width={0}
                                height={0}
                                decoding="async"
                                data-nimg={1}
                                className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover object-left-top"
                                sizes="100vw"
                                src="/assets/images/banner/home1/banner-2.png"
                                style={{color: "transparent"}}
                            />
                        </div>
                        <div
                            className="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"/>
                    </a>
                </div>
                <div className="mx-auto w-full overflow-hidden rounded">
                    <a
                        className="h-full w-full group flex justify-center relative overflow-hidden"
                        href="/en/search"
                    >
                        <div className="relative inline-block overflow-hidden w-full box-sizing">
                            <div className="block w-full box-sizing">
                                <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={467}
                                    height={180}
                                    version="1.1"
                                />
                            </div>
                            <Image
                                alt="Banner Home 3"
                                loading="lazy"
                                width={0}
                                height={0}
                                decoding="async"
                                data-nimg={1}
                                className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover object-left-top"
                                sizes="100vw"
                                src="/assets/images/banner/home1/banner-3.png"
                                style={{color: "transparent"}}
                            />
                        </div>
                        <div
                            className="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default OfferProducts;