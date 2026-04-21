const cartItems = [];

export function Cart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-neutral-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Cart ({cartItems.length})</h3>
      <CartBody />
    </div>
  );
}

function CartBody() {
  if (!cartItems.length) return <p className="text-gray-500 text-center py-8">Your cart is empty</p>;

  return <div className="space-y-4">{/* Cart items will be rendered here */}</div>;
}
