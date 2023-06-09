import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VendorsState {
  vendorList: any[];
  page: number;
}

const initialState: VendorsState = {
  vendorList: [],
  page: 0,
};

export const vendorsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setVendors: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.vendorList = [...state.vendorList, ...action.payload];
    },

    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setVendors, incrementPage } = vendorsSlice.actions;

export default vendorsSlice.reducer;
