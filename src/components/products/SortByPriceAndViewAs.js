'use client';

import React, { useState } from 'react';
import MobileFilterButton from "@/components/products/MobileFilterButton";

function SortByPriceAndViewAs({ onSortChange }) {
    const [selectedOption, setSelectedOption] = useState(''); // Default to an empty string to show "Select Sort Option"

    const handleSortOptionChange = (option) => {
        setSelectedOption(option); // Update the selected sorting option
        onSortChange(option); // Call parent handler to trigger sorting or unsorting
    };

    return (
        <div className="w-full sm:flex items-center justify-between mb-4 bg-white shadow-md rounded-lg p-2">
            {/*<MobileFilterButton />*/}
            <div className="flex items-center justify-start sm:justify-end w-full lg:justify-between mt-2 sm:mt-0">
                <h2 className="font-semibold text-lg text-gray-800 hidden sm:block">All Products</h2>
                <div className="relative ml-4 w-full max-w-xs">
                    {/* Sorting dropdown */}
                    <select
                        value={selectedOption}
                        onChange={(e) => handleSortOptionChange(e.target.value)}
                        className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Sort Option</option>
                        <option value="lowest">Lowest Price</option>
                        <option value="highest">Highest Price</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SortByPriceAndViewAs;
