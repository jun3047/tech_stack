import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const isShowDialogSlice = createSlice({
  name:'isShowDialogSlice',
  initialState:{value: false},
  reducers:{
    setShowDialog:(state, actions: PayloadAction<boolean>)=>{
      state.value = actions.payload;
    }
  }
});

export default isShowDialogSlice;
export const {setShowDialog} = isShowDialogSlice.actions;