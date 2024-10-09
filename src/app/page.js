import { Suspense } from 'react';
import HomeClient from "@/clients/HomeClient";
import { fetchProducts } from "@/services/api";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  // Import the navigation styles
import 'swiper/css/pagination';  // Import the pagination styles
import fs from 'fs';
import path from 'path';


export const metadata = {
    title: 'Home Page - Your Website Name',
    description: 'Welcome to the Home Page of Your Website Name. Find the best products here.',
};


const HomePage = async () => {

    try {
        // Resolve the path to the products.json file
        const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');

        // Read the file content synchronously
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Parse the file content to JSON
        const products = JSON.parse(fileContent);

    return (
        <main className="relative flex-grow pt-5 xl:pt-8">
            <HomeClient products={products}/>
        </main>

    );
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
};

export default HomePage;
