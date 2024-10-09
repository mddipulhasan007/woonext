import React from 'react';
import SearchResult from "@/components/ui/header/SearchResult";
import { useSearch } from '@/hooks/useSearch'; // Import the custom hook

function MobileSearch({ isVisible, toggleSearch }) {
    const { searchTerm, handleSearchInput, filteredProducts } = useSearch(); // Use the hook

    return (
        <div
            className="w-full transition-all duration-200 ease-in-out top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-12 xl:top-1"
        >
            <div
                onClick={toggleSearch}
                className={`overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed ${isVisible ? 'open' : ''}`}
            />
            {isVisible && (
                <div className="relative z-30 flex flex-col justify-center w-full shrink-0 lg:hidden">
                    <div className="flex flex-col w-full mx-auto">
                        <form className="relative flex w-full rounded-md" noValidate="" role="search">
                            <input
                                id="search"
                                className="text-heading outline-none w-full h-[45px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm rounded transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border-2 border-black/10"
                                placeholder="Search the store"
                                aria-label="search"
                                autoComplete="off"
                                name="search"
                                onChange={handleSearchInput} // Capture input
                            />
                        </form>
                    </div>

                    {/* Show the SearchResult component only if searchTerm exists and has filtered results */}
                    {searchTerm && (
                        <SearchResult searchResults={filteredProducts} />
                    )}
                </div>
            )}
        </div>
    );
}

export default MobileSearch;
