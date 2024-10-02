import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import StickySearch from '@/components/ui/header/StickySearch';
import HeaderMenu from "@/components/ui/header/HeaderMenu";
import StickyHeaderIcons from "@/components/ui/header/StickyHeaderIcons";
import SearchInput from "@/components/ui/header/SearchInput";
import CategoryHeader from "@/components/ui/header/CategoryHeader";

function MainMenu({isScrolling, isVisible, toggleStickySearch, stickySearchRef,categoryToggleDropdown, isCategoryDropdownVisible}) {


    return (
        <div id="mainMenu" className="hidden navbar lg:block bg-white border-b border-black/10">
            <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                <div className="flex justify-between items-center">
                    <a
                        lang="en"
                        className="inline-flex focus:outline-none navbar-logo w-0 opacity-0 transition-all duration-200 ease-in-out"
                        href="/en"
                    >
                        <Image
                            alt="Razazoror"
                            loading="eager"
                            width={142}
                            height={44}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: 'transparent' }}
                            src="/logo.cfe79157.svg"
                        />
                    </a>

                    <CategoryHeader categoryToggleDropdown={categoryToggleDropdown} isCategoryDropdownVisible={isCategoryDropdownVisible}/>
                    <HeaderMenu/>

                    <div ref={stickySearchRef}>
                        <StickySearch isVisible={isVisible} toggleStickySearch={toggleStickySearch}/>
                    </div>
                    {
                        isScrolling ? <StickyHeaderIcons toggleStickySearch={toggleStickySearch}/> : ""
                    }

                </div>
            </div>
        </div>
    );
}

export default MainMenu;






