import { RootState } from '../store/store';
import axios from 'axios';
import { setProductDetails, setProductPrice, setProductCondition, setPurchaseOptions, setProductDescription, setImages } from '../reducers/productReducer';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


const BASE_API_URL = 'https://api.mercadolibre.com';

export const fetchProductDetails = (productId: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/items/${productId}`);
        const product = response.data;
        const decimals = (product.price - Math.floor(product.price)) * 100;

        dispatch(setProductDetails(product));
        dispatch(setProductPrice({
            currency: product.currency_id,
            amount: Math.floor(product.price),
            decimals: Math.round(decimals)
        }));
        dispatch(setProductCondition(product.condition));
        dispatch(setImages(product.pictures));

        const descriptionResponse = await axios.get(`${BASE_API_URL}/items/${productId}/description`);
        const productDescription = descriptionResponse.data.plain_text;

        dispatch(setProductDescription(productDescription));

    } catch (error) {
        console.error("Failed to fetch product details:", error);
    }
};