import axiosInstance from './axios'; // Adjust the import path as necessary

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/products');
  console.log('fetch products');
  return response.data;
};

export const fetchProduct = async (slug) => {
  const response = await axiosInstance.get(`/products?slug=${slug}`);
  return response.data[0];
};
