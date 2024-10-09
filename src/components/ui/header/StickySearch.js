import React from 'react';
import SearchResult from "@/components/ui/header/SearchResult";
import { useSearch } from '@/hooks/useSearch'; // Import the custom hook

function StickySearch({ isVisible, toggleStickySearch }) {
    const { searchTerm, handleSearchInput, filteredProducts } = useSearch(); // Use the hook

    return (
        isVisible ? (
            <div className="sticky-search w-full absolute top-0 left-0 px-4 flex items-center justify-center h-full">
                <div className="w-full transition-all duration-200 ease-in-out max-w-[780px] xl:max-w-[830px] 2xl:max-w-[1000px]">
                    <div
                        onClick={toggleStickySearch}
                        className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed open-search-overlay"
                    />
                    <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
                        <div className="flex flex-col w-full mx-auto">
                            <form className="relative flex w-full rounded-md" noValidate="" role="search">
                                <label htmlFor="search" className="flex flex-1 items-center py-0.5">
                                    <input
                                        id="search"
                                        className="text-heading outline-none w-full h-[45px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm rounded transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border-2 border-black/10"
                                        placeholder="Search the store"
                                        aria-label="search"
                                        autoComplete="off"
                                        name="search"
                                        onChange={handleSearchInput} // Capture input
                                    />
                                </label>
                            </form>
                        </div>

                        {/* Show the SearchResult component only if searchTerm exists and has filtered results */}
                        {searchTerm && (
                            <SearchResult searchResults={filteredProducts} />
                        )}
                    </div>
                </div>
            </div>
        ) : null
    );
}

export default StickySearch;
