import axios from 'axios';


//shaktidurga keys
// ck_2c5bb72312b8d136b861ff9a1f0a2aa6f2450392
// cs_b8626c273083afc26640ab0c40d7d2010423cf9c

//posadmin keys
// ck_35d084fdacad0783709df8bfd4e723c3a6506c02
// cs_d633a9ca4841f75710688eaf44247534811f18ec


// Axios instance for WC v3
const axiosInstance = axios.create({
  baseURL: 'https://posadmin.expertoftech.com/wp-json/wc/v3/',
  headers: { 'Content-Type': 'application/json' },
  auth: {
    username: 'ck_35d084fdacad0783709df8bfd4e723c3a6506c02',
    password: 'cs_d633a9ca4841f75710688eaf44247534811f18ec',
  },
  params: {
    per_page: 30, // Maximum number of products per page (100 is the max for WooCommerce)
    page: 1, // The page number
  },
});

// Axios instance for WC v1
const axiosInstanceV1 = axios.create({
  baseURL: 'https://posadmin.expertoftech.com/wp-json/wc/v1/',
  headers: { 'Content-Type': 'application/json' },
  auth: {
    username: 'ck_35d084fdacad0783709df8bfd4e723c3a6506c02',
    password: 'cs_d633a9ca4841f75710688eaf44247534811f18ec',
  },
  // params: {
  //   per_page: 30, // Maximum number of products per page (100 is the max for WooCommerce)
  //   page: 1, // The page number
  // },
});

export { axiosInstance, axiosInstanceV1 };
