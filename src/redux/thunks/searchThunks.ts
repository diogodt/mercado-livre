import { RootState } from '../store/store';
import axios from 'axios';
import { setSearchResults } from '../reducers/searchReducer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const BASE_API_URL = 'https://api.mercadolibre.com';

export const autocompleteSearch = (query: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/sites/MLA/search?q=${query}`);
        const results = response.data.results.slice(0, 4);
        dispatch(setSearchResults(results));
    } catch (error) {
        console.error("Failed to fetch autocomplete results:", error);
    }
};

export const fullSearchAction = (query: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/sites/MLA/search?q=${query}`);
        const results = response.data.results.slice(0, 4);
        dispatch(setSearchResults(results));
    } catch (error) {
        console.error("Failed to fetch search results:", error);
    }
};