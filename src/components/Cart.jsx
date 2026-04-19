import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-3"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-4 text-lg font-bold">
            Total: ${total.toFixed(2)}
          </div>

          {/* 👇 زر الـ checkout داخل نفس الـ fragment */}
          <Link to="/checkout">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Go to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}