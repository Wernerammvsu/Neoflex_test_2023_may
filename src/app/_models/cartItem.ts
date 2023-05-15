import { Product } from '../_models/product';

export interface CartItem {
    product: Product;
    quantity: number;
}