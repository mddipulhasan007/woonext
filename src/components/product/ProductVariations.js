import React, { useState, useEffect } from 'react';

function ProductVariations({ product, setSelectedVariation }) {
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [price, setPrice] = useState(null); // Initialize with base product price

    const handleAttributeChange = (attributeName, value) => {
        setSelectedAttributes({
            ...selectedAttributes,
            [attributeName]: value,
        });
    };

    useEffect(() => {
        if (Object.keys(selectedAttributes).length === product.attributes.length) {
            // Try to find a matching variation
            const matchedVariation = product.variations.find((variation) => {
                return variation.attributes.every((attr) => {
                    return selectedAttributes[attr.name] === attr.option;
                });
            });

           // console.log(matchedVariation)

            if (matchedVariation) {
                // If a matching variation is found, update the selected variation and price
                setSelectedVariation(matchedVariation);
                setPrice(matchedVariation.price); // Update price based on matched variation
            } else {
                // If no matching variation is found, reset the selected variation and price
                setSelectedVariation(null);
                setPrice(null); // Reset to base product price or default
            }
        } else {
            // If not all attributes are selected, reset to base product price
            setSelectedVariation(null);
            setPrice(null); // Reset to base product price
        }
    }, [selectedAttributes, product, setSelectedVariation]);

    return (
        <div className="space-y-4">
            {product.attributes.map((attribute) => (
                <div key={attribute.id} className="space-y-2">
                    <label htmlFor={attribute.name} className="block text-sm font-medium text-gray-700">
                        {attribute.name}
                    </label>
                    <select
                        id={attribute.name}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={(e) => handleAttributeChange(attribute.name, e.target.value)}
                        value={selectedAttributes[attribute.name] || ""}
                    >
                        <option value="">Select {attribute.name}</option>
                        {attribute.options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            ))}

            <div className="mt-4">
                {price ? (
                    <p className="text-3xl font-semibold text-blue-800">${price}</p>
                ) : (
                    <p className="text-sm text-gray-500">Please select options to see the price.</p>
                )}
            </div>
        </div>
    );
}

export default ProductVariations;
