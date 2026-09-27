export default function AnnouncementBar() {
  const messages = [
    "Free shipping over A$100",
    "THE_ORIGIN_DROP",
    "Limited run — no restocks",
    "240gsm heavyweight cotton",
    "Made in Australia",
  ];

  return (
    <div
      className="relative overflow-hidden border-b border-white/8 bg-black"
      aria-label="Store announcements"
    >
      <div className="animate-marquee flex w-max whitespace-nowrap py-2.5 motion-reduce:animate-none">
        {[...messages, ...messages].map((message, index) => (
          <span
            key={`${message}-${index}`}
            className="mx-8 font-mono text-[10px] uppercase tracking-[0.32em] text-white/50"
          >
            {message}
            <span className="mx-8 inline-block h-1 w-1 rounded-full bg-white/25 align-middle" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
