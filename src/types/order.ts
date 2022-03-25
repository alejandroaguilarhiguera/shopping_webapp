import { Product } from "./product";

export interface OrderItem {
    id: number;
    quantity: number;
    product: {
        data: Product;
    }
}
export interface OrderAttributes {
    items?: OrderItem[];
    createdAt: string;
    updatedAt: string;
}

export interface OrderCreationAttributes {
    id?: number;
    items?: OrderAttributes['items'];
}

export interface Order {
    id: number;
    attributes: OrderAttributes,
}
