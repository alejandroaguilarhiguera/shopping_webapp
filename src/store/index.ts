import { configureStore } from '@reduxjs/toolkit';

import productsSlice from 'store/slices/products';
import orderSlice from 'store/slices/order';
import sessionSlice from 'store/slices/session';

const store = configureStore({
    reducer: {
        session: sessionSlice.reducer,
        order: orderSlice.reducer,
        products: productsSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>;

// Fuente de informacion =>
export const selectProducts = (state: RootState) => state.products.list;
export const selectOrder = (state: RootState) => state.order.order;
export const selectSession = (state: RootState) => state.session.user;

export default store;