
const INITIAL_STATE = {
    products: []
};

const productReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state
            }
        case 'UPDATE_PRODUCT':
            return {
                ...state
            }
        default:
            return state;
    }

}

export default productReducer;