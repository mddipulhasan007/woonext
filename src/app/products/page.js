import React from 'react';
import fs from 'fs';
import path from 'path';
import ProductsClient from "@/clients/ProductsClient";

function Page(props) {

    // Resolve the path to the products.json file
    const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');

// Read the file content synchronously
    const fileContent = fs.readFileSync(filePath, 'utf8');

// Parse the file content to JSON
    const products = JSON.parse(fileContent);


    return (
        <main
            className="relative flex-grow bg-gray-100"
            style={{WebkitOverflowScrolling: "touch"}}
        >
            <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">

                    <ProductsClient products={products}/>


            </div>

        </main>

    );
}

export default Page;