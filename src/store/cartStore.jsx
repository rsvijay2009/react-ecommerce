import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [], // Initialize from localStorage
  cartLength: JSON.parse(localStorage.getItem('cartLength')) || 0,

  addToCart: (item) => set((state) => {
    const existingItemIndex = state.cart.findIndex((i) => i.id === item.id);

    let updatedCart;
    if (existingItemIndex > -1) {
      const existingQuantity = parseFloat(state.cart[existingItemIndex].quantity) || 0;
      const newQuantity = parseFloat(item.quantity) || 0;
      updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity = existingQuantity + newQuantity;
    } else {
      updatedCart = [...state.cart, { ...item, quantity: parseFloat(item.quantity) || 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save cart to localStorage

    const updatedCartLength = state.cartLength + (parseFloat(item.quantity) || 1);
    localStorage.setItem('cartLength', JSON.stringify(updatedCartLength)); // Save cartLength to localStorage

    return {
      cart: updatedCart,
      cartLength: updatedCartLength,
    };
  }),

  removeFromCart: (id) => set((state) => {
    const updatedCart = state.cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage

    const existingItem = state.cart.find((i) => i.id === id);
    const updatedCartLength = state.cartLength - (existingItem?.quantity || 0);
    localStorage.setItem('cartLength', JSON.stringify(updatedCartLength)); // Update cartLength in localStorage

    return {
      cart: updatedCart,
      cartLength: updatedCartLength,
    };
  }),

  clearCart: () => set(() => {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartLength');

    return { cart: [], cartLength: 0 };
  }),
}));

export default useCartStore;
