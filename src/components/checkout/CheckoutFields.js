import React from 'react';
import AddressForm from "@/components/checkout/AddressForm";

function CheckoutFields(props) {
    return (
        <div className="w-full col-start-1 col-end-8">
            <div className="border rounded-md border-border-base text-brand-light">
                <div className="accordion__panel border-b border-border-base expanded">
                    <div id="index_0" className="flex items-center p-4 pb-6 cursor-pointer sm:p-8 accordion__button w-full">
                        <AddressForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutFields;