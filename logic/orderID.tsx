import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface orderState {
    orderId: string | null
    setOrderId: (id: string) => void
    clearOrderId: () => void
}

export const useOrderIdStore = create<orderState>()(
    persist(
        (set) => ({
            orderId: null,
            setOrderId: (id) => set({ orderId: id }),
            clearOrderId: () => set({ orderId: null }),
        }),
        {
            name: 'order_id',
            storage: createJSONStorage(() => AsyncStorage), 
        }
    )
)