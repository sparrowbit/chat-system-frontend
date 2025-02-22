import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string | null
  token: string | null
}

const initialState: User = {
  username: null,
  token: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserContext: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      console.log(state);

    },
    getUserContext: (state) => {
      return state;
    },
  }
});

export default userSlice.reducer;

export const { addUserContext, getUserContext } = userSlice.actions;
