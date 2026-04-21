import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Products } from "./components/products";
import { Stats } from "./components/stats";
import { Steps } from "./components/steps";
import { Footer } from "./components/footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";

export function App() {
  return (
    <>
      <CartProvider>
        <main>
          <Navbar />
          <Hero />
          <Stats />
          <Steps />
          <Products />
        </main>
        <Footer />
      </CartProvider>
      <ToastContainer position="top-right" transition={Slide} autoClose={1000} />
    </>
  );
}
