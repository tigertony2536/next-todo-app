import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

// Define a type for the slice state
export interface FormState {
	email: string;
	username: string;
	password: string;
}

const initialState: FormState = {
	email: "",
	username: "",
	password: "",
};

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		// Handle form input changes
		setEmail: (state: FormState, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setUsername: (state: FormState, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state: FormState, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
});

export const { setEmail, setUsername, setPassword } = formSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEmail = (state: RootState) => state.form.email;
export const selectUsername = (state: RootState) => state.form.username;
export const selectPassword = (state: RootState) => state.form.password;

export default formSlice.reducer;
