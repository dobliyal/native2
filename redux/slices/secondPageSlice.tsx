
import { createSlice } from '@reduxjs/toolkit';

const secondPageSlice = createSlice({
  name: 'secondPage',
  initialState: { count: 0 },
  reducers: {
    incrementByThree: (state) => {
      state.count += 3;
    },
  },
});

export const { incrementByThree } = secondPageSlice.actions;
export default secondPageSlice;
