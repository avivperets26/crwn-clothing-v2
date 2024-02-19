
//src\types\types.ts

export interface UserState {
    currentUser: any; // Replace 'any' with the actual type of currentUser
}
export interface CategoryItem {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
}
export interface Category {
    imageUrl: string;
    title: string; // Add the title property
    items: CategoryItem[]; // Add the items property
}

export interface CategoryMap {
    [key: string]: CategoryItem[]
}

export interface CategoriesState {
    categories: Category[];
    isLoading: boolean;
    error: Error | null;
}
// Define the type of your cart item
export interface CartItem {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
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

