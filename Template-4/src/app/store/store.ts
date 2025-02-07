// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the cart slice reducer
import wishlistReducer from './wishlistSlice'; // Import the wishlist slice reducer

// Create store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart slice reducer
    wishlist: wishlistReducer, // Wishlist slice reducer
  },
});

// Define the RootState type based on the store's reducer
export type RootState = ReturnType<typeof store.getState>; // This will infer the state type automatically
export type AppDispatch = typeof store.dispatch;

export default store;
