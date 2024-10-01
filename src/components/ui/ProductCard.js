import React from 'react';
import Rating from "@/components/ui/Rating";
import ImageHelper from "@/components/ui/ImageHelper";
import InStock from "@/components/ui/InStock";
import AddtoCart from "@/components/ui/AddtoCart";

function ProductCard({product}) {
    return (
        <article
            className="flex flex-col gap-2 product-card relative p-2 sm:p-4 h-full rounded bg-white card-image--jump"
            title={product.title}
        >
            <div className="relative flex-shrink-0">
                <div className="relative card-img-container overflow-hidden mx-auto w-full h-[180px] md:h-[200px]">
                    <div
                        className="relative inline-block overflow-hidden mx-auto box-sizing object-cover bg-fill-thumbnail">
                        <ImageHelper />
                        <img
                            alt={product.alt}
                            loading="lazy"
                            decoding="async"
                            className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover"
                            sizes="100vw"
                            src={product.src}
                            style={{color: "transparent"}}
                        />
                    </div>
                </div>
                {product.isOnSale && (
                    <div className="w-full h-full absolute top-0 z-10 -mx-0.5 sm:-mx-1">
                      <span
                          className="text-[10px] font-medium text-skin-inverted uppercase inline-block bg-red-600 rounded-sm px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                        on sale
                      </span>
                    </div>
                )}
            </div>
            <div className="flex flex-col h-full overflow-hidden relative product-cart-content">
                <a
                    className="text-skin-base font-semibold text-sm leading-5 min-h-[40px] line-clamp-2 mb-2 hover:text-brand"
                    href={product.href}
                >
                    {product.title}
                </a>

                <Rating/>

                <div className="space-s-2">
                    <span className="inline-block font-semibold text-sm sm:text-15px lg:text-base text-skin-primary">
                      {product.price}
                    </span>
                </div>
                <InStock />

                <AddtoCart/>
            </div>
        </article>
    );
}

export default ProductCard;