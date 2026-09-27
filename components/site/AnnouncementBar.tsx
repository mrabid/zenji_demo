export default function AnnouncementBar() {
  const messages = [
    "Free shipping on orders over A$100",
    "THE_ORIGIN_DROP — limited run",
    "No restocks once sold through",
    "240gsm heavyweight cotton",
    "Made in Australia",
  ];

  return (
    <div
      className="relative z-[60] overflow-hidden border-b border-white/10 bg-black"
      aria-label="Store announcements"
    >
      <div className="animate-marquee flex w-max whitespace-nowrap py-2.5 motion-reduce:animate-none">
        {[...messages, ...messages].map((message, index) => (
          <span
            key={`${message}-${index}`}
            className="mx-6 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55"
          >
            {message}
            <span className="mx-6 text-white/20" aria-hidden>
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
