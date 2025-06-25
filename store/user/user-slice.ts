import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
  _id: string;
  username: string;
  email: string;
  image: string;
}

export interface UserState {
  token: string | null;
  user: UserSlice | null;
}

const initialState: UserState = {
  token: null,
  user: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
    logIn: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    refreshToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    }
  }
});

export const { logOut, logIn, refreshToken } = userSlice.actions;

export default userSlice.reducer;
