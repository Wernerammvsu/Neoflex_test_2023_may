export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    thumbnailUrl: string;
    rating: number;
}