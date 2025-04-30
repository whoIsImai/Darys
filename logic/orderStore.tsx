import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Order ={
    id: string | null
    name: string
    price: string
    date: string
}

type OrderStore = {
  latestOrder: Order[]
  setLatestOrder: (order: Order) => void
  deleteOrders: () => void
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      latestOrder: [],
      setLatestOrder: (order) => {
        set({ latestOrder: [...get().latestOrder, order] })
      },
      deleteOrders: () => {
        set({ latestOrder: [] })
      },
    }),
    {
      name: 'latest_order', 
      storage: createJSONStorage(() => AsyncStorage), 
    })
)
  