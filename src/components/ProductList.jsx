import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
          {/* 👇 الصورة */}
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              className="h-40 mx-auto object-contain cursor-pointer"
            />
          </Link>

          {/* 👇 العنوان */}
          <Link to={`/product/${product.id}`}>
            <h2 className="font-semibold mt-3 text-sm line-clamp-2 hover:text-blue-600">
              {product.title}
            </h2>
          </Link>

          {/* السعر */}
          <p className="text-green-600 font-bold mt-2">
            ${product.price}
          </p>

          {/* زر السلة (صح 100%) */}
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart 🛒");
            }}
            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </motion.div>
      ))}
    </div>
  );
}