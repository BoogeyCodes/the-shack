import { brand } from '../data/menu.js'

export default function DeliveryStrip() {
  const items = [
    `🛵 ${brand.delivery}`,
    `📍 ${brand.address}`,
    `📞 ${brand.phone}`,
  ]
  return (
    <div className="bg-gradient-to-r from-shack-gold to-shack-gold-light text-shack-green-deep">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-[max(18px,env(safe-area-inset-left))] py-4 text-center font-display text-sm font-bold">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-8">
            {t}
            {i < items.length - 1 && (
              <span className="hidden h-1.5 w-1.5 rounded-full bg-shack-green-deep/50 sm:inline-block" />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
