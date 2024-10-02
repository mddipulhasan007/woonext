import React from 'react';
import Link from "next/link";
import Image from "next/image";
import MenuAccountCart from "@/components/ui/header/MenuAccountCart";
import SearchInput from "@/components/ui/header/SearchInput";

function MiddleMenu({isVisible, toggleSearch,SearchRef}) {
    return (
        <div className="border-b border-black/10">
            <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                <div className="flex items-center justify-between  py-2 md:py-4">
                    <div className="relative flex-shrink-0 lg:hidden">
                        <button
                            aria-label="Menu"
                            className="bg-brand rounded focus:outline-none flex-shrink-0 text-sm  text-skin-inverted px-2.5 md:px-3 lg:px-[18px] py-2 md:py-2.5 lg:py-3 flex items-center transition-all hover:border-skin-four"
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
                    </div>
                    <Link
                        lang="en"
                        className="inline-flex focus:outline-none  logo ps-3 md:ps-0 lg:mx-0"
                        href="/"
                    >
                        <Image
                            alt="Razazoror"
                            loading="eager"
                            width={142}
                            height={44}
                            decoding="async"
                            data-nimg={1}
                            style={{color: "transparent"}}
                            src="/logo.cfe79157.svg"
                        />
                    </Link>
                    <div
                        className="w-full transition-all duration-200 ease-in-out hidden lg:flex lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[800px] lg:mx-10">
                        <div
                            onClick={toggleSearch}
                            className={`overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed ${isVisible ? 'input-focus-overlay-open' : ''}`}
                        >
                        </div>

                            <SearchInput toggleSearch={toggleSearch}/>
                        </div>
                        <MenuAccountCart/>
                    </div>
                </div>
            </div>
            );
            }

            export default MiddleMenu;