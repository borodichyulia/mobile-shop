import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  mobiles: [],
  loading: 'idle',
  checkoutMobile: [],
};

export const fetchMobile = createAsyncThunk('mobile/fetchMobile', async () => {
  const response = await axios.get(
    'https://api.npoint.io/e44df0e0c0a0c3faff79'
  );
  const data = response.data;
  console.log(data);
  return data;
});

export const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    setMobile: (state, action) => {
      const addMobile = state.checkoutMobile.find(
        (mobile) => mobile.id === action.payload.id
      );
      if (addMobile) {
        addMobile.amount += 1;
      } else {
        const addMobile = {};
        Object.assign(addMobile, action.payload);
        addMobile.amount = 1;
        console.log(addMobile);
        state.checkoutMobile = state.checkoutMobile.concat(addMobile);
      }
    },
    deleteMobile: (state, action) => {
      const removeMobileIndex = state.checkoutMobile.findIndex(
        (mobile) => mobile.id === action.payload.id
      );
      state.checkoutMobile.splice(removeMobileIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMobile.pending, (state) => {
      state.loading = 'pending';
      console.log(`mobile:1`);
    });
    builder.addCase(fetchMobile.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.mobiles = action.payload;
      console.log(action);
    });
    builder.addCase(fetchMobile.rejected, (state) => {
      state.loading = 'failed';
      state.mobiles = [];
      console.log(`mobile:2`);
    });
  },
});

export const { setMobile, deleteMobile } = mobileSlice.actions;

export default mobileSlice.reducer;
