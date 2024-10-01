import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header
    id="siteHeader"
    className="header-one sticky-header sticky top-0 z-50 lg:relative w-full"
  >
    <div className="innerSticky z-20 w-full transition duration-200 ease-in-out  body-font bg-white">
      <div className="w-full transition-all duration-200 ease-in-out top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-12 xl:top-1">
        <div className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed" />
        <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
          <div className="flex flex-col w-full mx-auto">
            <form
              className="relative flex w-full rounded-md"
              noValidate=""
              role="search"
            >
              <label
                htmlFor="mobile-search"
                className="flex flex-1 items-center py-0.5"
              >
                <input
                  id="mobile-search"
                  className="text-heading outline-none w-full h-[45px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm rounded transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border-2 border-black/10"
                  placeholder="Search the store"
                  aria-label="mobile-search"
                  autoComplete="off"
                  name="search"
                  defaultValue=""
                />
              </label>
              <span className="absolute top-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-5 h-5 text-brand-dark text-opacity-40"
                >
                  <path
                    d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className="top-bar  text-sm text-fill-base border-b border-black/10">
        <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
          <div className="h-11 flex justify-between items-center">
            <text className="hidden md:block truncate">
              Stote Location: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
            </text>
            <div className="flex flex-shrink-0 smx-auto pace-s-5">
              <nav className=" flex relative  flex transition-all duration-200 ease-in-out">
                <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                  <a
                    className="text-fill-base inline-flex items-center py-2 font-normal relative group-hover:text-brand "
                    href="/en/my-account/wishlist"
                  >
                    Wishlist
                  </a>
                </div>
                <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                  <a
                    className="text-fill-base inline-flex items-center py-2 font-normal relative group-hover:text-brand "
                    href="/en/checkout"
                  >
                    Checkout
                  </a>
                </div>
                <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                  <a
                    className="text-fill-base inline-flex items-center py-2 font-normal relative group-hover:text-brand "
                    href="/en"
                  >
                    Gift Certificates
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
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
              <img
                alt="Razazoror"
                loading="eager"
                width={142}
                height={44}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src="/logo.cfe79157.svg"
              />
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out hidden lg:flex lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[800px] lg:mx-10">
              <div className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed" />
              <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
                <div className="flex flex-col w-full mx-auto">
                  <form
                    className="relative flex w-full rounded-md"
                    noValidate=""
                    role="search"
                  >
                    <label
                      htmlFor="top-bar-search"
                      className="flex flex-1 items-center py-0.5"
                    >
                      <input
                        id="top-bar-search"
                        className="text-heading outline-none w-full h-[45px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm rounded transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border-2 border-black/10"
                        placeholder="Search the store"
                        aria-label="top-bar-search"
                        autoComplete="off"
                        name="search"
                        defaultValue=""
                      />
                    </label>
                    <span className="absolute top-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        className="w-5 h-5 text-brand-dark text-opacity-40"
                      >
                        <path
                          d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-brand-icon-header flex text-sm space-x-5 xl:space-x-10 lg:max-w-[33%]">
              <div className="hidden lg:flex items-center shrink-0 accountButton">
                <div className="cart-button">
                  <svg
                    className=""
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8548 21.3333C21.6915 19.3654 20.0317 17.734 18.0398 16.6004C16.0478 15.4669 13.7928 14.8706 11.4979 14.8706C9.20304 14.8706 6.94798 15.4669 4.95601 16.6004C2.96405 17.734 1.30427 19.3654 0.141025 21.3333C-0.00138538 21.5885 -0.0376415 21.889 0.0400248 22.1705C0.0766559 22.3139 0.143667 22.4478 0.236568 22.5633C0.329469 22.6789 0.446115 22.7733 0.578691 22.8403C0.74972 22.9368 0.943214 22.9868 1.1398 22.9854C1.33475 22.9937 1.52817 22.9479 1.69855 22.8533C1.86893 22.7587 2.0096 22.619 2.10491 22.4496C3.06783 20.8197 4.44211 19.4683 6.09163 18.5294C7.74115 17.5905 9.60864 17.0965 11.5091 17.0965C13.4096 17.0965 15.2771 17.5905 16.9266 18.5294C18.5761 19.4683 19.9504 20.8197 20.9133 22.4496C21.0632 22.703 21.3076 22.8874 21.5934 22.9627C21.8792 23.0379 22.1832 22.998 22.4396 22.8515C22.5672 22.7838 22.6791 22.6902 22.768 22.5767C22.8569 22.4633 22.9209 22.3325 22.9558 22.1928C22.9973 22.0501 23.0098 21.9005 22.9924 21.7529C22.9751 21.6053 22.9283 21.4626 22.8548 21.3333Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.5001 13.8C13.3084 13.8003 15.0445 13.0842 16.3349 11.8057C17.6254 10.5272 18.3669 8.78854 18.4001 6.96384C18.4001 5.11691 17.6731 3.34563 16.3791 2.03966C15.0851 0.733688 13.3301 0 11.5001 0C9.6701 0 7.91506 0.733688 6.62106 2.03966C5.32706 3.34563 4.6001 5.11691 4.6001 6.96384C4.63325 8.78854 5.37482 10.5272 6.66525 11.8057C7.95567 13.0842 9.69181 13.8003 11.5001 13.8ZM6.9001 6.96384C6.9001 5.73255 7.38474 4.5517 8.24741 3.68105C9.11007 2.8104 10.2801 2.32128 11.5001 2.32128C12.7201 2.32128 13.8901 2.8104 14.7528 3.68105C15.6155 4.5517 16.1001 5.73255 16.1001 6.96384C16.1001 8.19512 15.6155 9.37597 14.7528 10.2466C13.8901 11.1173 12.7201 11.6064 11.5001 11.6064C10.2801 11.6064 9.11007 11.1173 8.24741 10.2466C7.38474 9.37597 6.9001 8.19512 6.9001 6.96384Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <button
                  className="text-sm font-normal focus:outline-none ms-2"
                  aria-label="Authentication"
                >
                  My Account
                </button>
              </div>
              <button
                className="flex items-center justify-center shrink-0 h-auto focus:outline-none transform hidden lg:flex"
                aria-label="cart-button"
              >
                <div className="relative flex items-center">
                  <div className="flex items-center relative cart-button">
                    <svg
                      className=""
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
                    <span className="cart-counter-badge  h-[18px] min-w-[18px] rounded-full flex items-center justify-center bg-red-600 text-brand-light absolute -top-1 ltr:left-3 rtl:right-3 text-11px">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-normal ms-2">My Cart</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar  lg:block bg-white border-b border-black/10">
        <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
          <div className="flex justify-between items-center">
            <a
              lang="en"
              className="inline-flex focus:outline-none  navbar-logo w-0 opacity-0 transition-all duration-200 ease-in-out"
              href="/en"
            >
              <img
                alt="Razazoror"
                loading="eager"
                width={142}
                height={44}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src="/logo.cfe79157.svg"
              />
            </a>
            <div className="categories-header-button relative  flex-shrink-0 w-52 xl:w-60">
              <button className="text-brand-dark text-sm border-black/10 min-h-[48px] focus:outline-none w-full font-semibold py-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-2xl me-3"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1={3} y1={12} x2={21} y2={12} />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <line x1={3} y1={18} x2={21} y2={18} />
                </svg>
                Browse All Categories
              </button>
            </div>
            <nav className="headerMenu flex w-full flex transition-all duration-200 ease-in-out">
              <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
                <a
                  className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
                  href="/en"
                >
                  Demos
                  <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="transition duration-300 ease-in-out transform"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </a>
                <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                  <ul className="py-5 text-sm text-brand-muted">
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en"
                      >
                        Demo Home 1
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/home2"
                      >
                        Demo Home 2
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/home3"
                      >
                        Demo Home 3
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/home4"
                      >
                        Demo Home 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 ">
                <a
                  className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
                  href="/en/search"
                >
                  Categories
                  <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="transition duration-300 ease-in-out transform"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </a>
                <div className="subMega shadow-dropDown bg-skin-fill  z-30 absolute start-0 opacity-0 group-hover:opacity-100">
                  <div className="mx-auto mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                    <div className="flex flex-row gap-5 pt-8 py-5">
                      <div className="cateArea basis-full ">
                        <ul className="text-body text-sm grid grid-cols-5 gap-4 ">
                          <li className="relative">
                            <a className="block pb-2" href="/en/search">
                              <div className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">
                                <div className="block w-full box-sizing">
                                  <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={255}
                                    height={160}
                                    version="1.1"
                                  />
                                </div>
                                <img
                                  alt="menu-fresh-vegetables"
                                  loading="lazy"
                                  width={0}
                                  height={0}
                                  decoding="async"
                                  data-nimg={1}
                                  className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                  style={{ color: "transparent" }}
                                  sizes="100vw"
                                  src='/img/collection_1.webp'
                                />
                              </div>
                            </a>
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Phones &amp; Tablets
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Home Audio
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Helicopters &amp; Parts
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Toys &amp; Hobbies
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Outdoor &amp; Traveling
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Garden
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a className="block pb-2" href="/en/search">
                              <div className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">
                                <div className="block w-full box-sizing">
                                  <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={255}
                                    height={160}
                                    version="1.1"
                                  />
                                </div>
                                <img
                                  alt="menu-diet-nutrition"
                                  loading="lazy"
                                  width={0}
                                  height={0}
                                  decoding="async"
                                  data-nimg={1}
                                  className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                  style={{ color: "transparent" }}
                                  sizes="100vw"
                                  src="/img/collection_1.webp"
                                />
                              </div>
                            </a>
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Fashion &amp; Clothing
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Automotive
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Car Audio &amp; Speakers
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  More Car Accessories
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Car Alarms and Security
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Battereries &amp; Chargers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a className="block pb-2" href="/en/search">
                              <div className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">
                                <div className="block w-full box-sizing">
                                  <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={255}
                                    height={160}
                                    version="1.1"
                                  />
                                </div>
                                <img
                                  alt="menu-healthy-foods"
                                  loading="lazy"
                                  width={0}
                                  height={0}
                                  decoding="async"
                                  data-nimg={1}
                                  className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                  style={{ color: "transparent" }}
                                  sizes="100vw"
                                  src="/img/collection_1.webp"
                                />
                              </div>
                            </a>
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Garden &amp; Kitchen
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Audio &amp; Video
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Mobiles &amp; Tablets
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Bath
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Garden
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Garden
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a className="block pb-2" href="/en/search">
                              <div className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">
                                <div className="block w-full box-sizing">
                                  <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={255}
                                    height={160}
                                    version="1.1"
                                  />
                                </div>
                                <img
                                  alt="menu-grocery-items"
                                  loading="lazy"
                                  width={0}
                                  height={0}
                                  decoding="async"
                                  data-nimg={1}
                                  className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                  style={{ color: "transparent" }}
                                  sizes="100vw"
                                  src="/img/collection_1.webp"
                                />
                              </div>
                            </a>
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Beauty &amp; Health
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Battereries &amp; Chargers
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Headphones, Headsets
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Accessories
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Jewelry &amp; Watches
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Wedding Rings
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a className="block pb-2" href="/en/search">
                              <div className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">
                                <div className="block w-full box-sizing">
                                  <svg
                                    className="block max-w-full h-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={255}
                                    height={160}
                                    version="1.1"
                                  />
                                </div>
                                <img
                                  alt="menu-beaf-steak"
                                  loading="lazy"
                                  width={0}
                                  height={0}
                                  decoding="async"
                                  data-nimg={1}
                                  className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                  style={{ color: "transparent" }}
                                  sizes="100vw"
                                  src="/img/collection_1.webp"
                                />
                              </div>
                            </a>
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              TV &amp; Video
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Men Watches
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Woman Watches
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Gift Certificates
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Gift for Man
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Gift for Woman
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="navPages-contentbottom bg-brand">
                    <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                      <div className="text-white text-sm text-center py-4">
                        <strong>30% Off</strong> the shipping of your first order
                        with the code: <strong>-SALE30</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 ">
                <a
                  className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
                  href="/en/search"
                >
                  Mega Menu
                  <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="transition duration-300 ease-in-out transform"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </a>
                <div className="subMega shadow-dropDown bg-skin-fill  z-30 absolute start-0 opacity-0 group-hover:opacity-100">
                  <div className="mx-auto mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                    <div className="flex flex-row gap-5 pt-8 py-5">
                      <div className="cateArea basis-3/4 ">
                        <ul className="text-body text-sm grid grid-cols-5 gap-4 ">
                          <li className="relative">
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Audio &amp; Video
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Home Audio
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Helicopters &amp; Parts
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Toys &amp; Hobbies
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Outdoor &amp; Traveling
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Garden
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Automotive
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Automotive
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Car Audio &amp; Speakers
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  More Car Accessories
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Car Alarms and Security
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Battereries &amp; Chargers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Bath
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Audio &amp; Video
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Mobiles &amp; Tablets
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Bath
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Garden
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Garden
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              Garden
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Battereries &amp; Chargers
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Headphones, Headsets
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Accessories
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Jewelry &amp; Watches
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Wedding Rings
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="relative">
                            <a
                              className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"
                              href="/en/search"
                            >
                              publications
                            </a>
                            <ul className="subMenuChild  w-full">
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Men Watches
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Woman Watches
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Gift Certificates
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Gift for Man
                                </a>
                              </li>
                              <li className="relative">
                                <a
                                  className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "
                                  href="/en/search"
                                >
                                  Gift for Woman
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="imageArea basis-1/4 false">
                        <a className="text-skin-base " href="/search">
                          <div className="card-img-container max-w-[350px]">
                            <div className="relative inline-block overflow-hidden mx-auto box-sizing object-cover bg-skin-thumbnail">
                              <div className="block w-full box-sizing">
                                <svg
                                  className="block max-w-full h-auto"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={450}
                                  height={300}
                                  version="1.1"
                                />
                              </div>
                              <img
                                alt="Product Image"
                                loading="lazy"
                                width={0}
                                height={0}
                                decoding="async"
                                data-nimg={1}
                                className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                style={{ color: "transparent" }}
                                sizes="100vw"
                                src="/img/banner-menu.webp"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="navPages-contentbottom bg-brand">
                    <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                      <div className="text-white text-sm text-center py-4">
                        <strong>30% Off</strong> the shipping of your first order
                        with the code: <strong>UMINEX-SALE30</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
                <a
                  className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
                  href="/en/shops"
                >
                  Vendors
                </a>
              </div>
              <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
                <a
                  className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
                  href="/en"
                >
                  Pages
                  <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="transition duration-300 ease-in-out transform"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </a>
                <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                  <ul className="py-5 text-sm text-brand-muted">
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en"
                      >
                        Users
                        <span className="text-sm mt-0.5 shrink-0">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            className="text-body transition duration-300 ease-in-out group-hover:text-skin-base"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                          </svg>
                        </span>
                      </a>
                      <ul className="absolute z-0 invisible w-56 py-3 transition-all duration-300 opacity-0 subMenuChild shadow-subMenu bg-brand-light ltr:right-full rtl:left-full 2xl:ltr:right-auto 2xl:rtl:left-auto 2xl:ltr:left-full 2xl:rtl:right-full top-4">
                        <li className="relative">
                          <a
                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                            href="/en/my-account/account-settings"
                          >
                            My Account
                          </a>
                        </li>
                        <li className="relative">
                          <a
                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                            href="/en/signin"
                          >
                            Sign In
                          </a>
                        </li>
                        <li className="relative">
                          <a
                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                            href="/en/signup"
                          >
                            Sign Up
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/faq"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/contact-us"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/privacy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/terms"
                      >
                        Terms &amp; Condition
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/checkout"
                      >
                        Checkout
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/404"
                      >
                        Page 404
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
                <a
                  className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
                  href="/en/blog/blog-category-grid"
                >
                  Blog
                  <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="transition duration-300 ease-in-out transform"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </a>
                <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                  <ul className="py-5 text-sm text-brand-muted">
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/blog/blog-category-grid"
                      >
                        Blog Category Grid
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/blog/blog-category-list"
                      >
                        Blog Category List
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/blog/blog-category-big"
                      >
                        Blog Category Big
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/blog"
                      >
                        Blog Category Wide
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                        href="/en/blog/blog-category-wide"
                      >
                        Single Post
                        <span className="text-sm mt-0.5 shrink-0">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            className="text-body transition duration-300 ease-in-out group-hover:text-skin-base"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                          </svg>
                        </span>
                      </a>
                      <ul className="absolute z-0 invisible w-56 py-3 transition-all duration-300 opacity-0 subMenuChild shadow-subMenu bg-brand-light ltr:right-full rtl:left-full 2xl:ltr:right-auto 2xl:rtl:left-auto 2xl:ltr:left-full 2xl:rtl:right-full top-4">
                        <li className="relative">
                          <a
                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                            href="/en/blog/blog-post-left"
                          >
                            Left Sidebar
                          </a>
                        </li>
                        <li className="relative">
                          <a
                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                            href="/en/blog/blog-post-right"
                          >
                            Right Sidebar
                          </a>
                        </li>
                        <li className="relative">
                          <a
                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"
                            href="/en/blog/the-litigants-on-the-screen-are-not-actors"
                          >
                            No Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
                <a
                  className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
                  href="/en/contact-us"
                >
                  Contact Us
                </a>
              </div>
            </nav>
            <div className="text-brand-icon-header ms-auto flex items-center flex-shrink-0">
              <div className="navbar-right flex items-center w-0 opacity-0 transition-all duration-200 ease-in-out">
                <button
                  type="button"
                  aria-label="Search Toggle"
                  title="Search toggle"
                  className="outline-none me-6 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-[22px] h-[22px] text-base"
                  >
                    <path
                      d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div className="flex-shrink-0 flex items-center">
                  <button
                    className="text-sm font-normal focus:outline-none ms-2"
                    aria-label="Authentication"
                  >
                    <svg
                      className=""
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.8548 21.3333C21.6915 19.3654 20.0317 17.734 18.0398 16.6004C16.0478 15.4669 13.7928 14.8706 11.4979 14.8706C9.20304 14.8706 6.94798 15.4669 4.95601 16.6004C2.96405 17.734 1.30427 19.3654 0.141025 21.3333C-0.00138538 21.5885 -0.0376415 21.889 0.0400248 22.1705C0.0766559 22.3139 0.143667 22.4478 0.236568 22.5633C0.329469 22.6789 0.446115 22.7733 0.578691 22.8403C0.74972 22.9368 0.943214 22.9868 1.1398 22.9854C1.33475 22.9937 1.52817 22.9479 1.69855 22.8533C1.86893 22.7587 2.0096 22.619 2.10491 22.4496C3.06783 20.8197 4.44211 19.4683 6.09163 18.5294C7.74115 17.5905 9.60864 17.0965 11.5091 17.0965C13.4096 17.0965 15.2771 17.5905 16.9266 18.5294C18.5761 19.4683 19.9504 20.8197 20.9133 22.4496C21.0632 22.703 21.3076 22.8874 21.5934 22.9627C21.8792 23.0379 22.1832 22.998 22.4396 22.8515C22.5672 22.7838 22.6791 22.6902 22.768 22.5767C22.8569 22.4633 22.9209 22.3325 22.9558 22.1928C22.9973 22.0501 23.0098 21.9005 22.9924 21.7529C22.9751 21.6053 22.9283 21.4626 22.8548 21.3333Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.5001 13.8C13.3084 13.8003 15.0445 13.0842 16.3349 11.8057C17.6254 10.5272 18.3669 8.78854 18.4001 6.96384C18.4001 5.11691 17.6731 3.34563 16.3791 2.03966C15.0851 0.733688 13.3301 0 11.5001 0C9.6701 0 7.91506 0.733688 6.62106 2.03966C5.32706 3.34563 4.6001 5.11691 4.6001 6.96384C4.63325 8.78854 5.37482 10.5272 6.66525 11.8057C7.95567 13.0842 9.69181 13.8003 11.5001 13.8ZM6.9001 6.96384C6.9001 5.73255 7.38474 4.5517 8.24741 3.68105C9.11007 2.8104 10.2801 2.32128 11.5001 2.32128C12.7201 2.32128 13.8901 2.8104 14.7528 3.68105C15.6155 4.5517 16.1001 5.73255 16.1001 6.96384C16.1001 8.19512 15.6155 9.37597 14.7528 10.2466C13.8901 11.1173 12.7201 11.6064 11.5001 11.6064C10.2801 11.6064 9.11007 11.1173 8.24741 10.2466C7.38474 9.37597 6.9001 8.19512 6.9001 6.96384Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  className="flex items-center justify-center shrink-0 h-auto focus:outline-none transform ms-8 "
                  aria-label="cart-button"
                >
                  <div className="relative flex items-center">
                    <div className="flex items-center relative cart-button">
                      <svg
                        className=""
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
                      <span className="cart-counter-badge  h-[18px] min-w-[18px] rounded-full flex items-center justify-center bg-red-600 text-brand-light absolute -top-1 ltr:left-3 rtl:right-3 text-11px">
                        3
                      </span>
                    </div>
                    <span className="text-sm font-normal ms-2">My Cart</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  )
}
