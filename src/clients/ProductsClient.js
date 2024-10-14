'use client';
import React, { useState, useMemo } from 'react';
import ProductsGrid from '@/components/products/ProductsGrid';
import Filter from '@/components/products/Filter';

function ProductsClient({ products }) {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Extract unique categories
    const categories = useMemo(() => {
        return [...new Set(products.flatMap(product => product.categories.map(cat => cat.name)))];
    }, [products]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleClearFilters = () => {
        setSelectedCategory(null);  // Reset the selected category
    };

    // Update filtered products based on the selected category
    useMemo(() => {
        let updatedProducts = [...products];
        if (selectedCategory) {
            updatedProducts = updatedProducts.filter(product =>
                product.categories.some(cat => cat.name === selectedCategory)
            );
        }
        setFilteredProducts(updatedProducts);
    }, [selectedCategory, products]);

    return (
        <div className="flex pb-16 pt-7 lg:pt-11 lg:pb-20">
            <Filter
                categories={categories}
                onCategoryChange={handleCategoryChange}
                onClearFilters={handleClearFilters}  // Pass the clear filter function
            />
            <ProductsGrid products={filteredProducts} />
        </div>
    );
}

export default ProductsClient;
