// Example of wishlistSlice actions:

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type WishlistState = {
  items: Product[];
};

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
