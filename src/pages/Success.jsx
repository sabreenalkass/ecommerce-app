import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      
      <div className="bg-white p-10 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-3">
          🎉 Payment Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Your order has been placed successfully!
        </p>

        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Back to Shop
          </button>
        </Link>
      </div>

    </div>
  );
}