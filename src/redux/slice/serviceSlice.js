import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  loading: false,
  error: null,
}

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    serviceLoading(state) {
      state.loading = true;
    },
    serviceSuccess(state, action) {
      state.loading = false;
      state.item = action.payload;
    },
    serviceError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
})

export const {serviceLoading, serviceSuccess, serviceError} = serviceSlice.actions;
export default serviceSlice.reducer;