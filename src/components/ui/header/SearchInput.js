import React from 'react';
import SearchResult from "@/components/ui/header/SearchResult";
import { useSearch } from '@/hooks/useSearch'; // Import the custom hook

function SearchInput({ toggleSearch }) {
    const { searchTerm, handleSearchInput, filteredProducts } = useSearch(); // Use the hook

    return (
        <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
            <div className="flex flex-col w-full mx-auto">
                <form className="relative flex w-full rounded-md" noValidate="" role="search">
                    <label htmlFor="top-bar-search" className="flex flex-1 items-center py-0.5">
                        <input
                            onFocus={toggleSearch}
                            onChange={handleSearchInput} // Capture input
                            id="top-bar-search"
                            className="text-heading outline-none w-full h-[45px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm rounded transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border-2 border-black/10"
                            placeholder="Search the store"
                            aria-label="top-bar-search"
                            autoComplete="off"
                            name="search"
                            defaultValue=""
                        />
                    </label>
                </form>
            </div>

            {/* Show the SearchResult component only if searchTerm exists and has filtered results */}
            {searchTerm && (
                <SearchResult searchResults={filteredProducts} />
            )}
        </div>
    );
}

export default SearchInput;
