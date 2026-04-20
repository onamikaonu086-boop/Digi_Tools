import { ButtonPrimary, ButtonOutline } from "./shared/button";

export function Hero() {
  return (
    <section className="flex items-center justify-between px-4 py-20 bg-linear-to-br from-white to-gray-50 container mx-auto gap-12">
      {/* Left Content */}
      <div className="">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 rounded-full">
          <span className="text-primary text-sm font-semibold">🚀 New: AI-Powered Tools Available</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Supercharge Your Digital Workflow
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start
          creating faster today.
        </p>

        {/* Explore Link */}
        <p className="text-primary font-semibold mb-8 cursor-pointer hover:underline">Explore Products</p>

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <ButtonPrimary>Explore Products</ButtonPrimary>
          <ButtonOutline>
            <span className="flex items-center gap-2">
              <span>▶</span> Watch Demo
            </span>
          </ButtonOutline>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 hidden md:flex justify-end">
        <img src="/images/banner.png" alt="banner-image" />
        {/* <div className="w-96 h-96 bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400 text-center">
            <div className="text-6xl mb-4">🤖</div>
            <div>Digital Workflow Image</div>
          </span>
        </div> */}
      </div>
    </section>
  );
}
