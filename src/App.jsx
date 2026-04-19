import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Success from "./pages/Success";



function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Navbar />

        <div className="max-w-6xl mx-auto">
          <Routes>
            {/* 🛍️ المنتجات */}
            <Route path="/" element={<ProductList />} />

            {/* 🔐 الكارت محمي */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            {/* 🔐 checkout محمي (مهم جدًا) */}
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            {/* 📦 تفاصيل المنتج */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* 🔑 auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;