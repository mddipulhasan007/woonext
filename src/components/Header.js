"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileSearch from '@/components/ui/header/MobileSearch';
import TopBar from '@/components/ui/header/TopBar';
import MiddleMenu from '@/components/ui/header/MiddleMenu';
import MainMenu from '@/components/ui/header/MainMenu';

export default function Header() {
    const [isScrolling, setIsScrolling] = useState(false);
    const mainMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mainMenuRef.current) {
                const mainMenuOffset = mainMenuRef.current.offsetTop;

                // Add or remove the 'is-scrolling' class based on the scroll position
                if (window.scrollY >= mainMenuOffset) {
                    if (!isScrolling) setIsScrolling(true);
                } else {
                    if (isScrolling) setIsScrolling(false);
                }
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);


    const [isStickySearchVisible, setIsStickySearchVisible] = useState(false);
    const stickySearchRef = useRef(null);

    // Toggle visibility when the button is clicked
    const toggleStickySearch = () => {
        setIsStickySearchVisible((prev) => !prev);
    };

    //middle menu search overlay
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const SearchRef = useRef(null);

    // Toggle visibility when the button is clicked
    const toggleSearch = () => {
        setIsSearchVisible((prev) => !prev);
    };


    // State to manage the visibility of the dropdown
    const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);

    // Toggle function to show/hide the dropdown
    const categoryToggleDropdown = () => {
        setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
    };


    return (
        <>
            <header
                id="siteHeader"
                className={`header-one sticky-header sticky top-0 z-50 lg:relative w-full ${
                    isScrolling ? 'is-scrolling' : ''
                }`}
            >
                <div className="innerSticky z-20 w-full transition duration-200 ease-in-out body-font bg-white">
                    <MobileSearch/>
                    <TopBar/>
                    <MiddleMenu isVisible={isSearchVisible} toggleSearch={toggleSearch} SearchRef={SearchRef}/>
                    <div ref={mainMenuRef}>
                    <MainMenu isScrolling={isScrolling} isVisible={isStickySearchVisible}
                                  toggleStickySearch={toggleStickySearch} stickySearchRef={stickySearchRef} categoryToggleDropdown={categoryToggleDropdown} isCategoryDropdownVisible={isCategoryDropdownVisible}/>
                    </div>
                </div>
            </header>
            {
                isCategoryDropdownVisible && (
                    <div className="shadow_bkg_show fixed w-full h-full inset-0 bg-black/60 z-40"></div>
                )
            }

        </>

    );
}
