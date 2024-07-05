import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../@types/interfaces/user.types";
import { IUserReducerInitialState } from "../../@types/reducer.types";

const initialState: IUserReducerInitialState = {
  user: null,
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    userExist: (state, action: PayloadAction<TUser>) => {
      state.loading = false;
      state.user = action.payload;
    },
    userNotExist: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { userExist, userNotExist } = userReducer.actions;
