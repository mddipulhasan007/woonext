'use client'
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/slice/cartSlice';
import Link from "next/link";
import Image from "next/image";


function CartItem({cartProducts}) {

    const dispatch = useDispatch();
    return (
        <div data-overlayscrollbars-initialize="" data-overlayscrollbars="host" >
            {/*<div className="os-size-observer os-size-observer-appear">*/}
            {/*    <div className="os-size-observer-listener ltr"/>*/}
            {/*</div>*/}
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
                    overflowY: "auto"
                }}
            >
                <div className="w-full px-5 md:px-7 h-[calc(100vh_-_300px)]">

                    {
                        cartProducts.map((item, index)=> (
                            <div
                                key={index}
                                className="group w-full h-auto flex justify-start  text-brand-light py-4 relative last:border-b-0"
                                title="[Sample] Able Brewing System consetetur"
                            >
                                <div
                                    className="relative flex rounded overflow-hidden shrink-0 cursor-pointer w-[45px] md:w-[50px] h-[45px] md:h-[50px] border border-border-base">
                                    <div
                                        className="relative inline-block overflow-hidden mx-auto box-sizing object-cover bg-fill-thumbnail">
                                        <div className="block w-full box-sizing">
                                            <svg
                                                className="block max-w-full h-auto"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={100}
                                                height={100}
                                                version="1.1"
                                            />
                                        </div>
                                        <Image
                                            alt={item.name || "Product name"}
                                            loading="lazy"
                                            width={0}
                                            height={0}
                                            decoding="async"
                                            data-nimg={1}
                                            className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                            sizes="100vw"
                                            src="/assets/images/products/p-3-1.jpg"
                                            style={{color: "transparent"}}
                                        />
                                    </div>
                                    <div
                                        className="absolute top-0 flex items-center justify-center w-full h-full transition duration-200 ease-in-out bg-black ltr:left-0 rtl:right-0 bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30"
                                        role="button"
                                        onClick={()=> dispatch(removeFromCart(item.id))}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 512 512"
                                            className="relative text-2xl text-white transition duration-300 ease-in-out transform md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between w-full overflow-hidden">
                                    <div className="ltr:pl-3 rtl:pr-3 md:ltr:pl-4 md:rtl:pr-4">
                                        <Link
                                            className="block leading-5 transition-all text-brand-dark text-13px sm:text-sm lg:text-15px hover:text-brand"
                                            href="/products/product"
                                        >
                                            {item.name} X {item.quantity}
                                        </Link>


                                        <div className="text-13px  text-gray-400 mt-1.5 block mb-2">
                                            <ul>
                                                {item.selectedAttributes && Object.values(item.selectedAttributes).map((attribute, index) => (
                                                    <ol key={index}>
                                                        {attribute.name}: {attribute.option}
                                                    </ol>
                                                ))}
                                            </ul>

                                        </div>
                                        <div
                                            className="button--mutiqty  flex items-center justify-between rounded overflow-hidden shrink-0  inline-flex">
                                            <button
                                                disabled={item.quantity <=1? "disabled": ""}
                                                onClick={()=>dispatch(updateQuantity({id: item.id, quantity: item.quantity-1}))}
                                                className="flex items-center justify-center shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none !w-6 !h-6 pr-0 border border-border-three hover:bg-brand text-brand-muted hover:border-brand rounded-full hover:text-brand-light">
                                                <span className="sr-only">button-minus</span>
                                                <svg
                                                    className="transition-all"
                                                    width={13}
                                                    height={13}
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
                                                className="font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-15px w-9">
                1
              </span>
                                            <button
                                                className="group flex items-center justify-center flex-shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none !w-6 !h-6 border text-brand-muted border-border-three hover:bg-brand hover:border-brand rounded-full hover:text-brand-light !pr-0"
                                                title=""
                                                onClick={()=>dispatch(updateQuantity({id: item.id, quantity: item.quantity+1}))}
                                            >
                                                <span className="sr-only">button-plus</span>
                                                <svg
                                                    width={13}
                                                    height={13}
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
                                    </div>
                                    <div
                                        className="flex font-semibold text-sm md:text-base text-brand-dark leading-5 shrink-0 min-w-[65px]  justify-end">
                                        {
                                            Number(item.price*item.quantity).toFixed(2)
                                        }$
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
            {/*<div*/}
            {/*    className="os-scrollbar os-scrollbar-horizontal os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-theme-dark">*/}
            {/*    <div className="os-scrollbar-track">*/}
            {/*        <div className="os-scrollbar-handle" style={{width: "100%"}}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-visible os-theme-dark">*/}
            {/*    <div className="os-scrollbar-track">*/}
            {/*        <div className="os-scrollbar-handle" style={{height: "94.805%"}}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
}

export default CartItem;





