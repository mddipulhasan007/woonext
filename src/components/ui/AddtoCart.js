import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "@/slice/cartSlice";
import {openDrawerCart} from "@/slice/drawerSlice";

function AddtoCart(props) {
    const dispatch = useDispatch();

    const product = {
        id: 1,
        name: "Sample product 1",
        price: 10
    }

    const handleAddToCart = () =>{
        dispatch(addToCart(product));
        dispatch(openDrawerCart());
    }


    return (
        <div className="product-cart-button">
            <button
                onClick={handleAddToCart}
                className="w-full min-w-[120px] px-4 py-2 bg-brand leading-6 text-brand-light rounded-full text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
                aria-label="Count Button"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default AddtoCart;