import { fetchProduct, fetchProducts } from '@/services/api';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  // Import the navigation styles
import 'swiper/css/pagination';  // Import the pagination styles
import ProductClient from "@/clients/ProductClient";

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

  return (
      <main className="relative flex-grow bg-gray-100">
        <ProductClient product={product}/>
      </main>
  );
}

export const revalidate = 3000000000; // Revalidate data every 5 minutes
