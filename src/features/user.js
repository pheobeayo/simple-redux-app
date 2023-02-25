import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = { name: "", age: 0, email: "" };
export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        Login: (state, action) => {
            state.value = action.payload;
        },
        Logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;