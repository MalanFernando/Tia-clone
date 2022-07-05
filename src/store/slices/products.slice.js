import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action)=>{
            return action.payload
        }
    }
})

export const { setProducts } = productsSlice.actions;

export const getAllProducts = () => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get('https://api.stripe.com/v1/products')
        .then((res) => dispatch(setProducts(res.data)))
        // .finally(() => dispatch(setIsLoading(false)));
}

export default productsSlice.reducer;