// stores/useCartStore.ts
import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist, createJSONStorage } from 'zustand/middleware'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type CartState = {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const existing = get().cart.find(i => i.id === item.id)
        if (existing) {
          set({
            cart: get().cart.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          })
        } else {
          set({ cart: [...get().cart, { ...item, quantity: 1 }] })
        }
      },
      removeFromCart: (id) =>
        set({ cart: get().cart.filter(i => i.id !== id) }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
