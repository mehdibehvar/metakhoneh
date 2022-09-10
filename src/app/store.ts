import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import qoutesSlice from '../features/qoutes/qoutesSlice';
export const store = configureStore({
    reducer: {
        counter:counterSlice,
        qoute:qoutesSlice
  // This is where we add reducers.
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;
///ReturnType<Type>
//Constructs a type consisting of the return type of function Type.