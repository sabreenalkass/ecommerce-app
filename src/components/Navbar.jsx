import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          MyShop 🛒
        </h1>

        {/* Links */}
        <div className="flex gap-5 items-center text-sm">

          <Link className="hover:text-blue-600" to="/">
            Products
          </Link>

          <Link className="hover:text-blue-600" to="/cart">
            Cart
          </Link>

          <Link className="hover:text-blue-600" to="/orders">
            Orders 📦
          </Link>

          {!user ? (
            <>
              <Link className="hover:text-blue-600" to="/login">
                Login
              </Link>

              <Link className="hover:text-blue-600" to="/register">
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-xs">
                {user.email}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}