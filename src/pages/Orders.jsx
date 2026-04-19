export default function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Orders 📦</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-xl shadow mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-bold">Order #{order.id}</span>
              <span className="text-gray-500 text-sm">{order.date}</span>
            </div>

            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))}

            <div className="mt-2 font-bold">
              Total: ${order.total}
            </div>
          </div>
        ))
      )}
    </div>
  );
}