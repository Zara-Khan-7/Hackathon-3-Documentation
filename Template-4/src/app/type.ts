

export type CartItem = {
    id: string; // Unique identifier for cart items
    name: string;
    price: number;
    quantity: number;
    img: string;
  };
  
  export type Product = {
    _id: string; // ID of the product
    imageUrl: string; // URL of the product image
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    stockLevel: number;
  };
  
  