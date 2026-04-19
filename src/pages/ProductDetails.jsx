import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          className="h-64 mx-auto object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-green-600 text-xl font-bold mb-4">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}