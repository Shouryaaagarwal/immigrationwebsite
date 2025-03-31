import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types';

interface AuthState {
    user: User | null;
    userId: string | null; // Separate field for easy access to ID
}

const initialState: AuthState = {
    user: null,
    userId: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            // Set userId whenever user is set
            state.userId = action.payload?._id || null;
        },
        clearAuth: (state) => {
            state.user = null;
            state.userId = null;
        },
        // Optional: Direct setter for userId if needed
        setUserId: (state, action: PayloadAction<string | null>) => {
            state.userId = action.payload;
        }
    },
});

export const { setAuthUser, clearAuth, setUserId } = authSlice.actions;

// Selectors for easy access
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectUserId = (state: { auth: AuthState }) => state.auth.userId;

export default authSlice.reducer;