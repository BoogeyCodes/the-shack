import { CartProvider } from './context/CartContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import DeliveryStrip from './components/DeliveryStrip.jsx'
import Specials from './components/Specials.jsx'
import Menu from './components/Menu.jsx'
import Deals from './components/Deals.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <div className="min-h-screen bg-shack-cream">
          <Navbar />
          <main>
            <Hero />
            <DeliveryStrip />
            <Specials />
            <Menu />
            <Deals />
          </main>
          <Footer />
          <Cart />
          <BackToTop />
        </div>
      </ModalProvider>
    </CartProvider>
  )
}
