import { useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, setCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty 🛒");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // 🧾 حفظ الطلب
      const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

      const newOrder = {
        id: Date.now(),
        items: cart,
        total,
        date: new Date().toLocaleString(),
        paymentMethod,
      };

      localStorage.setItem(
        "orders",
        JSON.stringify([...oldOrders, newOrder])
      );

      // 🧹 تفريغ السلة
      setCart([]);

      setLoading(false);

      // 🎉 رسالة نجاح
      toast.success("Payment successful 🎉");

      // 🚀 تحويل لصفحة النجاح
      navigate("/success");
    }, 1500);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout 💳</h1>

      {/* 🧾 Order Summary */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))}

        <div className="mt-4 font-bold text-lg">
          Total: ${total.toFixed(2)}
        </div>
      </div>

      {/* 💳 Payment Methods */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="font-semibold mb-3">Payment Method</h2>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit / Debit Card 💳
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal 📱
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery 💵
          </label>
        </div>
      </div>

      {/* 💳 Fake Card Form */}
      {paymentMethod === "card" && (
        <div className="bg-white p-4 rounded-xl shadow mb-6 space-y-3">
          <input
            placeholder="Card Number"
            className="w-full border p-2 rounded"
          />
          <input
            placeholder="Name on Card"
            className="w-full border p-2 rounded"
          />

          <div className="flex gap-2">
            <input
              placeholder="MM/YY"
              className="w-1/2 border p-2 rounded"
            />
            <input
              placeholder="CVV"
              className="w-1/2 border p-2 rounded"
            />
          </div>
        </div>
      )}

      {/* 🚀 Confirm Button */}
      <button
        onClick={handleOrder}
        disabled={loading}
        className={`w-full py-3 rounded-lg text-white font-semibold ${
          loading
            ? "bg-gray-400"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Processing..." : "Confirm Order 🚀"}
      </button>
    </div>
  );
}