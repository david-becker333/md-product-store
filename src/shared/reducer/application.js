
export const APP_IS_LOADING = 'app/application/APP_IS_LOADING';


const INITIAL_STATE = {
   appIsLoading: false
};


/** Selectors */
export const selectIsAppLoading = (state) => {
   return state.appIsLoading;
};



export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case APP_IS_LOADING:
            return {
                ...state
            }
       
        default:
            return state;
    }

}


/* Action declarations */
export const appIsLoading = (bool) => {
    return {
        type: APP_IS_LOADING,
        bool
    }
}
