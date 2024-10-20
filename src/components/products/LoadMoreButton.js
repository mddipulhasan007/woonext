import React from 'react';

function LoadMoreButton({ onClick, isLoading }) {
    return (
        <div className="w-full mt-1.5 py-5 text-center bg-white rounded">
            <button
                data-variant="primary"
                onClick={onClick}
                disabled={isLoading}  // Disable button while loading
                className={`group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center justify-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 w-60 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isLoading ? (
                    <svg
                        className="animate-spin h-5 w-5 text-white mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                ) : (
                    "Load More"
                )}
            </button>
        </div>
    );
}

export default LoadMoreButton;
