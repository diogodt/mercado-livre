import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';
import productReducer from '../reducers/productReducer';

const store = configureStore({
    reducer: {
        search: searchReducer,
        product: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;