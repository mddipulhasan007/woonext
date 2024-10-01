import React from 'react';

function AddtoCart(props) {
    return (
        <div className="product-cart-button">
            <button
                className="w-full min-w-[120px] px-4 py-2 bg-brand leading-6 text-brand-light rounded-full text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
                aria-label="Count Button"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default AddtoCart;