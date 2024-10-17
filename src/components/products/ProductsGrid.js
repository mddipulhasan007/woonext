import React, { useState, useEffect } from 'react';
import SortByPriceAndViewAs from '@/components/products/SortByPriceAndViewAs';
import LoadMoreButton from '@/components/products/LoadMoreButton';
import ProductCard from "@/components/ui/ProductCard";

function ProductsGrid({ products }) {
    const [sortedProducts, setSortedProducts] = useState(products); // Sorted products
    const [visibleCount, setVisibleCount] = useState(10); // Show initial 6 products
    const [sortOption, setSortOption] = useState(''); // Track selected sort option

    // Handle sort change
    const handleSortChange = (option) => {
        setSortOption(option); // Update selected sorting option
    };

    // Sorting logic
    useEffect(() => {
        let updatedProducts = [...products];

        // Sort by price if selected
        if (sortOption === 'lowest') {
            updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortOption === 'highest') {
            updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        setSortedProducts(updatedProducts);
    }, [sortOption, products]);

    // Load more products
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 10); // Load 6 more products
    };

    return (
      <>

        <div className="w-full lg:ltr:-ml-4 lg:rtl:-mr-2 xl:ltr:-ml-8 xl:rtl:-mr-8 lg:-mt-1">
          {/* Sorting and view options */}
          <SortByPriceAndViewAs onSortChange={handleSortChange} />

          {/* Product grid, show only the visible products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1.5">
            {sortedProducts.slice(0, visibleCount).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load more button, visible only if there are more products to show */}
          {visibleCount < sortedProducts.length && (
            <LoadMoreButton onClick={handleLoadMore} />
          )}
        </div>
      </>
    );
}

export default ProductsGrid;
