import { useCart } from "../context/CartContext";
import { Button } from "./shared/button";

export function Cart() {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-neutral-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Cart ({cartItems.length})</h3>
        {cartItems.length > 0 && (
          <Button onClick={clearCart} variant="outline" className="text-sm px-3 py-1">
            Clear All
          </Button>
        )}
      </div>
      <CartBody />
    </div>
  );
}

function CartBody() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (!cartItems.length) {
    return <p className="text-gray-500 text-center py-8">Your cart is empty</p>;
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-neutral-200"
        >
          {/* Item Details */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white border border-neutral-200 rounded-lg flex items-center justify-center p-2">
              <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-lg font-bold text-primary">${item.price}</p>
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove from cart"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}

      {/* Total Price */}
      <div className="mt-6 pt-6 border-t border-neutral-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-primary">${getTotalPrice()}</span>
        </div>
        <Button variant="primary" className="w-full" onClick={clearCart}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
