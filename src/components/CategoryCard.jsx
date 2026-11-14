import { useItemModal } from '../context/ModalContext.jsx'

const sizeShort = (s) => ({ Small: 'S', Medium: 'M', Large: 'L' }[s] || s)

export default function CategoryCard({ cat }) {
  const { open } = useItemModal()
  const isVariant = Array.isArray(cat.variantItems)

  return (
    <article className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-shack-green/10 transition duration-300 hover:-translate-y-1 hover:border-shack-gold/50 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-shack-gold/30 bg-gradient-to-br from-shack-green to-shack-green-deep text-xl">
          {cat.emoji}
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold text-shack-green">
            {cat.name}
          </h3>
          <p className="text-xs text-shack-green-deep/60">{cat.tagline}</p>
        </div>
      </div>

      <div className="my-4 h-px bg-shack-cream" />

      {isVariant ? (
        <div className="flex flex-col gap-3">
          {cat.variantItems.map((it) => (
            <div key={it.name}>
              <div className="font-medium text-shack-green">{it.name}</div>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {it.prices.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      open({
                        id: `${cat.id}-${it.name}-${cat.sizes[idx]}`,
                        name: `${it.name} (${cat.sizes[idx]})`,
                        price: p,
                      })
                    }
                    className="group flex items-center gap-1.5 rounded-full border border-shack-cream bg-shack-cream px-3 py-1 text-sm font-semibold text-shack-green transition hover:border-shack-gold hover:bg-shack-gold/15"
                  >
                    <span className="text-xs font-bold uppercase text-shack-green-deep/60 group-hover:text-shack-gold-deep">
                      {sizeShort(cat.sizes[idx])}
                    </span>
                    <span className="tabular-nums text-shack-gold-deep">{p}</span>
                    <PlusMini />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-col gap-2.5">
          {cat.items.map((it) => (
            <li key={it.name} className="flex items-center gap-2">
              <span className="min-w-0 flex-1 truncate font-medium">
                {it.name}
              </span>
              <span className="whitespace-nowrap font-display text-[0.95rem] font-bold text-shack-gold-deep tabular-nums">
                {it.price}
              </span>
              <button
                type="button"
                onClick={() =>
                  open({ id: `${cat.id}-${it.name}`, name: it.name, price: it.price })
                }
                aria-label={`Add ${it.name} to cart`}
                className="grid h-7 w-7 flex-none place-items-center rounded-full bg-shack-green text-white transition hover:bg-shack-gold hover:text-shack-green-deep"
              >
                <PlusMini />
              </button>
            </li>
          ))}
        </ul>
      )}

      {cat.note && (
        <div className="mt-3.5 rounded-xl border border-dashed border-shack-gold bg-shack-gold/5 px-3 py-2 text-xs text-shack-green-deep/70">
          {cat.note}
        </div>
      )}
    </article>
  )
}

function PlusMini() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}
