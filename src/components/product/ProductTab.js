import React, { useState } from 'react';

function ProductTab({product}) {
    const [activeTab, setActiveTab] = useState('details'); // Track the active tab

    return (
        <div className="w-full p-5 bg-white rounded mb-8 lg:mb-12">
            {/* Tab Buttons */}
            <div
                className="block border-b border-border-base"
                role="tablist"
                aria-orientation="horizontal"
            >
                {/* Product Details Tab Button */}
                <button
                    className={`relative inline-block transition-all text-14px font-bold uppercase leading-5 focus:outline-none pb-4 hover:text-brand ltr:mr-8 rtl:ml-8 ${
                        activeTab === 'details'
                            ? 'text-brand-dark after:absolute after:w-full after:h-0.5 after:bottom-0 after:translate-y-[1px] after:ltr:left-0 after:rtl:right-0 after:bg-brand'
                            : 'text-gray-400'
                    }`}
                    id="details-tab"
                    role="tab"
                    type="button"
                    aria-selected={activeTab === 'details'}
                    tabIndex={activeTab === 'details' ? 0 : -1}
                    aria-controls="details-panel"
                    onClick={() => setActiveTab('details')}
                >
                    Product Details
                </button>

                {/* Review Rating Tab Button */}
                <button
                    className={`relative inline-block transition-all text-14px font-bold uppercase leading-5 focus:outline-none pb-4 hover:text-brand ltr:mr-8 rtl:ml-8 ${
                        activeTab === 'review'
                            ? 'text-brand-dark after:absolute after:w-full after:h-0.5 after:bottom-0 after:translate-y-[1px] after:ltr:left-0 after:rtl:right-0 after:bg-brand'
                            : 'text-gray-400'
                    }`}
                    id="review-tab"
                    role="tab"
                    type="button"
                    aria-selected={activeTab === 'review'}
                    tabIndex={activeTab === 'review' ? 0 : -1}
                    aria-controls="review-panel"
                    onClick={() => setActiveTab('review')}
                >
                    Review Rating
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 lg:mt-9">
                {/* Product Details Panel */}
                {activeTab === 'details' && (
                    <div
                        className="lg:flex"
                        id="details-panel"
                        role="tabpanel"
                        tabIndex={0}
                        aria-labelledby="details-tab"
                    >
                        <div className="text-sm sm:text-15px text-brand-muted leading-[2em] space-y-4 lg:space-y-5 xl:space-y-7">
                            {
                                product.description? product.description: (
                                    <>
                                        <p>
                                            Go sporty this summer with this vintage navy and white striped
                                            v-neck t-shirt from the Abercrombie &amp; Fitch. Perfect for pairing
                                            with denim and white kicks for a stylish sporty vibe. Will fit a UK
                                            8-10, model shown is a UK 8 and 5’5. !!
                                        </p>
                                        <p>
                                            Typography is the work of typesetters, compositors, typographers,
                                            graphic designers, art directors, manga artists, comic book artists,
                                            graffiti artists, and now—anyone who arranges words, letters,
                                            numbers, and symbols for publication, display, or distribution—from
                                            clerical workers and newsletter writers to anyone self-publishing
                                            materials.
                                        </p>
                                        <p>
                                            Hit your next boxing workout with a combination it’s never seen
                                            before in the Combat Drop Arm Tank, including a freedom-instilling
                                            regular fit and dropped armhole to allow you to throw jabs and hooks
                                            at the punching bag with ease. A lightweight material keeps you
                                            fighting fit, and fresh.
                                        </p>
                                        <p>
                                            Go sporty this summer with this vintage navy and white striped
                                            v-neck t-shirt from the Abercrombie &amp; Fitch. Perfect for pairing
                                            with denim and white kicks for a stylish sporty vibe. Will fit a UK
                                            8-10, model shown is a UK 8 and 5’5. !!
                                        </p>
                                    </>
                                )
                            }

                        </div>
                    </div>
                )}

                {/* Review Rating Panel */}
                {activeTab === 'review' && (
                    <div
                        id="review-panel"
                        role="tabpanel"
                        tabIndex={0}
                        aria-labelledby="review-tab"
                    >
                        <p className="text-sm sm:text-15px text-brand-muted leading-[2em]">
                            Reviews and ratings will go here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductTab;
