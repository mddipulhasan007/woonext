import { Suspense } from 'react';
import HomeClient from "@/clients/HomeClient";
import { fetchProducts } from "../services/api";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  // Import the navigation styles
import 'swiper/css/pagination';  // Import the pagination styles


const HomePage = async () => {
  // try {
  // //  console.log("Rendering HomePage - fetching products...");
  //   const products = await fetchProducts();

    return (
      // <Suspense fallback={<div>Loading...</div>}>
      //   <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
      //     <div className="w-full lg:ltr:pl-10 lg:rtl:pr-10">
      //       <div className="">
      //         <div className="flex items-center justify-between pb-0.5 mb-4 lg:mb-5 xl:mb-6">
      //           <div className="mb-0">
      //             <h3 className="text-fill-base text-[16px] lg:leading-7 font-bold">
      //               <div>All Products</div>
      //             </h3>
      //           </div>
      //           <div
      //             className="lg:hidden transition-all text-brand -mt-1.5 font-semibold text-sm md:text-15px hover:text-brand-dark"
      //             role="button"
      //           >
      //             Categories
      //           </div>
      //         </div>
              <HomeClient />
      //       </div>
      //     </div>
      //   </div>
      // </Suspense>
    );
  // } catch (error) {
  //   console.error("Failed to fetch products", error);
  //   return <div>Failed to load products. Please try again later.</div>;
  // }
};

export default HomePage;
