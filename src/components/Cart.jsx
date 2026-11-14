import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { brand, fmtPrice } from '../data/menu.js'

export default function Cart() {
  const { items, count, total, inc, dec, remove, clear } = useCart()
  const [open, setOpen] = useState(false)
  const [orderNote, setOrderNote] = useState('')

  const checkoutWhatsApp = () => {
    const lines = items.map((i) => {
      let block = `• ${i.qty} × ${i.name} — ${fmtPrice(i.qty * i.price)}`
      if (i.addons?.length) {
        block += `%0A    ➕ ${i.addons.map((a) => a.name).join(', ')}`
      }
      if (i.note) {
        block += `%0A    📝 ${encodeURIComponent(i.note)}`
      }
      return block
    })
    let msg =
      `*New Order — The Shack*%0A%0A` +
      lines.join('%0A') +
      `%0A%0A*Total: ${fmtPrice(total)}*`
    if (orderNote.trim()) {
      msg += `%0A%0A*Order note:* ${encodeURIComponent(orderNote.trim())}`
    }
    msg += `%0A%0AName:%0AAddress:%0A`
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* Floating cart button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open cart"
        className="fixed right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-br from-shack-gold-light to-shack-gold px-5 py-3.5 font-display font-bold text-shack-green-deep shadow-xl shadow-shack-gold/40 transition hover:-translate-y-0.5"
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom,0px))' }}
      >
        <CartIcon />
        <span className="hidden sm:inline">Cart</span>
        {count > 0 && (
          <span className="grid h-6 min-w-6 place-items-center rounded-full bg-shack-green-deep px-1.5 text-sm font-bold text-shack-gold-light">
            {count}
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-shack-cream shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between bg-shack-green-deep px-5 py-4 text-white">
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">
            <CartIcon /> Your Order
            {count > 0 && (
              <span className="ml-1 rounded-full bg-shack-gold px-2 py-0.5 text-sm text-shack-green-deep">
                {count}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="grid h-9 w-9 place-items-center rounded-lg text-shack-cream/80 transition hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-shack-green-deep/50">
              <div className="mb-3 text-5xl">🛒</div>
              <p className="font-display text-lg font-bold text-shack-green">
                Your cart is empty
              </p>
              <p className="mt-1 text-sm">
                Add items from the menu to start your order.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((i) => (
                <li
                  key={i.id}
                  className="rounded-xl border border-black/5 bg-white p-3.5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-shack-green">{i.name}</div>
                      <div className="text-xs text-shack-green-deep/60">
                        {fmtPrice(i.price)} each
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(i.id)}
                      aria-label={`Remove ${i.name}`}
                      className="grid h-7 w-7 flex-none place-items-center rounded-md text-shack-green-deep/40 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13" />
                      </svg>
                    </button>
                  </div>

                  {/* Add-ons + note */}
                  {(i.addons?.length > 0 || i.note) && (
                    <div className="mt-2 flex flex-col gap-1.5 rounded-lg bg-shack-cream px-3 py-2 text-xs">
                      {i.addons?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {i.addons.map((a) => (
                            <span
                              key={a.name}
                              className="rounded-full bg-shack-gold/20 px-2 py-0.5 font-semibold text-shack-gold-deep"
                            >
                              + {a.name}
                            </span>
                          ))}
                        </div>
                      )}
                      {i.note && (
                        <div className="flex items-start gap-1.5 text-shack-green-deep/70">
                          <span>📝</span>
                          <span className="italic">{i.note}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <QtyBtn onClick={() => dec(i.id)} label="−" />
                      <span className="w-6 text-center font-display font-bold tabular-nums">
                        {i.qty}
                      </span>
                      <QtyBtn onClick={() => inc(i.id)} label="+" />
                    </div>
                    <div className="font-display font-bold text-shack-gold-deep tabular-nums">
                      {fmtPrice(i.qty * i.price)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-black/10 bg-white px-5 py-4">
            {/* Order-level note */}
            <label htmlFor="order-note" className="mb-1 block text-xs font-semibold text-shack-green-deep/70">
              Note for the whole order (optional)
            </label>
            <input
              id="order-note"
              type="text"
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              maxLength={160}
              placeholder="e.g. Call on arrival, ring the bell…"
              className="mb-3 w-full rounded-xl border border-black/10 bg-shack-cream px-3.5 py-2.5 text-sm text-shack-green-deep outline-none transition focus:border-shack-gold placeholder:text-shack-green-deep/40"
            />

            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-base font-bold text-shack-green">
                Total
              </span>
              <span className="font-display text-2xl font-extrabold text-shack-gold-deep tabular-nums">
                {fmtPrice(total)}
              </span>
            </div>
            <button
              type="button"
              onClick={checkoutWhatsApp}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 font-display font-bold text-white shadow-lg transition hover:brightness-105"
            >
              <WhatsAppIcon /> Order on WhatsApp
            </button>
            <button
              type="button"
              onClick={clear}
              className="mt-2 w-full rounded-full py-2 text-sm font-semibold text-shack-green-deep/50 transition hover:text-red-500"
            >
              Clear cart
            </button>
            <p className="mt-2 text-center text-xs text-shack-green-deep/50">
              You'll confirm your name &amp; address in WhatsApp.
            </p>
          </footer>
        )}
      </aside>
    </>
  )
}

function QtyBtn({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid h-7 w-7 place-items-center rounded-md border border-black/10 bg-shack-cream font-bold text-shack-green transition hover:bg-shack-green hover:text-white"
    >
      {label}
    </button>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 3h2l2.6 13.4a1.5 1.5 0 0 0 1.5 1.1h7.7a1.5 1.5 0 0 0 1.5-1.1L21 7H6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3A2.8 2.8 0 0 0 6.5 9a4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.6 1.9.5 2.3.5a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z" />
    </svg>
  )
}
