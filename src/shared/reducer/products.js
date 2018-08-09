import ProductService from '../service/product-service';


const _productService = new ProductService();


/** Constants */
export const PRODUCTS = 'app/products/PRODUCTS';
export const PRODUCTS_IS_LOADING = 'app/products/PRODUCTS_IS_LOADING';
export const PRODUCTS_LOADED = 'app/products/PRODUCTS_LOADED';
export const PRODUCTS_HAS_ERRORED = 'app/products/PRODUCTS_HAS_ERRORED';

export const PRODUCT_ADDS = 'app/products/PRODUCT_ADDS';
export const PRODUCT_ADDS_IS_LOADING = 'app/products/PRODUCT_ADDS_IS_LOADING';
export const PRODUCT_ADDS_LOADED = 'app/products/PRODUCT_ADDS_LOADED';
export const PRODUCT_ADDS_HAS_ERRORED = 'app/products/PRODUCT_ADDS_HAS_ERRORED';

export const PRODUCT = 'app/products/PRODUCT';
export const PRODUCT_IS_LOADING = 'app/products/PRODUCT_IS_LOADING';
export const PRODUCT_LOADED = 'app/products/PRODUCT_LOADED';
export const PRODUCT_HAS_ERRORED = 'app/products/PRODUCT_HAS_ERRORED';

/** Initial reducer state */
const INITIAL_STATE = {
    // holds product list
    products: [],
    productsIsLoading: false,
    productsHasErrored: false,
    
    // product adds
    productAdds: [],
    productAddsIsLoading: false,
    productAddsHasErrored: false,
    // holds a single product
    product,
    productIsLoading: false,
    productHasErrored: false,

};


/** Selectors */
export const selectProducts = (state) => {
    return state.products;
};

export const selectProduct = (state) => {
    return state.product;
};

export const selectIsProductLoading = (state) => {
    return state.productIsLoading;
};

export const selectIsProductsLoading = (state) => {
    return state.productsIsLoading;
};


/** Main reducer */
export const reducer = (state = INITIAL_STATE, action) => {

    const { payload } = action;

    switch (action.type) {

        // products reducers
        case PRODUCTS:
            return {
                ...state,
                products: payload.products
            }
        case PRODUCTS_IS_LOADING:
            return {
                ...state,
                productsIsLoading: payload.productsIsLoading
            }
        case PRODUCTS_LOADED:
            return {
                ...state,
                products: payload.products
            }
        case PRODUCTS_HAS_ERRORED:
            return {
                ...state,
                productsHasErrored: payload.productsHasErrored
        }

        // products reducers
        case PRODUCT_ADDS:
            return {
                ...state,
                productAdds: payload.productAdds
            }
        case PRODUCT_ADDS_IS_LOADING:
            return {
                ...state,
                productAddsIsLoading: payload.productAddsIsLoading
            }
        case PRODUCT_ADDS_LOADED:
            return {
                ...state,
                productAdds: payload.productAdds
            }
        case PRODUCT_ADDS_HAS_ERRORED:
            return {
                ...state,
                productAddsHasErrored: payload.productAddsHasErrored
        }

        // product reducers   
        case PRODUCT:
            return {
                ...state
            }
        case PRODUCT_IS_LOADING:
            return {
                ...state
            }
        case PRODUCT_LOADED:
            return {
                ...state
            }
        case PRODUCT_HAS_ERRORED:
            return {
                ...state
            }

        default:
            return state;
    }

}









/* Action declarations */
export const products = (params) => {
    return (dispatch, getState) => {
        _productService.findProducts(params)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(productsIsLoading(true));
                return response;
            })
            .then((response) => response.json())
            .then((products) => {
                dispatch(productsLoaded(products.groups))
                dispatch(productIsLoading(false))
            })
            .catch(() => dispatch(productsHasErrored(true)));
    }
}



export const productsLoaded = (products) => {
    return {
        type: PRODUCTS_LOADED,
        payload: { products }
    }
}

export const productsIsLoading = (bool) => {
    return {
        type: PRODUCTS_IS_LOADING,
        payload: { productsIsLoading: bool }
    }
}

export const productsHasErrored = (bool) => {
    return {
        type: PRODUCTS_HAS_ERRORED,
        payload: { productsHasErrored: bool }
    }
}


export const productAdds = (params) => {
    return (dispatch, getState) => {
        _productService.findProductAdds(params)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(productAddsIsLoading(true));
                return response;
            })
            .then((response) => response.json())
            .then((products) => {
                dispatch(productAddsLoaded(products.groups.slice(0, 3)))
                dispatch(productAddsIsLoading(false))
            })
            .catch(() => dispatch(productAddsHasErrored(true)));
    }
}

export const productAddsLoaded = (productAdds) => {
    return {
        type: PRODUCT_ADDS_LOADED,
        payload: { productAdds }
    }
}

export const productAddsIsLoading = (bool) => {
    return {
        type: PRODUCT_ADDS_IS_LOADING,
        payload: { productAddsIsLoading: bool }
    }
}

export const productAddsHasErrored = (bool) => {
    return {
        type: PRODUCT_ADDS_HAS_ERRORED,
        payload: { productAddsHasErrored: bool }
    }
}



export const product = (params) => {
    return (dispatch, getState) => {
        fetch("/some").then((resp) => {
            dispatch(productLoaded(resp.data));
        }).catch((err) => {
            console.log("Error: ", err);
        });

    };
}
export const productLoaded = (products) => {
    return {
        type: PRODUCT_LOADED,
        payload
    }
}

export const productIsLoading = (bool) => {
    return {
        type: PRODUCT_IS_LOADING,
        bool
    }
}

export const productHasErrored = (bool) => {
    return {
        type: PRODUCT_HAS_ERRORED,
        bool
    }
}
