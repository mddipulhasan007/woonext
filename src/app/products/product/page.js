import React from 'react';
import ProductClient from "@/clients/ProductClient";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  // Import the navigation styles
import 'swiper/css/pagination';  // Import the pagination styles



export const metadata = {
    title: 'Product Page',
    description: 'Welcome to the Home Page of Your Website Name. Find the best products here.',
};

function Page(props) {
    return (
        <main className="relative flex-grow bg-gray-100">
            <ProductClient/>
        </main>
    );
}

export default Page;