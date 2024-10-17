import {axiosInstance, axiosInstanceV1} from './axios.js'; // Adjust the import path as necessary

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/products');
  console.log('fetching products');
  return response.data;
};

export const fetchProduct = async (slug) => {
  const response = await axiosInstanceV1.get(`/products?slug=${slug}`);
  return response.data[0];
};
