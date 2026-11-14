import { createContext, useContext, useState, useCallback } from 'react'
import ItemModal from '../components/ItemModal.jsx'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [item, setItem] = useState(null)

  const open = useCallback((baseItem) => setItem(baseItem), [])
  const close = useCallback(() => setItem(null), [])

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {item && <ItemModal base={item} onClose={close} />}
    </ModalContext.Provider>
  )
}

export function useItemModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useItemModal must be used within ModalProvider')
  return ctx
}
