'use client';

import React from 'react';
import FilterByCategory from '@/components/products/FilterByCategory';

function Filter({ categories, selectedCategory, onCategoryChange, onClearFilters }) {
    return (
        <div className="sticky hidden h-full shrink-0 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 lg:block w-80 xl:w-96 top-16">
            <div className="bg-white p-5 rounded shadow-lg">
                <div className="block mb-10">
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-fill-base text-md font-semibold uppercase block-title">Filters</h3>
                        <button
                            onClick={onClearFilters}
                            className="flex-shrink transition duration-150 ease-in text-13px focus:outline-none hover:text-brand-dark"
                            aria-label="Clear All"
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Pass selectedCategory and onCategoryChange to FilterByCategory */}
                    <FilterByCategory
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={onCategoryChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Filter;
