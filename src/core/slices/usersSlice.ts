import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "@core/types";

type State = {
  count: number;
  users: User[];
};

const initialState: State = {
  count: 0,
  users: [],
};

const usersSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addUser(state: State, action: PayloadAction<User>): void {
      state.users = [action.payload, ...state.users];
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
