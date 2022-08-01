import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { setShowDialog, setStyle } from './isShowDialogSlice';

const rootReducer = combineReducers({
  isShowDialog: setShowDialog,
  style : setStyle
})

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export default store;