import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist, createJSONStorage } from 'zustand/middleware'

type Order ={
    name: string
    img : string
    price: number
}

type OrderStore = {
  latestOrder: Order | null
  setLatestOrder: (order: Order) => void
}

export const useOrderStore = create<OrderStore>((set) => ({
    latestOrder: null,
    setLatestOrder: (order) => {
      set({ latestOrder: order })
      AsyncStorage.setItem('latest_order', JSON.stringify(order))
        .then(() => {
          console.log('Order saved to storage ✅')
        })
        .catch((err) => {
          console.error('Failed to save order:', err)
        })
    },
  }))