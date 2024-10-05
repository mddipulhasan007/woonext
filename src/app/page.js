import { Suspense } from 'react';
import HomeClient from "@/clients/HomeClient";
import { fetchProducts } from "../services/api";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  // Import the navigation styles
import 'swiper/css/pagination';  // Import the pagination styles

export const metadata = {
    title: 'Home Page - Your Website Name',
    description: 'Welcome to the Home Page of Your Website Name. Find the best products here.',
};

const HomePage = async () => {
    // try {
    // const products = await fetchProducts();

    return (
        <main className="relative flex-grow pt-5 xl:pt-8">
            <HomeClient/>
        </main>

    );
    // } catch (error) {
    //   console.error("Failed to fetch products", error);
    //   return <div>Failed to load products. Please try again later.</div>;
    // }
};

export default HomePage;
