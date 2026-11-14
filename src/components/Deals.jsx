import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import { deals, fmtPrice as fmt } from '../data/menu.js'
import { useItemModal } from '../context/ModalContext.jsx'

export default function Deals() {
  const { open } = useItemModal()
  return (
    <section
      id="deals"
      className="relative overflow-hidden py-16"
      style={{
        backgroundImage:
          'radial-gradient(700px 420px at 85% 0%, rgba(227,167,44,.16), transparent 60%), linear-gradient(170deg, #0a3d22 0%, #052414 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <SectionHead
          dark
          kicker="Save More"
          title="Combo Deals & Feasts"
          sub="From a quick solo combo to a full family feast — there's a deal for every hunger."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((d, i) => (
            <Reveal key={d.no} delay={(i % 3) * 80}>
            <article
              className="relative flex h-full flex-col rounded-2xl border border-shack-gold/25 bg-white/[0.04] p-6 pt-6 transition duration-300 hover:-translate-y-1.5 hover:border-shack-gold hover:bg-white/[0.07]"
            >
              <div className="absolute -top-3.5 right-5 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-shack-gold-light to-shack-gold font-display text-lg font-black text-shack-green-deep shadow-lg shadow-shack-gold/40">
                {d.no}
              </div>
              <h3 className="font-display text-lg font-extrabold text-white">
                {d.name}
              </h3>
              <div className="mb-3.5 font-display text-2xl font-extrabold text-shack-gold-light">
                {fmt(d.price)}
              </div>
              <ul className="mb-5 flex flex-1 flex-col gap-1.5">
                {d.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-sm text-shack-cream/80"
                  >
                    <span className="flex-none font-extrabold text-shack-gold">
                      ✓
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() =>
                  open({
                    id: `deal-${d.no}`,
                    name: `Deal ${d.no} — ${d.name}`,
                    price: d.price,
                  })
                }
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-shack-gold-light to-shack-gold px-5 py-2.5 font-display text-sm font-bold text-shack-green-deep shadow-lg shadow-shack-gold/30 transition hover:brightness-105"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Add Deal to Order
              </button>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
