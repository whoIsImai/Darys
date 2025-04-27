import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Order ={
    name: string
    img : string
    price: number
    date: string
}

type OrderStore = {
  latestOrder: Order | null
  setLatestOrder: (order: Order) => void
  deleteOrders: () => void
}

export const useOrderStore = create<OrderStore>((set) => ({
    latestOrder: null,
    setLatestOrder: (order) => {
      set({ latestOrder: order })
      AsyncStorage.setItem('latest_order', JSON.stringify(order))
    },
    deleteOrders: () => {
      set({ latestOrder: null })
      AsyncStorage.removeItem('latest_order')
    },
  }))