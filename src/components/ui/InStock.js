import React from 'react';

function InStock(props) {
    return (
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
      <b>270</b> products
    </span>
            </p>
        </div>
    );
}

export default InStock;