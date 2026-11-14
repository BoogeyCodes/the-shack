import { useMemo, useState } from 'react'
import SectionHead from './SectionHead.jsx'
import CategoryCard from './CategoryCard.jsx'
import { categories } from '../data/menu.js'

export default function Menu() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = active === 'all' ? categories : categories.filter((c) => c.id === active)

    if (!q) return list

    // filter items within each category by the search query
    return list
      .map((c) => {
        if (Array.isArray(c.variantItems)) {
          const vi = c.variantItems.filter((it) =>
            it.name.toLowerCase().includes(q),
          )
          const nameHit = c.name.toLowerCase().includes(q)
          if (!vi.length && !nameHit) return null
          return { ...c, variantItems: nameHit ? c.variantItems : vi }
        }
        const items = c.items.filter((it) => it.name.toLowerCase().includes(q))
        const nameHit = c.name.toLowerCase().includes(q)
        if (!items.length && !nameHit) return null
        return { ...c, items: nameHit ? c.items : items }
      })
      .filter(Boolean)
  }, [active, query])

  return (
    <section id="menu" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <SectionHead
          kicker="Dig In"
          title="The Full Menu"
          sub="Everything we cook, all in one place. Search or filter, then add to your cart."
        />

        {/* Search */}
        <div className="mx-auto mb-7 max-w-md">
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-shack-cream px-4 py-2.5 focus-within:border-shack-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-shack-green-deep/50">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              id="menu-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search burgers, pizza, wings…"
              className="w-full bg-transparent text-shack-green-deep outline-none placeholder:text-shack-green-deep/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="text-shack-green-deep/40 hover:text-shack-green-deep"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          <Pill label="✨ All" active={active === 'all'} onClick={() => setActive('all')} />
          {categories.map((c) => (
            <Pill
              key={c.id}
              label={`${c.emoji} ${c.name}`}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            />
          ))}
        </div>

        {shown.length === 0 ? (
          <div className="py-10 text-center text-shack-green-deep/50">
            <div className="mb-2 text-4xl">🔍</div>
            <p className="font-display text-lg font-bold text-shack-green">
              No items match “{query}”
            </p>
            <p className="mt-1 text-sm">Try another search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((c) => (
              <CategoryCard key={c.id} cat={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Pill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 ${
        active
          ? 'border-shack-green bg-shack-green text-white shadow-md'
          : 'border-black/10 bg-white text-shack-green hover:-translate-y-0.5 hover:border-shack-green hover:bg-shack-green hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}
