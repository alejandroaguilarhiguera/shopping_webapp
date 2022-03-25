import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types';

interface ListProducts {
    list: Product[],
}

const initialState: ListProducts = {
    list: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState, // valor inicial
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.list = action.payload;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.list = [
                ...state.list,
                action.payload,
            ]
        },
        delProduct: (state, action: PayloadAction<Product['id']>) => {
            state.list = state.list.filter(({id}) => id !== action.payload);
        },
    }
});

export const { addProduct, delProduct, setProducts } = productsSlice.actions;

export default productsSlice;