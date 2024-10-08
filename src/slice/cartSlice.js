import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

// Helper function to save cart to localStorage
const saveCartToLocalStorage = (state) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(state));
    }
};

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : initialState;
    }
    return initialState;
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadCartFromLocalStorage(),
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
            }

            // Recalculate totalQuantity and totalPrice based on all items in the cart
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

            saveCartToLocalStorage(state); // Save cart to localStorage after adding item
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.totalQuantity--;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter((item) => item.id !== id);
                saveCartToLocalStorage(state); // Save cart to localStorage after removing item
            }
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.totalPrice -= existingItem.price * existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalPrice += existingItem.price * quantity;
                saveCartToLocalStorage(state); // Save cart to localStorage after updating quantity
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            saveCartToLocalStorage(state); // Clear cart from localStorage after clearing state
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
