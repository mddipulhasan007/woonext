import React from 'react';

function TopBar(props) {
    return (
        <div className="top-bar  text-sm text-fill-base border-b border-black/10">
            <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">
                <div className="h-11 flex justify-between items-center">
                    <text className="hidden md:block truncate">
                        Stote Location: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                    </text>
                    <div className="flex flex-shrink-0 smx-auto pace-s-5">
                        <nav className=" flex relative  flex transition-all duration-200 ease-in-out">
                            <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                                <a
                                    className="text-fill-base inline-flex items-center py-2 font-normal relative group-hover:text-brand "
                                    href="/en/my-account/wishlist"
                                >
                                    Wishlist
                                </a>
                            </div>
                            <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                                <a
                                    className="text-fill-base inline-flex items-center py-2 font-normal relative group-hover:text-brand "
                                    href="/en/checkout"
                                >
                                    Checkout
                                </a>
                            </div>
                            <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                                <a
                                    className="text-fill-base inline-flex items-center py-2 font-normal relative group-hover:text-brand "
                                    href="/en"
                                >
                                    Gift Certificates
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;