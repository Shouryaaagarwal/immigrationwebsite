import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types';

interface AuthState {
    user: User | null;
    userId: string | null;
    isAuthenticated: boolean; // Explicit auth status flag
    logoutLoading: boolean; // Track logout state
    logoutError: string | null; // Track logout errors
}

const initialState: AuthState = {
    user: null,
    userId: null,
    isAuthenticated: false,
    logoutLoading: false,
    logoutError: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.userId = action.payload._id;
            state.isAuthenticated = true;
            state.logoutError = null; // Clear any previous errors
        },
        
        // Enhanced clearAuth with loading states
        clearAuthStart: (state) => {
            state.logoutLoading = true;
            state.logoutError = null;
        },
        
        clearAuthSuccess: (state) => {
            state.user = null;
            state.userId = null;
            state.isAuthenticated = false;
            state.logoutLoading = false;
            state.logoutError = null;
            // Consider adding other cleanup here if needed
        },
        
        clearAuthFailure: (state, action: PayloadAction<string>) => {
            state.logoutLoading = false;
            state.logoutError = action.payload;
            // Note: We don't clear user data on failure
        },
        
        // Reset auth state completely
        resetAuthState: () => initialState,
    },
});

// Export actions
export const { 
    setAuthUser, 
    clearAuthStart, 
    clearAuthSuccess, 
    clearAuthFailure,
    resetAuthState 
} = authSlice.actions;

// Enhanced selectors
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectUserId = (state: { auth: AuthState }) => state.auth.userId;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectLogoutLoading = (state: { auth: AuthState }) => state.auth.logoutLoading;
export const selectLogoutError = (state: { auth: AuthState }) => state.auth.logoutError;

export default authSlice.reducer;