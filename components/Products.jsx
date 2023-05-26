import React from "react";
import products from "../products.json";
import { CldImage } from "next-cloudinary";

const Products = () => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <CldImage
              src={product.image}
              alt={`Preview of ${product.title}`}
              width={300}
              height={300}
              priority
              crop="fill"
              gravity="auto"
              sizes="50w"
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
