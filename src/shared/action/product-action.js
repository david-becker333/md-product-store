
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

/** 
 * Fetch products action
 */
const fetchProducts = () => {
    return (dispatch, getState) => {
        fetch("/some").then((resp) => {
            dispatch(recieveProducts(resp.data));
        }).catch((err) => {
            console.log("Error: ", err);
        });
        
    };
}
const receiveFetchedProducts = (payload) => {
    return {
        type: FETCH_PRODUCTS,
        payload
    }
}
