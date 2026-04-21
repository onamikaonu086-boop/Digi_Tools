import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Products } from "./components/products";
import { Stats } from "./components/stats";
import { CartProvider } from "./context/CartContext";

export function App() {
  return (
    <CartProvider>
      <main>
        <Navbar />
        <Hero />
        <Stats />
        <Products />
      </main>
    </CartProvider>
  );
}
