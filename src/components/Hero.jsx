const stats = [
  { num: '60+', lbl: 'Menu Items' },
  { num: '12', lbl: 'Combo Deals' },
  { num: 'FREE', lbl: 'Home Delivery' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-shack-green-deep"
      style={{
        backgroundImage:
          'radial-gradient(900px 500px at 78% -8%, rgba(227,167,44,.20), transparent 60%), radial-gradient(700px 500px at 10% 110%, rgba(19,92,55,.55), transparent 60%), linear-gradient(160deg, #0a3d22 0%, #052414 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-[max(18px,env(safe-area-inset-left))] py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="animate-fade-up">
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-shack-gold">
            <span className="h-px w-8 bg-shack-gold" />
            Lahore's Flavour Spot
          </span>
          <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Come Hungry,
            <br />
            <span className="bg-gradient-to-r from-shack-gold-light to-shack-gold bg-clip-text text-transparent">
              Leave Happy.
            </span>
          </h1>
          <p className="mt-6 max-w-[42ch] text-lg text-shack-cream/80">
            Fresh-off-the-grill burgers, loaded pizzas, crispy wings, wraps,
            shawarmas &amp; feast-sized deals — all made to order and delivered
            to your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="btn-gold">
              Explore the Menu
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#deals" className="btn-outline">
              See the Deals
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.lbl}>
                <div className="font-display text-2xl font-extrabold text-shack-gold-light">
                  {s.num}
                </div>
                <div className="mt-1 text-xs tracking-wide text-shack-cream/50">
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative -rotate-2 overflow-hidden rounded-3xl border border-shack-gold/30 shadow-2xl shadow-black/60 animate-fade-up">
          <span className="absolute left-4 top-4 z-10 rounded-full border border-shack-gold/40 bg-shack-green-deep px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-shack-gold-light">
            🔥 This Week's Special
          </span>
          <img
            src={import.meta.env.BASE_URL + 'images/special-fish.jpg'}
            alt="Fish & Chips and Fish Burger special"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
