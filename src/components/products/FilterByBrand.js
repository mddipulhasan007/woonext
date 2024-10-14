import React from 'react';

function FilterByBrand(props) {
    return (
        <div className="block">
            <h3 className="text-fill-base text-sm font-semibold uppercase mb-5 block-title">
                Brands
            </h3>
            <div className="flex flex-col">
                <label
                    className="group flex items-center flex-start gap-4 text-brand-dark text-sm cursor-pointer transition-all hover:text-brand py-2 last:border-b-0 last:pb-0 first:pt-0">
                    <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        defaultValue="common-good"
                        name="common good"
                    />
                    <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                  Common Good
                </span>
                </label>
                <label
                    className="group flex items-center flex-start gap-4 text-brand-dark text-sm cursor-pointer transition-all hover:text-brand py-2 last:border-b-0 last:pb-0 first:pt-0">
                    <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        defaultValue="sagaform"
                        name="sagaform"
                    />
                    <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">Sagaform</span>
                </label>
                <label
                    className="group flex items-center flex-start gap-4 text-brand-dark text-sm cursor-pointer transition-all hover:text-brand py-2 last:border-b-0 last:pb-0 first:pt-0">
                    <input
                        className="form-checkbox text-yellow-100 w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-yellow-100 focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-yellow-100 hover:checked:bg-yellow-100"
                        type="checkbox"
                        defaultValue="nunc-feugiat"
                        name="nunc feugiat"
                    />
                    <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">
                  Nunc feugiat
                </span>
                </label>
            </div>
        </div>
    );
}

export default FilterByBrand;