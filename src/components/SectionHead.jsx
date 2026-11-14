export default function SectionHead({ kicker, title, sub, dark = false }) {
  return (
    <div className="mb-11 text-center">
      <div
        className={`text-xs font-bold uppercase tracking-[0.24em] ${
          dark ? 'text-shack-gold-light' : 'text-shack-gold-deep'
        }`}
      >
        {kicker}
      </div>
      <h2
        className={`mt-2.5 text-balance font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.9rem] ${
          dark ? 'text-white' : 'text-shack-green'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mx-auto mt-3.5 max-w-[56ch] ${
            dark ? 'text-shack-cream/70' : 'text-shack-green-deep/70'
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
