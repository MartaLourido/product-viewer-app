import React, { useRef, useCallback } from "react";
import useProducts from "../../hooks/useProducts";

const ProductList: React.FC = () => {
  const { products, error, loadMore, hasMore } = useProducts(20);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loadMore]
  );

  return (
    <div>
      <h1>Product List</h1>
      {error && <div role="alert">{error}</div>}
      <ul>
        {products.map((product, index) => {
          const uniqueKey = `${product.id}-${index}`;
          if (products.length === index + 1) {
            return (
              <li ref={lastProductElementRef} key={uniqueKey}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.brand}</p>
                <p>{product.category}</p>
              </li>
            );
          } else {
            return (
              <li key={uniqueKey}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.brand}</p>
                <p>{product.category}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ProductList;
