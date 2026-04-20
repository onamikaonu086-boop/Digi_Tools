import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Stats } from "./components/stats";

export function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
    </main>
  );
}
