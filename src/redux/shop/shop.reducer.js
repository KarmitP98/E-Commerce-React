import ShopActionType from './shop.types';

const initialState = {
    collections: null
};

const shopReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ShopActionType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: payload
            };
            break;
        default:
            return state;
    }
};

export default shopReducer;
