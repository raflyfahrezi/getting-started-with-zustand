import create from 'zustand'

const increment = (set) => set((state) => ({ count: state.count + 1 }))

const decrement = (set) => set((state) => ({ count: state.count - 1 }))

const useStore = create((set) => ({
    count: 0,
    increment: () => increment(set),
    decrement: () => decrement(set),
}))

export default useStore
