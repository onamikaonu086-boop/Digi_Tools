import { ShoppingCartIcon } from "lucide-react";
import { ButtonPrimary } from "./shared/button";

const NAV_LINK_ITEMS = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

export function Navbar() {
  return (
    <header className="w-full bg-white border-b border-neutral-200">
      <nav className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary cursor-pointer">DigiTools</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            {NAV_LINK_ITEMS.map((item) => (
              <p className="text-neutral-500 cursor-pointer">{item}</p>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900" aria-label="cart">
              <ShoppingCartIcon className="size-4" />
            </button>

            <p className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">Login</p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
        </div>
      </nav>
    </header>
  );
}
