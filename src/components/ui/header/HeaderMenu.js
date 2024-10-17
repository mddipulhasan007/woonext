import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeaderMenu(props) {
  return (
    <nav className="headerMenu flex w-full flex transition-all duration-200 ease-in-out">
      {/*<div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">*/}
      {/*    <a*/}
      {/*        className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"*/}
      {/*        href="/en"*/}
      {/*    >*/}
      {/*        Demos*/}
      {/*        <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">*/}
      {/*        <svg*/}
      {/*            stroke="currentColor"*/}
      {/*            fill="currentColor"*/}
      {/*            strokeWidth={0}*/}
      {/*            viewBox="0 0 16 16"*/}
      {/*            className="transition duration-300 ease-in-out transform"*/}
      {/*            height="1em"*/}
      {/*            width="1em"*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*              fillRule="evenodd"*/}
      {/*              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </span>*/}
      {/*    </a>*/}
      {/*    <div*/}
      {/*        className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">*/}
      {/*        <ul className="py-5 text-sm text-brand-muted">*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en"*/}
      {/*                >*/}
      {/*                    Demo Home 1*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/home2"*/}
      {/*                >*/}
      {/*                    Demo Home 2*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/home3"*/}
      {/*                >*/}
      {/*                    Demo Home 3*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/home4"*/}
      {/*                >*/}
      {/*                    Demo Home 4*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*        </ul>*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 ">*/}
      {/*    <a*/}
      {/*        className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"*/}
      {/*        href="#"*/}
      {/*    >*/}
      {/*        Categories*/}
      {/*        <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">*/}
      {/*        <svg*/}
      {/*            stroke="currentColor"*/}
      {/*            fill="currentColor"*/}
      {/*            strokeWidth={0}*/}
      {/*            viewBox="0 0 16 16"*/}
      {/*            className="transition duration-300 ease-in-out transform"*/}
      {/*            height="1em"*/}
      {/*            width="1em"*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*              fillRule="evenodd"*/}
      {/*              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </span>*/}
      {/*    </a>*/}
      {/*    <div*/}
      {/*        className="subMega shadow-dropDown bg-skin-fill  z-30 absolute start-0 opacity-0 group-hover:opacity-100">*/}
      {/*        <div className="mx-auto mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">*/}
      {/*            <div className="flex flex-row gap-5 pt-8 py-5">*/}
      {/*                <div className="cateArea basis-full ">*/}
      {/*                    <ul className="text-body text-sm grid grid-cols-5 gap-4 ">*/}
      {/*                        <li className="relative">*/}
      {/*                            <a className="block pb-2" href="#">*/}
      {/*                                <div*/}
      {/*                                    className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">*/}
      {/*                                    <div className="block w-full box-sizing">*/}
      {/*                                        <svg*/}
      {/*                                            className="block max-w-full h-auto"*/}
      {/*                                            xmlns="http://www.w3.org/2000/svg"*/}
      {/*                                            width={255}*/}
      {/*                                            height={160}*/}
      {/*                                            version="1.1"*/}
      {/*                                        />*/}
      {/*                                    </div>*/}
      {/*                                    <Image*/}
      {/*                                        alt="menu-fresh-vegetables"*/}
      {/*                                        loading="lazy"*/}
      {/*                                        width={0}*/}
      {/*                                        height={0}*/}
      {/*                                        decoding="async"*/}
      {/*                                        data-nimg={1}*/}
      {/*                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"*/}
      {/*                                        style={{color: "transparent"}}*/}
      {/*                                        sizes="100vw"*/}
      {/*                                        src='/img/collection_1.webp'*/}
      {/*                                    />*/}
      {/*                                </div>*/}
      {/*                            </a>*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Phones &amp; Tablets*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Home Audio*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Helicopters &amp; Parts*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Toys &amp; Hobbies*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Outdoor &amp; Traveling*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Garden*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a className="block pb-2" href="#">*/}
      {/*                                <div*/}
      {/*                                    className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">*/}
      {/*                                    <div className="block w-full box-sizing">*/}
      {/*                                        <svg*/}
      {/*                                            className="block max-w-full h-auto"*/}
      {/*                                            xmlns="http://www.w3.org/2000/svg"*/}
      {/*                                            width={255}*/}
      {/*                                            height={160}*/}
      {/*                                            version="1.1"*/}
      {/*                                        />*/}
      {/*                                    </div>*/}
      {/*                                    <Image*/}
      {/*                                        alt="menu-diet-nutrition"*/}
      {/*                                        loading="lazy"*/}
      {/*                                        width={0}*/}
      {/*                                        height={0}*/}
      {/*                                        decoding="async"*/}
      {/*                                        data-nimg={1}*/}
      {/*                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"*/}
      {/*                                        style={{color: "transparent"}}*/}
      {/*                                        sizes="100vw"*/}
      {/*                                        src="/img/collection_1.webp"*/}
      {/*                                    />*/}
      {/*                                </div>*/}
      {/*                            </a>*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Fashion &amp; Clothing*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Automotive*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Car Audio &amp; Speakers*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        More Car Accessories*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Car Alarms and Security*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Battereries &amp; Chargers*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a className="block pb-2" href="#">*/}
      {/*                                <div*/}
      {/*                                    className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">*/}
      {/*                                    <div className="block w-full box-sizing">*/}
      {/*                                        <svg*/}
      {/*                                            className="block max-w-full h-auto"*/}
      {/*                                            xmlns="http://www.w3.org/2000/svg"*/}
      {/*                                            width={255}*/}
      {/*                                            height={160}*/}
      {/*                                            version="1.1"*/}
      {/*                                        />*/}
      {/*                                    </div>*/}
      {/*                                    <Image*/}
      {/*                                        alt="menu-healthy-foods"*/}
      {/*                                        loading="lazy"*/}
      {/*                                        width={0}*/}
      {/*                                        height={0}*/}
      {/*                                        decoding="async"*/}
      {/*                                        data-nimg={1}*/}
      {/*                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"*/}
      {/*                                        style={{color: "transparent"}}*/}
      {/*                                        sizes="100vw"*/}
      {/*                                        src="/img/collection_1.webp"*/}
      {/*                                    />*/}
      {/*                                </div>*/}
      {/*                            </a>*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Garden &amp; Kitchen*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Audio &amp; Video*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Mobiles &amp; Tablets*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Bath*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Garden*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Garden*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a className="block pb-2" href="#">*/}
      {/*                                <div*/}
      {/*                                    className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">*/}
      {/*                                    <div className="block w-full box-sizing">*/}
      {/*                                        <svg*/}
      {/*                                            className="block max-w-full h-auto"*/}
      {/*                                            xmlns="http://www.w3.org/2000/svg"*/}
      {/*                                            width={255}*/}
      {/*                                            height={160}*/}
      {/*                                            version="1.1"*/}
      {/*                                        />*/}
      {/*                                    </div>*/}
      {/*                                    <Image*/}
      {/*                                        alt="menu-grocery-items"*/}
      {/*                                        loading="lazy"*/}
      {/*                                        width={0}*/}
      {/*                                        height={0}*/}
      {/*                                        decoding="async"*/}
      {/*                                        data-nimg={1}*/}
      {/*                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"*/}
      {/*                                        style={{color: "transparent"}}*/}
      {/*                                        sizes="100vw"*/}
      {/*                                        src="/img/collection_1.webp"*/}
      {/*                                    />*/}
      {/*                                </div>*/}
      {/*                            </a>*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Beauty &amp; Health*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Battereries &amp; Chargers*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Headphones, Headsets*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Accessories*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Jewelry &amp; Watches*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Wedding Rings*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a className="block pb-2" href="#">*/}
      {/*                                <div*/}
      {/*                                    className="relative inline-block overflow-hidden mx-auto box-sizing bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform ">*/}
      {/*                                    <div className="block w-full box-sizing">*/}
      {/*                                        <svg*/}
      {/*                                            className="block max-w-full h-auto"*/}
      {/*                                            xmlns="http://www.w3.org/2000/svg"*/}
      {/*                                            width={255}*/}
      {/*                                            height={160}*/}
      {/*                                            version="1.1"*/}
      {/*                                        />*/}
      {/*                                    </div>*/}
      {/*                                    <Image*/}
      {/*                                        alt="menu-beaf-steak"*/}
      {/*                                        loading="lazy"*/}
      {/*                                        width={0}*/}
      {/*                                        height={0}*/}
      {/*                                        decoding="async"*/}
      {/*                                        data-nimg={1}*/}
      {/*                                        className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"*/}
      {/*                                        style={{color: "transparent"}}*/}
      {/*                                        sizes="100vw"*/}
      {/*                                        src="/img/collection_1.webp"*/}
      {/*                                    />*/}
      {/*                                </div>*/}
      {/*                            </a>*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                TV &amp; Video*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Men Watches*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Woman Watches*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Gift Certificates*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Gift for Man*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Gift for Woman*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                    </ul>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <div className="navPages-contentbottom bg-brand">*/}
      {/*            <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">*/}
      {/*                <div className="text-white text-sm text-center py-4">*/}
      {/*                    <strong>30% Off</strong> the shipping of your first order*/}
      {/*                    with the code: <strong>-SALE30</strong>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 ">*/}
      {/*    <a*/}
      {/*        className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"*/}
      {/*        href="#"*/}
      {/*    >*/}
      {/*        Mega Menu*/}
      {/*        <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">*/}
      {/*        <svg*/}
      {/*            stroke="currentColor"*/}
      {/*            fill="currentColor"*/}
      {/*            strokeWidth={0}*/}
      {/*            viewBox="0 0 16 16"*/}
      {/*            className="transition duration-300 ease-in-out transform"*/}
      {/*            height="1em"*/}
      {/*            width="1em"*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*              fillRule="evenodd"*/}
      {/*              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </span>*/}
      {/*    </a>*/}
      {/*    <div*/}
      {/*        className="subMega shadow-dropDown bg-skin-fill  z-30 absolute start-0 opacity-0 group-hover:opacity-100">*/}
      {/*        <div className="mx-auto mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">*/}
      {/*            <div className="flex flex-row gap-5 pt-8 py-5">*/}
      {/*                <div className="cateArea basis-3/4 ">*/}
      {/*                    <ul className="text-body text-sm grid grid-cols-5 gap-4 ">*/}
      {/*                        <li className="relative">*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Audio &amp; Video*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Home Audio*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Helicopters &amp; Parts*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Toys &amp; Hobbies*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Outdoor &amp; Traveling*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Garden*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Automotive*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Automotive*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Car Audio &amp; Speakers*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        More Car Accessories*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Car Alarms and Security*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Battereries &amp; Chargers*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Bath*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Audio &amp; Video*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Mobiles &amp; Tablets*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Bath*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Garden*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Garden*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                Garden*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Battereries &amp; Chargers*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Headphones, Headsets*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Accessories*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Jewelry &amp; Watches*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Wedding Rings*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                        <li className="relative">*/}
      {/*                            <a*/}
      {/*                                className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary font-semibold"*/}
      {/*                                href="#"*/}
      {/*                            >*/}
      {/*                                publications*/}
      {/*                            </a>*/}
      {/*                            <ul className="subMenuChild  w-full">*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Men Watches*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Woman Watches*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Gift Certificates*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Gift for Man*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                                <li className="relative">*/}
      {/*                                    <a*/}
      {/*                                        className="text-brand-dark flex items-center justify-between py-2 hover:text-skin-primary  "*/}
      {/*                                        href="#"*/}
      {/*                                    >*/}
      {/*                                        Gift for Woman*/}
      {/*                                    </a>*/}
      {/*                                </li>*/}
      {/*                            </ul>*/}
      {/*                        </li>*/}
      {/*                    </ul>*/}
      {/*                </div>*/}
      {/*                <div className="imageArea basis-1/4 false">*/}
      {/*                    <a className="text-skin-base " href="/search">*/}
      {/*                        <div className="card-img-container max-w-[350px]">*/}
      {/*                            <div*/}
      {/*                                className="relative inline-block overflow-hidden mx-auto box-sizing object-cover bg-skin-thumbnail">*/}
      {/*                                <div className="block w-full box-sizing">*/}
      {/*                                    <svg*/}
      {/*                                        className="block max-w-full h-auto"*/}
      {/*                                        xmlns="http://www.w3.org/2000/svg"*/}
      {/*                                        width={450}*/}
      {/*                                        height={300}*/}
      {/*                                        version="1.1"*/}
      {/*                                    />*/}
      {/*                                </div>*/}
      {/*                                <Image*/}
      {/*                                    alt="Product Image"*/}
      {/*                                    loading="lazy"*/}
      {/*                                    width={0}*/}
      {/*                                    height={0}*/}
      {/*                                    decoding="async"*/}
      {/*                                    data-nimg={1}*/}
      {/*                                    className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"*/}
      {/*                                    style={{color: "transparent"}}*/}
      {/*                                    sizes="100vw"*/}
      {/*                                    src="/img/banner-menu.webp"*/}
      {/*                                />*/}
      {/*                            </div>*/}
      {/*                        </div>*/}
      {/*                    </a>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <div className="navPages-contentbottom bg-brand">*/}
      {/*            <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">*/}
      {/*                <div className="text-white text-sm text-center py-4">*/}
      {/*                    <strong>30% Off</strong> the shipping of your first order*/}
      {/*                    with the code: <strong>UMINEX-SALE30</strong>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">*/}
      {/*    <a*/}
      {/*        className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"*/}
      {/*        href="/en/shops"*/}
      {/*    >*/}
      {/*        Vendors*/}
      {/*    </a>*/}
      {/*</div>*/}
      {/*<div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">*/}
      {/*    <a*/}
      {/*        className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"*/}
      {/*        href="/en"*/}
      {/*    >*/}
      {/*        Pages*/}
      {/*        <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">*/}
      {/*        <svg*/}
      {/*            stroke="currentColor"*/}
      {/*            fill="currentColor"*/}
      {/*            strokeWidth={0}*/}
      {/*            viewBox="0 0 16 16"*/}
      {/*            className="transition duration-300 ease-in-out transform"*/}
      {/*            height="1em"*/}
      {/*            width="1em"*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*              fillRule="evenodd"*/}
      {/*              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </span>*/}
      {/*    </a>*/}
      {/*    <div*/}
      {/*        className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">*/}
      {/*        <ul className="py-5 text-sm text-brand-muted">*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en"*/}
      {/*                >*/}
      {/*                    Users*/}
      {/*                    <span className="text-sm mt-0.5 shrink-0">*/}
      {/*              <svg*/}
      {/*                  stroke="currentColor"*/}
      {/*                  fill="currentColor"*/}
      {/*                  strokeWidth={0}*/}
      {/*                  viewBox="0 0 512 512"*/}
      {/*                  className="text-body transition duration-300 ease-in-out group-hover:text-skin-base"*/}
      {/*                  height="1em"*/}
      {/*                  width="1em"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*              >*/}
      {/*                <path*/}
      {/*                    d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>*/}
      {/*              </svg>*/}
      {/*            </span>*/}
      {/*                </a>*/}
      {/*                <ul className="absolute z-0 invisible w-56 py-3 transition-all duration-300 opacity-0 subMenuChild shadow-subMenu bg-brand-light ltr:right-full rtl:left-full 2xl:ltr:right-auto 2xl:rtl:left-auto 2xl:ltr:left-full 2xl:rtl:right-full top-4">*/}
      {/*                    <li className="relative">*/}
      {/*                        <a*/}
      {/*                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                            href="/en/my-account/account-settings"*/}
      {/*                        >*/}
      {/*                            My Account*/}
      {/*                        </a>*/}
      {/*                    </li>*/}
      {/*                    <li className="relative">*/}
      {/*                        <a*/}
      {/*                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                            href="/en/signin"*/}
      {/*                        >*/}
      {/*                            Sign In*/}
      {/*                        </a>*/}
      {/*                    </li>*/}
      {/*                    <li className="relative">*/}
      {/*                        <a*/}
      {/*                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                            href="/en/signup"*/}
      {/*                        >*/}
      {/*                            Sign Up*/}
      {/*                        </a>*/}
      {/*                    </li>*/}
      {/*                </ul>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/faq"*/}
      {/*                >*/}
      {/*                    FAQ*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/contact-us"*/}
      {/*                >*/}
      {/*                    Contact Us*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/privacy"*/}
      {/*                >*/}
      {/*                    Privacy Policy*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/terms"*/}
      {/*                >*/}
      {/*                    Terms &amp; Condition*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/checkout"*/}
      {/*                >*/}
      {/*                    Checkout*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/404"*/}
      {/*                >*/}
      {/*                    Page 404*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*        </ul>*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">*/}
      {/*    <a*/}
      {/*        className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"*/}
      {/*        href="/en/blog/blog-category-grid"*/}
      {/*    >*/}
      {/*        Blog*/}
      {/*        <span className="text-xs w-4 flex justify-end  opacity-80 group-hover:text-brand">*/}
      {/*        <svg*/}
      {/*            stroke="currentColor"*/}
      {/*            fill="currentColor"*/}
      {/*            strokeWidth={0}*/}
      {/*            viewBox="0 0 16 16"*/}
      {/*            className="transition duration-300 ease-in-out transform"*/}
      {/*            height="1em"*/}
      {/*            width="1em"*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*              fillRule="evenodd"*/}
      {/*              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </span>*/}
      {/*    </a>*/}
      {/*    <div*/}
      {/*        className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">*/}
      {/*        <ul className="py-5 text-sm text-brand-muted">*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/blog/blog-category-grid"*/}
      {/*                >*/}
      {/*                    Blog Category Grid*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/blog/blog-category-list"*/}
      {/*                >*/}
      {/*                    Blog Category List*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/blog/blog-category-big"*/}
      {/*                >*/}
      {/*                    Blog Category Big*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/blog"*/}
      {/*                >*/}
      {/*                    Blog Category Wide*/}
      {/*                </a>*/}
      {/*            </li>*/}
      {/*            <li className="relative">*/}
      {/*                <a*/}
      {/*                    className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                    href="/en/blog/blog-category-wide"*/}
      {/*                >*/}
      {/*                    Single Post*/}
      {/*                    <span className="text-sm mt-0.5 shrink-0">*/}
      {/*              <svg*/}
      {/*                  stroke="currentColor"*/}
      {/*                  fill="currentColor"*/}
      {/*                  strokeWidth={0}*/}
      {/*                  viewBox="0 0 512 512"*/}
      {/*                  className="text-body transition duration-300 ease-in-out group-hover:text-skin-base"*/}
      {/*                  height="1em"*/}
      {/*                  width="1em"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*              >*/}
      {/*                <path*/}
      {/*                    d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>*/}
      {/*              </svg>*/}
      {/*            </span>*/}
      {/*                </a>*/}
      {/*                <ul className="absolute z-0 invisible w-56 py-3 transition-all duration-300 opacity-0 subMenuChild shadow-subMenu bg-brand-light ltr:right-full rtl:left-full 2xl:ltr:right-auto 2xl:rtl:left-auto 2xl:ltr:left-full 2xl:rtl:right-full top-4">*/}
      {/*                    <li className="relative">*/}
      {/*                        <a*/}
      {/*                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                            href="/en/blog/blog-post-left"*/}
      {/*                        >*/}
      {/*                            Left Sidebar*/}
      {/*                        </a>*/}
      {/*                    </li>*/}
      {/*                    <li className="relative">*/}
      {/*                        <a*/}
      {/*                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                            href="/en/blog/blog-post-right"*/}
      {/*                        >*/}
      {/*                            Right Sidebar*/}
      {/*                        </a>*/}
      {/*                    </li>*/}
      {/*                    <li className="relative">*/}
      {/*                        <a*/}
      {/*                            className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand"*/}
      {/*                            href="/en/blog/the-litigants-on-the-screen-are-not-actors"*/}
      {/*                        >*/}
      {/*                            No Sidebar*/}
      {/*                        </a>*/}
      {/*                    </li>*/}
      {/*                </ul>*/}
      {/*            </li>*/}
      {/*        </ul>*/}
      {/*    </div>*/}
      {/*</div>*/}
      <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
        <Link
          className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
          href="/"
        >
          Home
        </Link>
      </div>
      <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
        <Link
          className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
          href="/products"
        >
          Products
        </Link>
      </div>
      <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
        <Link
          className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
          href="#"
        >
          About Us
        </Link>
      </div>
      <div className="menuItem group py-3 mx-4 xl:mx-4 2xl:mx-5 relative">
        <Link
          className="text-brand-dark inline-flex items-center text-sm  py-1 font-semibold relative  group-hover:text-brand"
          href="#"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default HeaderMenu;
