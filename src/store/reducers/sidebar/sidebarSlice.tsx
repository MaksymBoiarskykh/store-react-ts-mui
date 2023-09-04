import { createSlice } from "@reduxjs/toolkit";
// import { isBigSize } from "../../../hooks/useScreenSize";

interface SidebarState {
  open: boolean;
  //   isBigScreen: boolean;
}

const initialState: SidebarState = {
  open: false,
  //   isBigScreen: isBigSize,
};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    changeSidebarStatus(state) {
      state.open = !state.open;
    },
  },
});

export const { changeSidebarStatus } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
