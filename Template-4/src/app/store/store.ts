import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your slice(s)

// Create store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Example slice reducer
  },
});

// Define the RootState type based on the store's reducer
export type RootState = ReturnType<typeof store.getState>; // This will infer the state type automatically
export type AppDispatch = typeof store.dispatch;
export default store;
