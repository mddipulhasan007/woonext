import React from "react";
import CartItems from "@/components/checkout/CartItems";
import CheckoutFields from "@/components/checkout/CheckoutFields";


function Page(props) {

  return (
    <main className="relative flex-grow bg-gray-100">
      <div className="py-10 2xl:py-12 checkout mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 grid-cols-1 flex-wrap gap-8">
            <CheckoutFields/>
            <CartItems/>
          </div>
        </div>
      </div>
      <div className="border-t border-border-base " />
    </main>
  );
}

export default Page;
