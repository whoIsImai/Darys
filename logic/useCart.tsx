import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist, createJSONStorage } from 'zustand/middleware'

type CartItem = {
  id: string
  name: string
  img : string
  price: number
  quantity: number
}

type CartState = {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  decrementQuantity: (id: string)=> void
  increaseQuantity: (id: string)=> void
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

      decrementQuantity: (id) => {
        const updatedCart = get().cart.map(item => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return null // will be filtered out below
          }
          return item
        }).filter(Boolean) as CartItem[]
      
        set({ cart: updatedCart })
      },

      increaseQuantity: (id) => {
        const updatedCart = get().cart.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      
        set({ cart: updatedCart })
      }
      
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
