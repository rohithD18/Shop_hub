import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  });
  return (
    <>
      {isLoading ? (
        <div className="product-card">
          <div className="product-header">
            <div className="product-maximize">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div className="product-add-to-cart">
              <Skeleton circle={true} height={50} width={50} />
            </div>
          </div>
          <div className="product-image">
            <Skeleton height={180} width={200} />
          </div>
          <div className="product-price">
            <Skeleton height={30} width={60} />
          </div>
        </div>
      ) : (
        <div className="product-card" key={product.id}>
          <div className="product-header">
            <Link to={`/shop/${product.id}`}>
              <div className="product-maximize">
                <FontAwesomeIcon
                  icon={["fas", "expand-arrows-alt"]}
                  size="2x"
                />
              </div>
            </Link>
            <Link to="/cart">
              <span className="product-add-to-cart">
                <FontAwesomeIcon icon={["fas", "shopping-bag"]} />
              </span>
            </Link>
          </div>
          <div className="product-image">
            <figure>
              <img
                src={product.image}
                alt="product-img"
                width="220"
                height="200"
              />
            </figure>
          </div>
          <div className="product-price">${product.price}</div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
