// CartProvider.tsx - Client-side wrapper for Cart component
'use client'; // Ensure this is a client-side component
import { Provider } from 'react-redux';
import  store  from '../store/store'; 

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CartProvider;
