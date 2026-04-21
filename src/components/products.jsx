import { useState } from "react";
import { Button } from "./shared/button";
import { useCart } from "../context/CartContext";
import productsData from "../data/product.json";
import { Cart } from "./cart";

// Main Products Component
export function Products() {
  const [tab, setTab] = useState("products");

  return (
    <section className="py-12 px-4 md:px-8 bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Digital Tools</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Choose from our curated collection of premium digital products designed to boost your productivity
          and creativity.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4">
          <Button onClick={() => setTab("products")} variant={tab === "products" ? "primary" : "outline"}>
            Products
          </Button>
          <Button onClick={() => setTab("cart")} variant={tab === "cart" ? "primary" : "outline"}>
            Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {tab === "products" && <ProductList products={productsData} />}
        {tab === "cart" && <Cart />}
      </div>
    </section>
  );
}

// ProductList Component
function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ProductCard Component
function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();

  const isAdded = cartItems.some((item) => item.id === product.id);

  const getTagColor = (tagType) => {
    const colors = {
      "best-seller": "bg-yellow-100 text-yellow-800",
      popular: "bg-purple-100 text-purple-800",
      new: "bg-green-100 text-green-800",
    };
    return colors[tagType] || "bg-gray-100 text-gray-800";
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-lg shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-shadow">
      {/* Icon Container */}
      <div className="flex items-center justify-between">
        <div className="flex justify-center mb-4 size-10 border border-neutral-200 p-2 rounded-full shrink-0">
          <img src={product.icon} alt={product.name} className="" />
        </div>
        {product.tag && (
          <div
            className={`inline-block ${getTagColor(product.tagType)} px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit`}
          >
            {product.tag}
          </div>
        )}
      </div>

      {/* Product Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 grow">{product.description}</p>

      {/* Price Section */}
      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          {product.period && (
            <span className="text-gray-500 text-sm">
              /{product.period === "one-time" ? "One-Time" : product.period}
            </span>
          )}
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <Button onClick={handleAddToCart} variant={isAdded ? "success" : "primary"}>
        {isAdded ? "✓ Added to Cart" : "Buy Now"}
      </Button>
    </div>
  );
}

// Cart Component (Placeholder for later implementation)
