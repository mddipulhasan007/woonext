import React from "react";
import Skeleton from "react-loading-skeleton";

function ProductCardLoader(props) {
  return (
    <div>
      <Skeleton height={272} /> {/* Adjust height to match your product card */}
      <Skeleton height={30} style={{ marginTop: "0.5rem" }} />
      <Skeleton height={20} style={{ marginTop: "0.5rem" }} />
    </div>
  );
}

export default ProductCardLoader;
