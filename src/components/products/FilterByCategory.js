import React from 'react';

function FilterByCategory({ categories = [], selectedCategory, onCategoryChange }) {
    return (
        <div className="block mb-10">
            <h3 className="text-fill-base text-sm font-semibold uppercase mb-3 block-title">
                Categories
            </h3>
            <div className="max-h-full overflow-hidden">
                <ul>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center transition text-sm border-t border-border-base first:border-t-0 pl-1"
                        >
                            <label className="flex items-center gap-2 py-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={() => onCategoryChange(category)}
                                    className="form-radio text-brand-dark focus:ring-brand"
                                />
                                <span className={`capitalize ${selectedCategory === category ? 'font-bold text-indigo-600' : 'text-brand-dark'}`}>
                                    {category}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FilterByCategory;
