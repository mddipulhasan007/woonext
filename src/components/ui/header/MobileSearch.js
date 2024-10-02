import React from 'react';

function MobileSearch(props) {
    return (
        <div
            className="w-full transition-all duration-200 ease-in-out top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-12 xl:top-1">
            <div
                className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed"/>
            <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
                <div className="flex flex-col w-full mx-auto">
                    <form
                        className="relative flex w-full rounded-md"
                        noValidate=""
                        role="search"
                    >
                        <label
                            htmlFor="mobile-search"
                            className="flex flex-1 items-center py-0.5"
                        >
                            <input
                                id="mobile-search"
                                className="text-heading outline-none w-full h-[45px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm rounded transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border-2 border-black/10"
                                placeholder="Search the store"
                                aria-label="mobile-search"
                                autoComplete="off"
                                name="search"
                                defaultValue=""
                            />
                        </label>
                        <span
                            className="absolute top-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none">
                <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5 text-brand-dark text-opacity-40"
                >
                  <path
                      d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                      fill="currentColor"
                  />
                </svg>
              </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MobileSearch;