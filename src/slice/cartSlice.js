import { createSlice } from '@reduxjs/toolkit';
import {toast} from "react-toastify";

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
            console.log(newItem);
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: newItem.quantity,
                });
            } else {
                existingItem.quantity += newItem.quantity;
            }

            // Recalculate totalQuantity and totalPrice based on all items in the cart
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
            toast.success('Product added successfully!')
            saveCartToLocalStorage(state); // Save cart to localStorage after adding item
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.items = state.items.filter((item) => item.id !== id);
                state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
                state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
                saveCartToLocalStorage(state); // Save cart to localStorage after removing item
            }
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
                state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
                state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
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
