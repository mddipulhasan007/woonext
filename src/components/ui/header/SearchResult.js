import React from 'react';
import Image from 'next/image';

function SearchResult(props) {

   const searchResult = [];



    return (
        <div
            className="w-full absolute top-[56px] ltr:left-0 rtl:right-0 bg-brand-light rounded-md flex flex-col overflow-hidden shadow-dropDown z-30">
            <div data-overlayscrollbars-initialize="" data-overlayscrollbars="host">
                <div className="os-size-observer os-size-observer-appear">
                    <div className="os-size-observer-listener ltr"/>
                </div>
                <div
                    data-overlayscrollbars-contents="true"
                    data-overlayscrollbars-viewport="scrollbarHidden"
                    style={{
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                        top: 0,
                        right: "auto",
                        left: 0,
                        width: "calc(100% + 0px)",
                        padding: 0,
                        overflowY: "scroll"
                    }}
                >
                    <div className="w-full max-h-[380px]">

                        {
                            searchResult.length>0 && searchResult.map((result, index)=> (
                                <div key={index} className="py-2.5 ps-5 pe-10 border-b border-black/5 scroll-snap-align-start transition-colors duration-200 hover:bg-fill-four">
                                    <a
                                        className="flex items-center justify-start w-full h-auto group"
                                        href="#"
                                    >
                                        <div
                                            className="relative flex w-20 rounded-md overflow-hidden flex-shrink-0 cursor-pointer me-4">
                                            <div
                                                className="relative inline-block overflow-hidden mx-auto box-sizing object-cover bg-fill-thumbnail">
                                                <div className="block w-full box-sizing">
                                                    <svg
                                                        className="block max-w-full h-auto"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={70}
                                                        height={70}
                                                        version="1.1"
                                                    />
                                                </div>
                                                <Image
                                                    alt="[Sample] Able Brewing System consetetur"
                                                    loading="lazy"
                                                    width={3840}
                                                    height={2160}
                                                    className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                                                    src="/assets/images/products/p-1.jpg"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full overflow-hidden">
                                            <h3 className="truncate text-skin-base text-15px  mb-1.5">
                                                [Sample] Able Brewing System consetetur
                                            </h3>
                                            <div className="space-x-2 ">
                                        <span
                                            className="inline-block font-semibold text-sm sm:text-15px lg:text-base text-skin-primary">
                                            $2,000.00
                                        </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div
                    className="os-scrollbar os-scrollbar-horizontal os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-theme-dark">
                    <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle" style={{width: "100%"}}/>
                    </div>
                </div>
                <div
                    className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-visible os-scrollbar-cornerless os-theme-dark">
                    <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle" style={{height: "46.398%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
