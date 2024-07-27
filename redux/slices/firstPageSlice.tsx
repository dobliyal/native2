import { createSlice } from '@reduxjs/toolkit';

const firstPageSlice = createSlice({
  name: 'firstPage',
  initialState: { count: 0 },
  reducers: {
    incrementByTwo: (state) => {
      state.count += 2;
    },
  },
});

export const { incrementByTwo } = firstPageSlice.actions;
export default firstPageSlice;
