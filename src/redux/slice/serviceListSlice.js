import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const serviceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    serviceListLoading(state) {
      state.loading = true;
    },
    serviceListSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    serviceListError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
})

export const {serviceListLoading, serviceListSuccess, serviceListError} = serviceListSlice.actions;
export default serviceListSlice.reducer;