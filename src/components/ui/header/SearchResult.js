import React from 'react';
import Image from 'next/image';
import Link from "next/link";

function SearchResult({ searchResults }) {
    return (
        <div className="w-full absolute top-[56px] ltr:left-0 rtl:right-0 bg-brand-light rounded-md flex flex-col overflow-hidden shadow-dropDown z-30">
            <div data-overlayscrollbars-initialize="" data-overlayscrollbars="host">
                <div className="w-full max-h-[380px]">
                    {searchResults && searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                            <div key={index} className="py-2.5 ps-5 pe-10 border-b border-black/5 scroll-snap-align-start transition-colors duration-200 hover:bg-fill-four">
                                <Link className="flex items-center justify-start w-full h-auto group" href="#">
                                    <div className="relative flex w-20 rounded-md overflow-hidden flex-shrink-0 cursor-pointer me-4">
                                        <Image
                                            alt={result.name || "Product name"}
                                            loading="lazy"
                                            width={70}
                                            height={70}
                                            className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                            src={'/assets/images/products/16.jpg'} // Adjust as necessary
                                        />
                                    </div>
                                    <div className="flex flex-col w-full overflow-hidden">
                                        <h3 className="truncate text-skin-base text-15px mb-1.5">{result.name}</h3>
                                        <div className="space-x-2">
                      <span className="inline-block font-semibold text-sm sm:text-15px lg:text-base text-skin-primary">
                        ${result.price}
                      </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="p-4">No results found</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
