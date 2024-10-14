import React from 'react';
import Link from "next/link";

function Breadcrumb({product}) {
    return (
        <div className="flex items-center ">
            <ol className="flex items-center w-full overflow-hidden">
                <li className="text-sm text-brand-muted px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-brand-dark">
                    <Link className="inline-flex " href="/">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            className="ltr:mr-1.5 rtl:ml-1.5 text-brand-dark text-15px"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                            />
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
                            />
                        </svg>
                        Home
                    </Link>
                </li>
                <li className="text-base text-brand-dark">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="text-brand-dark text-opacity-40 text-15px"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={48}
                            d="M184 112l144 144-144 144"
                        />
                    </svg>
                </li>
                <li className="text-sm text-brand-muted px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-brand-dark">
                    <Link className="capitalize" href="/products">
                        products
                    </Link>
                </li>
                <li className="text-base text-brand-dark">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="text-brand-dark text-opacity-40 text-15px"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={48}
                            d="M184 112l144 144-144 144"
                        />
                    </svg>
                </li>
                <li className="text-sm text-brand-muted px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-brand-dark">
                    <p
                        className="capitalize"
                    >
                        {product? product.name : ""}
                    </p>
                </li>
            </ol>
        </div>

    );
}

export default Breadcrumb;