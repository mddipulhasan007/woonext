import React from "react";
import Image from "next/image";
import Link from "next/link";

function MobileMenuDrawer({ mobileMenuToggle }) {
  return (
    <div>
      <div className="rc-drawer rc-drawer-left rc-drawer-open" tabIndex={-1}>
        <div onClick={mobileMenuToggle} className="rc-drawer-mask" />
        <div
          tabIndex={0}
          aria-hidden="true"
          data-sentinel="start"
          style={{
            width: 0,
            height: 0,
            overflow: "hidden",
            outline: "none",
            position: "absolute",
          }}
        />
        <div
          className="rc-drawer-content-wrapper"
          style={{ width: 378, left: 0 }}
        >
          <div
            className="rc-drawer-content w-[375px]"
            aria-modal="true"
            role="dialog"
          >
            <div className="flex flex-col justify-between w-full h-full">
              <div className="bg-gray-300 w-full border-b border-border-base flex justify-between items-center relative ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 shrink-0 py-0.5">
                <div role="button" className="inline-flex">
                  <Link className="inline-flex focus:outline-none " href="/">
                    <Image
                      alt="Razazoror"
                      loading="eager"
                      width={142}
                      height={44}
                      decoding="async"
                      data-nimg={1}
                      src="/logo.cfe79157.svg"
                      style={{ color: "transparent" }}
                    />
                  </Link>
                </div>
                <button
                  className="flex items-center justify-center px-4 py-5 text-2xl transition-opacity md:px-5 lg:py-8 focus:outline-none hover:opacity-60"
                  aria-label="close"
                  onClick={mobileMenuToggle}
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
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                  </svg>
                </button>
              </div>
              <div
                data-overlayscrollbars-initialize=""
                data-overlayscrollbars="host"
              >
                <div className="os-size-observer os-size-observer-appear">
                  <div className="os-size-observer-listener ltr" />
                </div>
                <div
                  data-overlayscrollbars-contents="true"
                  data-overlayscrollbars-viewport="scrollbarHidden"
                  style={{
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    top: 0,
                    right: "auto",
                    left: 0,
                    width: "calc(100% + 0px)",
                    padding: 0,
                    overflowY: "auto",
                  }}
                >
                  <div className="flex flex-col px-0  text-brand-dark h-[calc(100vh_-_150px)]">
                    <ul className="mobile-menu">
                      {/*<li className="transition-colors duration-200 ">*/}
                      {/*  <div className="relative flex items-center justify-between">*/}
                      {/*    <a*/}
                      {/*      className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"*/}
                      {/*      href="/en"*/}
                      {/*    >*/}
                      {/*      <span className="block w-full">Demos</span>*/}
                      {/*    </a>*/}
                      {/*    <div className="cursor-pointer w-full h-8 text-[17px] px-5 shrink-0 flex items-center justify-end text-brand-dark text-opacity-80 absolute ltr:right-0 rtl:left-0 top-1/2 transform -translate-y-1/2">*/}
                      {/*      <svg*/}
                      {/*        stroke="currentColor"*/}
                      {/*        fill="currentColor"*/}
                      {/*        strokeWidth={0}*/}
                      {/*        viewBox="0 0 512 512"*/}
                      {/*        className="transition duration-200 ease-in-out transform rotate-0"*/}
                      {/*        height="1em"*/}
                      {/*        width="1em"*/}
                      {/*        xmlns="http://www.w3.org/2000/svg"*/}
                      {/*      >*/}
                      {/*        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />*/}
                      {/*      </svg>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      {/*<li className="transition-colors duration-200 ">*/}
                      {/*  <div className="relative flex items-center justify-between">*/}
                      {/*    <a*/}
                      {/*      className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"*/}
                      {/*      href="#"*/}
                      {/*    >*/}
                      {/*      <span className="block w-full">Categories</span>*/}
                      {/*    </a>*/}
                      {/*    <div className="cursor-pointer w-full h-8 text-[17px] px-5 shrink-0 flex items-center justify-end text-brand-dark text-opacity-80 absolute ltr:right-0 rtl:left-0 top-1/2 transform -translate-y-1/2">*/}
                      {/*      <svg*/}
                      {/*        stroke="currentColor"*/}
                      {/*        fill="currentColor"*/}
                      {/*        strokeWidth={0}*/}
                      {/*        viewBox="0 0 512 512"*/}
                      {/*        className="transition duration-200 ease-in-out transform rotate-0"*/}
                      {/*        height="1em"*/}
                      {/*        width="1em"*/}
                      {/*        xmlns="http://www.w3.org/2000/svg"*/}
                      {/*      >*/}
                      {/*        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />*/}
                      {/*      </svg>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      {/*<li className="transition-colors duration-200 ">*/}
                      {/*  <div className="relative flex items-center justify-between">*/}
                      {/*    <a*/}
                      {/*      className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"*/}
                      {/*      href="#"*/}
                      {/*    >*/}
                      {/*      <span className="block w-full">Mega Menu</span>*/}
                      {/*    </a>*/}
                      {/*    <div className="cursor-pointer w-full h-8 text-[17px] px-5 shrink-0 flex items-center justify-end text-brand-dark text-opacity-80 absolute ltr:right-0 rtl:left-0 top-1/2 transform -translate-y-1/2">*/}
                      {/*      <svg*/}
                      {/*        stroke="currentColor"*/}
                      {/*        fill="currentColor"*/}
                      {/*        strokeWidth={0}*/}
                      {/*        viewBox="0 0 512 512"*/}
                      {/*        className="transition duration-200 ease-in-out transform rotate-0"*/}
                      {/*        height="1em"*/}
                      {/*        width="1em"*/}
                      {/*        xmlns="http://www.w3.org/2000/svg"*/}
                      {/*      >*/}
                      {/*        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />*/}
                      {/*      </svg>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      {/*<li className="transition-colors duration-200 ">*/}
                      {/*  <div className="relative flex items-center justify-between">*/}
                      {/*    <a*/}
                      {/*      className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"*/}
                      {/*      href="/en/shops"*/}
                      {/*    >*/}
                      {/*      <span className="block w-full">Vendors</span>*/}
                      {/*    </a>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      {/*<li className="transition-colors duration-200 ">*/}
                      {/*  <div className="relative flex items-center justify-between">*/}
                      {/*    <a*/}
                      {/*      className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"*/}
                      {/*      href="/en"*/}
                      {/*    >*/}
                      {/*      <span className="block w-full">Pages</span>*/}
                      {/*    </a>*/}
                      {/*    <div className="cursor-pointer w-full h-8 text-[17px] px-5 shrink-0 flex items-center justify-end text-brand-dark text-opacity-80 absolute ltr:right-0 rtl:left-0 top-1/2 transform -translate-y-1/2">*/}
                      {/*      <svg*/}
                      {/*        stroke="currentColor"*/}
                      {/*        fill="currentColor"*/}
                      {/*        strokeWidth={0}*/}
                      {/*        viewBox="0 0 512 512"*/}
                      {/*        className="transition duration-200 ease-in-out transform rotate-0"*/}
                      {/*        height="1em"*/}
                      {/*        width="1em"*/}
                      {/*        xmlns="http://www.w3.org/2000/svg"*/}
                      {/*      >*/}
                      {/*        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />*/}
                      {/*      </svg>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      {/*<li className="transition-colors duration-200 ">*/}
                      {/*  <div className="relative flex items-center justify-between">*/}
                      {/*    <a*/}
                      {/*      className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"*/}
                      {/*      href="/en/blog/blog-category-grid"*/}
                      {/*    >*/}
                      {/*      <span className="block w-full">Blog</span>*/}
                      {/*    </a>*/}
                      {/*    <div className="cursor-pointer w-full h-8 text-[17px] px-5 shrink-0 flex items-center justify-end text-brand-dark text-opacity-80 absolute ltr:right-0 rtl:left-0 top-1/2 transform -translate-y-1/2">*/}
                      {/*      <svg*/}
                      {/*        stroke="currentColor"*/}
                      {/*        fill="currentColor"*/}
                      {/*        strokeWidth={0}*/}
                      {/*        viewBox="0 0 512 512"*/}
                      {/*        className="transition duration-200 ease-in-out transform rotate-0"*/}
                      {/*        height="1em"*/}
                      {/*        width="1em"*/}
                      {/*        xmlns="http://www.w3.org/2000/svg"*/}
                      {/*      >*/}
                      {/*        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />*/}
                      {/*      </svg>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      <li className="transition-colors duration-200 ">
                        <div className="relative flex items-center justify-between">
                          <Link
                            className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"
                            href="/"
                          >
                            <span className="block w-full">Home</span>
                          </Link>
                        </div>
                      </li>
                        <li className="transition-colors duration-200 ">
                        <div className="relative flex items-center justify-between">
                          <Link
                            className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"
                            href="/products"
                          >
                            <span className="block w-full">Product us</span>
                          </Link>
                        </div>
                      </li>                      <li className="transition-colors duration-200 ">
                        <div className="relative flex items-center justify-between">
                          <Link
                            className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"
                            href="#"
                          >
                            <span className="block w-full">About Us</span>
                          </Link>
                        </div>
                      </li>                      <li className="transition-colors duration-200 ">
                        <div className="relative flex items-center justify-between">
                          <Link
                            className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"
                            href="#"
                          >
                            <span className="block w-full">Contact Us</span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-theme-dark">
                  <div className="os-scrollbar-track">
                    <div
                      className="os-scrollbar-handle"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-visible os-theme-dark">
                  <div className="os-scrollbar-track">
                    <div
                      className="os-scrollbar-handle"
                      style={{ height: "15.819%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-5 -mx-3 border-t text-brand-light border-border-base px-7 shrink-0">
                <a
                  className="text-heading mx-3 transition duration-300 ease-in text-brand-dark text-opacity-60 hover:text-brand facebook"
                  href="https://www.facebook.com/redqinc/"
                >
                  <span className="sr-only">text-facebook</span>
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
                      fillRule="evenodd"
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    />
                  </svg>
                </a>
                <a
                  className="text-heading mx-3 transition duration-300 ease-in text-brand-dark text-opacity-60 hover:text-brand twitter"
                  href="https://twitter.com/redqinc"
                >
                  <span className="sr-only">text-twitter</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                  </svg>
                </a>
                <a
                  className="text-heading mx-3 transition duration-300 ease-in text-brand-dark text-opacity-60 hover:text-brand youtube"
                  href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw"
                >
                  <span className="sr-only">text-youtube</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
                  </svg>
                </a>
                <a
                  className="text-heading mx-3 transition duration-300 ease-in text-brand-dark text-opacity-60 hover:text-brand instagram"
                  href="https://www.instagram.com/redqinc/"
                >
                  <span className="sr-only">text-instagram</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          aria-hidden="true"
          data-sentinel="end"
          style={{
            width: 0,
            height: 0,
            overflow: "hidden",
            outline: "none",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
}

export default MobileMenuDrawer;
