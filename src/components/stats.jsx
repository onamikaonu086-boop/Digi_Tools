export function Stats() {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "200+", label: "Premium Tools" },
    { number: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-linear-to-r from-primary/80 to-primary pt-16 pb-10 px-4">
      <div className="container mx-auto flex justify-around items-center gap-8 flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</h3>
            <p className="text-purple-100 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
