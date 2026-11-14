import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { addonOptions, fmtPrice } from '../data/menu.js'

export default function ItemModal({ base, onClose }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [addons, setAddons] = useState([]) // array of addon ids
  const [note, setNote] = useState('')

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const chosen = addonOptions.filter((a) => addons.includes(a.id))
  const addonTotal = chosen.reduce((n, a) => n + a.price, 0)
  const unit = base.price + addonTotal
  const lineTotal = unit * qty

  const toggle = (id) =>
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )

  const confirm = () => {
    const trimmed = note.trim()
    const uid = `${base.id}|${[...addons].sort().join(',')}|${trimmed}`
    add({
      id: uid,
      name: base.name,
      price: unit,
      basePrice: base.price,
      addons: chosen.map((a) => ({ name: a.name, price: a.price })),
      note: trimmed,
      qty,
    })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/55 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-shack-cream shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Customize ${base.name}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 bg-shack-green-deep px-5 py-4 text-white">
          <div>
            <div className="font-display text-lg font-extrabold">{base.name}</div>
            <div className="text-sm text-shack-gold-light">{fmtPrice(base.price)}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 flex-none place-items-center rounded-lg text-shack-cream/80 transition hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* Add-ons */}
          <div className="mb-5">
            <h4 className="mb-1 font-display text-base font-bold text-shack-green">
              Add extras
              <span className="ml-2 text-xs font-medium text-shack-green-deep/50">
                optional
              </span>
            </h4>
            <p className="mb-3 text-xs text-shack-green-deep/60">
              Tick anything you'd like to add on.
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {addonOptions.map((a) => {
                const on = addons.includes(a.id)
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => toggle(a.id)}
                    className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left transition ${
                      on
                        ? 'border-shack-gold bg-shack-gold/15'
                        : 'border-black/10 bg-white hover:border-shack-gold/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`grid h-5 w-5 flex-none place-items-center rounded-md border ${
                          on
                            ? 'border-shack-gold bg-shack-gold text-shack-green-deep'
                            : 'border-black/20 bg-white'
                        }`}
                      >
                        {on && (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 6" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm font-semibold text-shack-green">
                        {a.name}
                      </span>
                    </span>
                    <span className="whitespace-nowrap text-sm font-bold text-shack-gold-deep">
                      +{a.price}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Special instructions */}
          <div>
            <h4 className="mb-1 font-display text-base font-bold text-shack-green">
              Special instructions
              <span className="ml-2 text-xs font-medium text-shack-green-deep/50">
                optional
              </span>
            </h4>
            <textarea
              id="item-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={200}
              rows={3}
              placeholder="e.g. No onions, extra spicy, cut in half…"
              className="w-full resize-none rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-shack-green-deep outline-none transition focus:border-shack-gold placeholder:text-shack-green-deep/40"
            />
            <div className="mt-1 text-right text-xs text-shack-green-deep/40">
              {note.length}/200
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-black/10 bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Qty stepper */}
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-shack-cream px-2 py-1.5">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid h-8 w-8 place-items-center rounded-full bg-white font-bold text-shack-green transition hover:bg-shack-green hover:text-white"
              >
                −
              </button>
              <span className="w-7 text-center font-display text-lg font-bold tabular-nums">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="grid h-8 w-8 place-items-center rounded-full bg-white font-bold text-shack-green transition hover:bg-shack-green hover:text-white"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={confirm}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-shack-gold-light to-shack-gold px-5 py-3 font-display font-bold text-shack-green-deep shadow-lg shadow-shack-gold/40 transition hover:brightness-105"
            >
              Add to cart · {fmtPrice(lineTotal)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
