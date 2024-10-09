import fs from 'fs';
import path from 'path';
import axiosInstance from "../services/axios2.mjs";
// import axios from 'axios'; // Import axios
//
// // Axios instance configuration
// const axiosInstance = axios.create({
//     baseURL: 'https://posadmin.expertoftech.com/wp-json/wc/v3/',
//     headers: { 'Content-Type': 'application/json' },
//     auth: {
//         username: 'ck_35d084fdacad0783709df8bfd4e723c3a6506c02',
//         password: 'cs_d633a9ca4841f75710688eaf44247534811f18ec',
//     },
// });

// Fetch all products
const fetchProducts = async () => {
    try {
        const response = await axiosInstance.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Generate products JSON file at build time
async function generateProductsJSON() {
    try {
        const products = await fetchProducts();

        // Write the fetched products to a JSON file in the public directory
        const filePath = path.join(process.cwd(), 'public/data', 'products.json');
        fs.writeFileSync(filePath, JSON.stringify(products));

        console.log('Products JSON file generated successfully!');
    } catch (error) {
        console.error('Error generating products JSON:', error);
    }
}

// Execute the function to generate the JSON file
generateProductsJSON();

export { fetchProducts };
