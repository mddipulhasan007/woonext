import { useState, useEffect } from 'react';

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Load products from the JSON file on component mount
    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('/data/products.json'); // Assuming the JSON is saved in public/products.json
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    // Filter products based on searchTerm
    useEffect(() => {
        if (searchTerm) {
            const results = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]); // Clear results when there's no search term
        }
    }, [searchTerm, products]);

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value);
    };

    return { searchTerm, handleSearchInput, filteredProducts };
};
