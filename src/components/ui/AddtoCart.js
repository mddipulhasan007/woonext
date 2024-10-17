import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slice/cartSlice";
import { openDrawerCart } from "@/slice/drawerSlice";
import Link from "next/link";
import {toast} from "react-toastify";

function AddtoCart({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      quantity: 1
    }));
    dispatch(openDrawerCart());

  };

  return (
    <div className="product-cart-button">
      {product.type !== "variable" ? (
        <button
          onClick={handleAddToCart}
          className="w-full min-w-[120px] px-4 py-2 bg-brand leading-6 text-brand-light rounded-full text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
          aria-label="Count Button"
        >
          Add to Cart
        </button>
      ) : (
        <Link href={`/products/${product.slug}`}>
          <button
            className="w-full min-w-[120px] px-4 py-2 bg-brand leading-6 text-brand-light rounded-full text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
            aria-label="Count Button"
          >
            Product details
          </button>
        </Link>
      )}
    </div>
  );
}

export default AddtoCart;
