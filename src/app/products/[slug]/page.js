import { fetchProduct, fetchProducts } from '../../../services/api';

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
    <div className='mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export const revalidate = 3000000000; // Revalidate data every 5 minutes
