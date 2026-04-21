import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Products } from "./components/products";
import { Stats } from "./components/stats";

export function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
    </main>
  );
}
