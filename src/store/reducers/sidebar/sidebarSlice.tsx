import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  open: boolean;
}

const initialState: SidebarState = {
  open: false,
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
