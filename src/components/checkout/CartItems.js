'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { closeDrawerCart } from "@/slice/drawerSlice";
import OrderNow from "@/components/checkout/OrderNow";

function CartItems() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // State for client-side calculations
    const [subtotal, setSubtotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [taxTotal, setTaxTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [isMounted, setIsMounted] = useState(false); // To prevent SSR mismatch

    const resetAllCal = ()=>{
        setTotal(0)
        setShippingCost(0)
        setSubtotal(0)
        setTaxTotal(0)
    }

    // Dispatch closeDrawerCart on component mount
    useEffect(() => {
        dispatch(closeDrawerCart(true));
    }, [dispatch]);

    // Perform subtotal and total calculations only after the component is mounted
    useEffect(() => {
        setIsMounted(true); // Set mounted flag to true to prevent SSR mismatch
        if (cartItems.length > 0) {
            const calculatedSubtotal = cartItems.reduce((acc, product) => acc + (product.price*product.quantity || 0), 0);
            setSubtotal(calculatedSubtotal);
            setShippingCost(0)
            const taxCal = ((calculatedSubtotal+shippingCost)*5)/100;
            setTaxTotal(taxCal)
            setTotal(calculatedSubtotal+shippingCost+taxCal); // Assuming shipping cost is 0, otherwise you can adjust
        }
    }, [cartItems]);

    // Prevent rendering dynamic values during SSR to avoid mismatch
    if (!isMounted) {
        return null; // Return nothing or a loading state until the component is mounted
    }

    return (
      <div className="w-full mt-7 lg:mt-0 col-start-8 col-end-13">
        <div className="bg-white px-4 pt-4 border rounded-md border-border-base text-brand-light xl:py-6 xl:px-7">
          {/* Header */}
          <div className="flex pb-2 text-sm font-semibold rounded-md text-heading">
            <span className="font-medium text-15px text-brand-dark">
              Product
            </span>
            <span className="font-bold ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
              Subtotal
            </span>
          </div>

          {/* Cart Products */}
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div
                key={product.id}
                className="flex items-center py-4 border-b border-border-base"
              >
                <div className="flex w-16 h-16 border rounded-md border-border-base shrink-0">
                  <Image
                    alt={product.name || "Product name"}
                    src={
                      product.imageUrl || "/assets/images/products/p-3-1.jpg"
                    }
                    width={64}
                    height={64}
                    className="object-cover rounded-md"
                  />
                </div>
                <h6 className="font-normal text-15px text-brand-dark ltr:pl-3 rtl:pr-3">
                  {product? product.name : ""} X {product.quantity}
                </h6>
                <div className="flex ltr:ml-auto rtl:mr-auto text-15px text-brand-dark shrink-0 font-bold">
                  ${(Number(product.price || 0) * Number(product.quantity)).toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-sm text-gray-500">
              No items in the cart.
            </p>
          )}

          {/* Subtotal */}
          <div className="flex items-center w-full py-4 text-sm font-bold border-b lg:py-5 border-border-base text-15px text-brand-dark">
            Subtotal
            <span className="font-bold ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
                ${Number(subtotal || 0).toFixed(2)}

            </span>
          </div>

          {/* Shipping */}
          <div className="flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px text-brand-dark">
            Shipping
            <span className="font-normal ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
             ${Number(shippingCost).toFixed(2)}
            </span>
          </div>
            <div className="flex items-center w-full py-4 text-sm font-medium border-b lg:py-5 border-border-base text-15px text-brand-dark">
            Tax
            <span className="font-normal ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
             ${Number(taxTotal).toFixed(2)}
            </span>
          </div>

          {/* Total */}
          <div className="flex items-center w-full py-4 border-b lg:py-5 border-border-base text-15px text-brand-dark font-bold text-2xl">
            Total
            <span className="ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark font-bold text-2xl">
               ${Number(total || 0).toFixed(2)}
            </span>
          </div>

          {/* Order Button */}
            <OrderNow cartItems={cartItems} resetAllCal={resetAllCal}/>

          {/* Terms and Conditions */}
          <p className="text-sm leading-7 lg:leading-[24px] mt-8 text-black">
            By placing your order, you agree to be bound by the Uminex{" "}
            <a className="font-medium underline text-brand" href="/en/terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="font-medium underline text-brand" href="/en/privacy">
              Privacy
            </a>
            . Your credit/debit card data will not be saved.
          </p>
        </div>
      </div>
    );
}

export default CartItems;
