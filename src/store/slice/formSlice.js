import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  typeOrder: '',
  asset: '',
  amount: '',
  rate: '',
  country: '',
  city: '',
  comment: '',
  user: '',
  id: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTypeOrder: (state, action) => {
      state.typeOrder = action.payload;
    },
    setAsset: (state, action) => {
      state.asset = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setRate: (state, action) => {
      state.rate = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setID: (state, action) => {
      state.id = action.payload;
    },
  }
});

export const {
  setTypeOrder,
  setAsset,
  setAmount,
  setRate,
  setCountry,
  setCity,
  setComment,
  setUser,
  setID,
} = formSlice.actions;


export default formSlice.reducer;
