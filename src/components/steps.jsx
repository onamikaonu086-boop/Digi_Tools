const stepsData = [
  {
    id: "01",
    icon: "👤",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: "02",
    icon: "📦",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: "03",
    icon: "🚀",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

// Main Steps Component
export function Steps() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stepsData.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </section>
  );
}

// StepCard Component
function StepCard({ step }) {
  return (
    <div className="relative bg-white rounded-lg p-8 h-full flex flex-col items-center text-center">
      {/* Number Badge - Top Right */}
      <div className="absolute top-6 right-6">
        <div className="size-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white font-bold text-sm">{step.id}</span>
        </div>
      </div>

      {/* Icon */}
      <div className="text-6xl mb-6 mt-8">{step.icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
    </div>
  );
}
