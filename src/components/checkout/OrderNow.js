import React from 'react';
import {toast} from "react-toastify";
import {clearCart} from "@/slice/cartSlice";
import {useDispatch} from "react-redux";

function OrderNow({ cartItems, resetAllCal }) {
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully");
    dispatch(clearCart());
     resetAllCal()
  };
  return (
    <button
        disabled={cartItems.length>0? "" : "disabled"}
      onClick={handlePlaceOrder}
      className="w-full mt-8 mb-5 px-5 py-4 text-sm font-medium text-brand-light bg-brand rounded-md transition duration-300 ease-in-out hover:bg-opacity-90 focus:bg-opacity-70 disabled:bg-opacity-70"
    >
      Order Now
    </button>
  );
}

export default OrderNow;