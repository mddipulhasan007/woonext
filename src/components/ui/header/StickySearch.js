import React from 'react';
import SearchResult from "@/components/ui/header/SearchResult";

function StickySearch({isVisible, toggleStickySearch}) {
    return (

            isVisible === true? (
            <div className="sticky-search w-full absolute top-0 left-0 px-4 flex items-center justify-center h-full">
                <div
                    className="w-full transition-all duration-200 ease-in-out max-w-[780px] xl:max-w-[830px] 2xl:max-w-[1000px]">
                    <div
                        onClick={toggleStickySearch}
                        className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed open-search-overlay"/>
                    <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
                        <div className="flex flex-col w-full mx-auto">
                            <form
                                className="relative flex w-full rounded-md"
                                noValidate=""
                                role="search"
                            >
                                <label htmlFor="search" className="flex flex-1 items-center py-0.5">
                                    <input
                                        id="search"
                                        className="text-heading outline-none w-full h-[45px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm rounded transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border-2 border-black/10"
                                        placeholder="Search the store"
                                        aria-label="search"
                                        autoComplete="off"
                                        defaultValue=""
                                        name="search"
                                    />
                                </label>
                                <span
                                    className="absolute top-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none">
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
                        <SearchResult/>
                    </div>
                </div>
            </div>
        ): ""


    );
}

export default StickySearch;