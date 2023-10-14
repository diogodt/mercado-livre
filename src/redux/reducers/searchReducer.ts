import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
    results: any[];
    query: string;
};

const initialState: SearchState = {
    results: [],
    query: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state, action: PayloadAction<any[]>) => {
            state.results = action.payload;
        },
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        }
    }
});

export const { setSearchResults, setQuery } = searchSlice.actions;
export default searchSlice.reducer;