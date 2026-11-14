import Logo from './Logo.jsx'
import { brand } from '../data/menu.js'

export default function Footer() {
  return (
    <footer id="contact" className="bg-shack-green-deep text-shack-cream/80">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-9 px-[max(18px,env(safe-area-inset-left))] pb-10 pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-shack-gold/40 bg-gradient-to-br from-shack-green-mid to-shack-green-deep">
              <Logo size={24} />
            </span>
            <div>
              <div className="font-display text-xl font-black tracking-[0.1em] text-white">
                THE SHACK
              </div>
              <div className="text-[0.6rem] uppercase tracking-[0.24em] text-shack-gold">
                Come Hungry · Leave Happy
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-[38ch] text-sm text-shack-cream/50">
            Your neighbourhood flavour spot in Lahore — serving up burgers,
            pizzas, wings and feasts made fresh, fast and full of flavour.
          </p>
          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-shack-gold-light to-shack-gold px-5 py-3 font-display text-sm font-extrabold text-shack-green-deep">
            🛵 {brand.delivery}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-bold text-white">
            Visit / Order
          </h4>
          <ContactItem
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
            }
            k="Location"
            v={brand.address}
          />
          <ContactItem
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1z" />
              </svg>
            }
            k="Call to Order"
            v={<a href={`tel:${brand.phoneRaw}`} className="hover:text-shack-gold-light">{brand.phone}</a>}
          />
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-bold text-white">
            Hours
          </h4>
          <ContactItem
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            }
            k="Open Daily"
            v="12:00 PM – 2:00 AM"
          />
          <ContactItem icon={<span>🍴</span>} k="Dine In · Takeaway" v="Delivery Available" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-[max(18px,env(safe-area-inset-left))] py-5 text-center text-sm text-shack-cream/40">
          <span>© {new Date().getFullYear()} The Shack. All rights reserved.</span>
          <span>Come Hungry · Leave Happy</span>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({ icon, k, v }) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <span className="grid h-9 w-9 flex-none place-items-center rounded-xl border border-shack-gold/30 bg-shack-gold/10 text-shack-gold-light">
        {icon}
      </span>
      <span>
        <span className="text-xs uppercase tracking-wide text-shack-cream/40">
          {k}
        </span>
        <br />
        <span className="font-semibold text-shack-cream/90">{v}</span>
      </span>
    </div>
  )
}
