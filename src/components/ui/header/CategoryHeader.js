import React,{useState} from 'react';

function CategoryHeader({categoryToggleDropdown, isCategoryDropdownVisible}) {



    return (
        <div className="categories-header-button relative flex-shrink-0 w-52 xl:w-60">
            <button
                onClick={categoryToggleDropdown}
                className="text-brand-dark text-sm border-black/10 min-h-[48px] focus:outline-none w-full font-semibold py-2 flex items-center"
            >
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
                    <line x1={3} y1={12} x2={21} y2={12}/>
                    <line x1={3} y1={6} x2={21} y2={6}/>
                    <line x1={3} y1={18} x2={21} y2={18}/>
                </svg>
                Browse All Categories
            </button>
            {
                isCategoryDropdownVisible && (
                    <div className="absolute z-30 w-72 lg:w-full">
                        <div className="max-h-full">
                            <ul className="w-full bg-skin-fill rounded-b-md category-dropdown-menu ">
                                <li className="flex justify-between items-center transition  false text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Audio Music</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-[800px] bg-skin-fill opacity-0 invisible shadow-navigation">
                                        <ul className="text-xs pl-7 px-5 py-4 grid grid-cols-3 gap-4">
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Bags &amp; Accessories</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Jewelry &amp; Watches</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Accessories</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Wedding Rings</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Men Watches</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Woman Watches</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Electronic &amp; Digital</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Mobiles &amp; Tablets</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Camera, Photo &amp; Video
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Mobiles</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Tablets</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">PC Gaming</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Garden &amp; Kitchen</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Helicopters &amp; Parts
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Toys &amp; Hobbies</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Outdoor &amp; Traveling
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Home &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Lighting &amp; Lamps</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Automotive</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Automotive</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Car Alarms and Security
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Car Audio &amp; Speakers
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Home &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Lighting &amp; Lamps</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Lighting &amp; Lamps</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Wedding Rings</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Electronic &amp; Digital
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Garden &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Home &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Lighter &amp; Cigar Supplies
                      </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Home Accessories</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Bags &amp; Accessories
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Electronic &amp; Digital
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Garden &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Gift for Man</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Gift for Woman</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  false text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Phones &amp; Tablets</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-[800px] bg-skin-fill opacity-0 invisible shadow-navigation">
                                        <ul className="text-xs pl-7 px-5 py-4 grid grid-cols-3 gap-4">
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Bags &amp; Accessories</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Jewelry &amp; Watches</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Accessories</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Wedding Rings</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Men Watches</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Woman Watches</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Electronic &amp; Digital</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Mobiles &amp; Tablets</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Camera, Photo &amp; Video
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Mobiles</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">Tablets</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                <span className="capitalize ">PC Gaming</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="relative transition  text-sm  text-skin-base ">
                                                <a
                                                    className="flex items-center w-full hover:text-skin-primary text-base font-medium"
                                                    href="#"
                                                >
                                                    <span className="capitalize ">Garden &amp; Kitchen</span>
                                                </a>
                                                <div className="subMenuChild w-full py-1 subMega--level1 false">
                                                    <ul className="text-xs">
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Helicopters &amp; Parts
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Toys &amp; Hobbies</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                      <span className="capitalize ">
                        Outdoor &amp; Traveling
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Home &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="relative transition  text-sm text-skin-base hover:text-skin-primary">
                                                            <a
                                                                className="flex items-center w-full hover:text-skin-primary  "
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize ">Lighting &amp; Lamps</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  relative text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Fashion &amp; Clothing</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level0 shadow-navigation">
                                        <ul className="text-xs px-1.5 py-3">
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Bags &amp; Accessories</span>
                                                    <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-15px text-skin-base text-opacity-40"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
                  </svg>
                </span>
                                                </a>
                                                <div
                                                    className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level1 shadow-navigation">
                                                    <ul className="text-xs px-1.5 py-3">
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Jewelry &amp; Watches</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Accessories</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Wedding Rings</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Men Watches</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Woman Watches</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Electronic &amp; Digital</span>
                                                    <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-15px text-skin-base text-opacity-40"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
                  </svg>
                </span>
                                                </a>
                                                <div
                                                    className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level1 shadow-navigation">
                                                    <ul className="text-xs px-1.5 py-3">
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Mobiles &amp; Tablets</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Camera, Photo &amp; Video
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Mobiles</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Tablets</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">PC Gaming</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Garden &amp; Kitchen</span>
                                                    <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-15px text-skin-base text-opacity-40"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
                  </svg>
                </span>
                                                </a>
                                                <div
                                                    className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level1 shadow-navigation">
                                                    <ul className="text-xs px-1.5 py-3">
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Helicopters &amp; Parts
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Toys &amp; Hobbies</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Outdoor &amp; Traveling
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Home &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Lighting &amp; Lamps</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Automotive</span>
                                                    <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-15px text-skin-base text-opacity-40"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
                  </svg>
                </span>
                                                </a>
                                                <div
                                                    className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level1 shadow-navigation">
                                                    <ul className="text-xs px-1.5 py-3">
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Automotive</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Car Alarms and Security
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Car Audio &amp; Speakers
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Home &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Lighting &amp; Lamps</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Lighting &amp; Lamps</span>
                                                    <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-15px text-skin-base text-opacity-40"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
                  </svg>
                </span>
                                                </a>
                                                <div
                                                    className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level1 shadow-navigation">
                                                    <ul className="text-xs px-1.5 py-3">
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Wedding Rings</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Electronic &amp; Digital
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Garden &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Home &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Lighter &amp; Cigar Supplies
                      </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Home Accessories</span>
                                                    <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-15px text-skin-base text-opacity-40"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
                  </svg>
                </span>
                                                </a>
                                                <div
                                                    className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level1 shadow-navigation">
                                                    <ul className="text-xs px-1.5 py-3">
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Bags &amp; Accessories</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                      <span className="capitalize">
                        Electronic &amp; Digital
                      </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                    <span
                                                                        className="capitalize">Garden &amp; Kitchen</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Gift for Man</span>
                                                            </a>
                                                        </li>
                                                        <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                            <a
                                                                className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                                href="#"
                                                            >
                                                                <span className="capitalize">Gift for Woman</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  relative text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Garden &amp; Kitchen</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level0 shadow-navigation">
                                        <ul className="text-xs px-1.5 py-3">
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Helicopters &amp; Parts</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Toys &amp; Hobbies</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Outdoor &amp; Traveling</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Home &amp; Kitchen</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Lighting &amp; Lamps</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  relative text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">TV &amp; Video</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level0 shadow-navigation">
                                        <ul className="text-xs px-1.5 py-3">
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Apples</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Melons</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Berries</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">LG</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Samsung</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  relative text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Beauty &amp; Health</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level0 shadow-navigation">
                                        <ul className="text-xs px-1.5 py-3">
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Fruit Juice</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Ice Coffee</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Comodianos</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Punch</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Montemous</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  relative text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Jewelry &amp; Watches</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level0 shadow-navigation">
                                        <ul className="text-xs px-1.5 py-3">
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Fruit Juice</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Home Appliances </span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Shirts</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Punch</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Montemous</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  relative text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Top 10 Offers</span>
                                        <span className="hidden ltr:ml-auto rtl:mr-auto md:inline-flex">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-15px text-skin-base text-opacity-40"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </svg>
          </span>
                                    </a>
                                    <div
                                        className="dropdownMenu absolute top-0 z-10 invisible hidden w-full border opacity-0 md:block left-full bg-brand-light border-border-base subMenu--level0 shadow-navigation">
                                        <ul className="text-xs px-1.5 py-3">
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Footwear</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Digital</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Davenport</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Punch</span>
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center transition  relative text-sm px-3 ltr:pl-4 rtl:pr-4 text-brand-muted hover:text-brand ">
                                                <a
                                                    className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                                    href="#"
                                                >
                                                    <span className="capitalize">Bedside</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-between items-center transition  relative text-sm hover:text-brand px-3.5 2xl:px-4 ">
                                    <a
                                        className="flex items-center w-full py-3 demo  text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base text-brand-dark font-medium border-b border-border-base "
                                        href="#"
                                    >
                                        <span className="capitalize">Accessories</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }


        </div>
    );
}

export default CategoryHeader;