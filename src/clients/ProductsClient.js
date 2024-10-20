'use client';
import React, { useState, useEffect, useCallback } from 'react';
import ProductsGrid from '@/components/products/ProductsGrid';
import Filter from '@/components/products/Filter';
import LoadMoreButton from '@/components/products/LoadMoreButton';
import SortByPriceAndViewAs from '@/components/products/SortByPriceAndViewAs';
import { axiosInstance } from "@/services/axios";

function ProductsClient() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]); // Holds all products fetched
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState(''); // State for sorting option

    // Fetch products based on the current page
    const fetchProducts = useCallback(async (pageNum) => {
        setLoading(true);
        try {
            const response = await axiosInstance.get('/products', {
                params: {
                    per_page: 10,
                    page: pageNum,
                },
            });
            setAllProducts((prevProducts) => [...prevProducts, ...response.data]);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts(page);
    }, [page, fetchProducts]);

    // Extract unique categories
    const categories = React.useMemo(() => {
        return [...new Set(allProducts.flatMap(product => product.categories.map(cat => cat.name)))];
    }, [allProducts]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleClearFilters = () => {
        setSelectedCategory(null);
    };

    // Handle sorting option change
    const handleSortChange = (option) => {
        setSortOption(option);
    };

    // Filtered and sorted products based on the selected category and sort option
    const filteredProducts = React.useMemo(() => {
        let filtered = allProducts;

        if (selectedCategory) {
            filtered = filtered.filter((product) =>
                product.categories.some((cat) => cat.name === selectedCategory)
            );
        }

        if (sortOption === 'lowest') {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sortOption === 'highest') {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [selectedCategory, sortOption, allProducts]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        // When `allProducts` is updated, apply filters and sorting to set the displayed products
        setProducts(filteredProducts);
    }, [filteredProducts]);

    return (
        <div className="flex pb-16 pt-7 lg:pt-11 lg:pb-20">
            <Filter
                categories={categories}
                onCategoryChange={handleCategoryChange}
                onClearFilters={handleClearFilters}
            />
            <div className="flex flex-col items-center w-full">
                <SortByPriceAndViewAs onSortChange={handleSortChange} />
                <ProductsGrid products={products} loading={loading} />
                <LoadMoreButton onClick={handleLoadMore} isLoading={loading} />
            </div>
        </div>
    );
}

export default ProductsClient;
