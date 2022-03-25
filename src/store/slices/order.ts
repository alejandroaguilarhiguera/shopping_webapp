import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order, OrderItem } from 'types';

interface OrderStore {
    order: Order,
}

const initialState: OrderStore = {
    order: {
        id: 0,
        attributes: {
            items: [],
            createdAt: '',
            updatedAt: '',
        },
    },
}

export const orderSlice = createSlice({
    name: 'order',
    initialState, // valor inicial
    reducers: {
        setOrder: (state, action: PayloadAction<Order>) => {
            state.order = action.payload;
        },
        addItem: (state, action: PayloadAction<OrderItem>) => {
            state.order.attributes.items = [
                ...state.order.attributes.items || [],
                action.payload,
            ]
        },
        delItem: (state, action: PayloadAction<OrderItem>) => {
            const ProductId = action.payload.product.data.id;
            state.order.attributes.items = state.order.attributes.items?.filter((item) => item.product.data.id !== ProductId)
        },
    }
});

export const { setOrder, addItem, delItem } = orderSlice.actions;

export default orderSlice;