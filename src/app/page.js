'use client';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/api';
import Link from 'next/link';



const HomePage = () => {
  const { data: products, error, isLoading } = useQuery('products', fetchProducts);

  return (
    <div className='mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0'>
<div className="w-full lg:ltr:pl-10 lg:rtl:pr-10">
  <div className="">
    <div className="flex items-center justify-between pb-0.5 mb-4 lg:mb-5 xl:mb-6">
      <div className=" mb-0">
        <h3 className="text-fill-base text-[16px] lg:leading-7 font-bold">
          <div>All Products</div>
        </h3>
      </div>
      <div
        className="lg:hidden transition-all text-brand -mt-1.5 font-semibold text-sm md:text-15px hover:text-brand-dark"
        role="button"
      >
        Categories
      </div>
    </div>
    <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
    {isLoading? "Loading...": ""}
    {
      products?.map((product, index)=>(
        <article
        key={index}
        className="flex flex-col gap-2 product-card relative p-2 sm:p-4  h-full  bg-white card-image--jump  rounded"
        title="[Sample] Able Brewing System  consetetur sadipscing elitr"
      >
        <div className="relative flex-shrink-0 ">
          <div className="relative card-img-container overflow-hidden flex item-center w-full">
            <div className="relative inline-block overflow-hidden mx-auto box-sizing">
              <div className="block w-full box-sizing">
                <svg
                  className="block max-w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width={180}
                  height={180}
                  version="1.1"
                />
              </div>
              <img
                alt="[Sample] Able Brewing System  consetetur sadipscing elitr"
                loading="lazy"
                width={0}
                height={0}
                decoding="async"
                data-nimg={1}
                className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                sizes="100vw"
                src="/img/banner-menu.webp"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div className="w-full h-full absolute top-0  z-10">
            <button
              className="buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:bg-brand hover:text-brand-light"
              aria-label="Quick View Button"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                opacity={1}
              >
                <path
                  d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col h-full overflow-hidden relative product-cart-content">
          <div className="text-sm mt-auto leading-6 text-gray-400 mb-1.5 hidden">
            Common Good
          </div>
          <Link
            className="text-skin-base font-semibold text-sm leading-5 min-h-[40px] line-clamp-2 mt-1 mb-2 hover:text-brand"
            href={`products/${product.slug}`}
          >
            {product.name}
          </Link>
          <div className="flex text-gray-500 space-x-2">
            <div className="flex items-center">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3 h-3 mx-px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z"
                    fill="#F3B81F"
                  />
                </g>
              </svg>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3 h-3 mx-px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z"
                    fill="#F3B81F"
                  />
                </g>
              </svg>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3 h-3 mx-px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z"
                    fill="#F3B81F"
                  />
                </g>
              </svg>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3 h-3 mx-px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z"
                    fill="#F3B81F"
                  />
                </g>
              </svg>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3 h-3 mx-px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z"
                    fill="#F3B81F"
                  />
                </g>
              </svg>
            </div>
            <span className="text-[13px] leading-4">(1 review)</span>
          </div>
          <div className="space-s-2">
            <span className="inline-block font-semibold text-[18px] text-brand">
              $2,000.00
            </span>
          </div>
          <div className="mt-3 ">
            <p className="font-medium flex items-center space-x-1 text-[12px] text-skin-label_in in_stock">
              <svg
                height="1em"
                viewBox="0 0 448 512"
                fill="text-skin-label_in"
                opacity={1}
              >
                <path
                  fill="currentColor"
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </svg>
              <span> In Stock </span>
              <span className="text-brand-dark">
                <b>70</b> products
              </span>
            </p>
          </div>
          <div className="block product-cart-button font-semibold">
            <button
              className="w-full min-w-[120px] px-4 py-2 bg-brand leading-6 text-brand-light rounded-full text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
              aria-label="Count Button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
      ))
    }


    </div>
  </div>
</div>

    </div>
  );
};

export default HomePage;
