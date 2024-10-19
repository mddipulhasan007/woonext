import { fetchProduct, fetchProducts } from '@/services/api';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  // Import the navigation styles
import 'swiper/css/pagination';  // Import the pagination styles
import ProductClient from "@/clients/ProductClient";
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map(product => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = await fetchProduct(slug);
  return {
    title: product.name,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = await fetchProduct(slug);


  // Resolve the path to the products.json file
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');

  // Read the file content synchronously
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse the file content to JSON
  const products = JSON.parse(fileContent);


  return (
      <main className="relative flex-grow bg-gray-100">
        <ProductClient product={product} products={products}/>
      </main>
  );
}

export const revalidate = 3000000000; // Revalidate data every 5 minutes
