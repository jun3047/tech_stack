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

const styleSlice = createSlice({
    name:'styleSlice',
    initialState:{value: {}},
    reducers:{
      setStyle:(state, actions: PayloadAction<any>)=>{
        state.value = actions.payload;
      }
    }
  });



export default {isShowDialogSlice, styleSlice};
export const {setShowDialog} = isShowDialogSlice.actions;
export const {setStyle} = styleSlice.actions;