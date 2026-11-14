import SectionHead from './SectionHead.jsx'
import { specials, fmtPrice as fmt } from '../data/menu.js'
import { useItemModal } from '../context/ModalContext.jsx'

export default function Specials() {
  const { open } = useItemModal()
  return (
    <section
      id="specials"
      className="py-16"
      style={{ backgroundImage: 'linear-gradient(180deg,#fff 0%,#f7f4ec 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <SectionHead
          kicker="Hot Right Now"
          title="This Week's Specials"
          sub="Chef's picks flying out the kitchen — grab them before they're gone."
        />
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {specials.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-3xl border border-shack-cream/0 bg-white shadow-xl shadow-shack-green/10 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="aspect-square overflow-hidden bg-shack-green-deep">
                <img
                  src={import.meta.env.BASE_URL + s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-shack-green">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-shack-green-deep/70">
                  {s.blurb}
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  {s.items.map((it, idx) => (
                    <div
                      key={it.name}
                      className={`flex items-center justify-between ${
                        idx > 0 ? 'border-t border-dashed border-shack-cream pt-2.5' : ''
                      }`}
                    >
                      <span className="font-semibold">{it.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="whitespace-nowrap rounded-full bg-shack-gold/15 px-3 py-0.5 font-display text-sm font-extrabold text-shack-gold-deep">
                          {fmt(it.price)}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            open({ id: `special-${it.name}`, name: it.name, price: it.price })
                          }
                          aria-label={`Add ${it.name} to cart`}
                          className="grid h-7 w-7 flex-none place-items-center rounded-full bg-shack-green text-white transition hover:bg-shack-gold hover:text-shack-green-deep"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
