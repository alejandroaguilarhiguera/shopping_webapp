import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types';

interface Session {
    user?: User,
}

const initialState: Session = {
    user: undefined,
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState, // valor inicial
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        delUser: (state) => {
            state.user = undefined;
        },
    }
});

export const { setUser, delUser } = sessionSlice.actions;

export default sessionSlice;