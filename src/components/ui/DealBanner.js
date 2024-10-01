import React from 'react';
import CountdownTimer from "@/components/ui/CountdownTimer";

function DealBanner() {
    return (
        <div className="md:flex justify-between mb-1.5 px-5 py-2.5 rounded bg-white">
            <div className="flex items-center gap-2">
                <svg width={18} height={21} viewBox="0 0 18 21" fill="none">
                    {/* SVG content for the hot deals icon */}
                    <path
                        d="..." // path details here
                        fill="#DD3842"
                    />
                </svg>
                <div className="flex gap-2 items-center uppercase text-[16px]">
                    <h3 className="text-fill-base text-[16px] lg:leading-7 font-bold text-red-600">
                        HOT DEALS!
                    </h3>
                    <p className="text-sm leading-7 lg:text-sm">GET OUR BEST PRICES</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <h2 className="text-skin-base text-[14px]">Hurry Up! Offer ends in:</h2>
                <CountdownTimer />
            </div>
        </div>
    );
}

export default DealBanner;
