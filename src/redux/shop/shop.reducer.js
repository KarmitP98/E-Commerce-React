import ShopActionType from './shop.types';

const initialState = {
    collections: null,
    fetching: false,
    errorMessage: ''
};

const shopReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ShopActionType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: payload
            };
        case ShopActionType.FETCH_COLLECTIONS_START:
            return {...state, fetching: true,}
        case ShopActionType.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: payload,
                fetching: false
            }
        case ShopActionType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                errorMessage: payload,
                fetching: false
            }
        default:
            return state;
    }
};

export default shopReducer;
