const stats = [
  { value: "240GSM", label: "Heavyweight cotton" },
  { value: "07", label: "Drop pieces" },
  { value: "0", label: "Restocks" },
  { value: "AU", label: "Ships nationwide" },
];

export default function DropStats() {
  return (
    <section
      className="border-y border-white/8 bg-surface"
      aria-label="Collection highlights"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/8 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10"
          >
            <p className="font-display text-3xl tracking-[0.12em] text-white sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
