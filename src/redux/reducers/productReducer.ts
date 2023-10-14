import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductState = {
    details: any;
    condition: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
    purchaseOptions: any;
    description: string;
    images: any[];
    activeImage: any;
};

const initialState: ProductState = {
    details: {},
    condition: '',
    price: {
        currency: '',
        amount: 0,
        decimals: 0
    },
    purchaseOptions: {},
    description: '',
    images: [],
    activeImage: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductDetails: (state, action: PayloadAction<any>) => {
            state.details = action.payload;
        },
        setProductCondition: (state, action: PayloadAction<string>) => {
            state.condition = action.payload;
        },
        setProductPrice: (state, action: PayloadAction<any>) => {
            state.price = action.payload;
        },
        setPurchaseOptions: (state, action: PayloadAction<any>) => {
            state.purchaseOptions = action.payload;
        },
        setProductDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setImages: (state, action: PayloadAction<any[]>) => {
            state.images = action.payload;
            state.activeImage = action.payload[0];
        },
        setActiveImage: (state, action: PayloadAction<any>) => {
            state.activeImage = action.payload;
        }
    }
});

export const {
    setProductDetails,
    setProductCondition,
    setProductPrice,
    setPurchaseOptions,
    setProductDescription,
    setImages,
    setActiveImage
} = productSlice.actions;
export default productSlice.reducer;