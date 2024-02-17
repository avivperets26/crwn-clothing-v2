
//src\types\types.ts

export interface UserState {
    currentUser: any; // Replace 'any' with the actual type of currentUser
}
export interface CategoryItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}
export interface Category {
    imageUrl: string;
    title: string; // Add the title property
    items: CategoryItem[]; // Add the items property
}

export interface CategoriesState {
    categories: Category[];
}
// Define the type of your cart item
export interface CartItem {
    id: string;
    price: number; // Add the price property
    quantity: number; // Add the quantity property
}

// Define the type of your cart state
export interface CartState {
    isCartOpen: boolean;
    cartItems: CartItem[];
}

export interface RootState {
    user: UserState;
    categories: CategoriesState;
    cart: CartState;
}

