import { create } from "zustand";
import {} from 'zustand'

type CountState = {
    count: number;
    increment: () => void,
    decrement: () => void
}

type CartItem = {
    cart: string[],
    addCart: (newItem: string) => void
}


//count store
export const useCountStore = create<CountState>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({count: state.count + 1 }))
    },
    decrement: () => {
        set((state) => {
            if(state.count >= 1) {
                return {count:  state.count - 1}
            }
            return state
        })
    }
}))


//cart store
export const useCartStore = create<CartItem>((set) => ({
    cart: [],
    addCart: (newItem) => {
        set((state) => ({cart: [...state.cart, newItem]}))
    }
}))