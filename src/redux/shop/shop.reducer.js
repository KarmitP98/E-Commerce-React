import SHOP_DATA from './shop.data';
import ShopActionType from './shop.types';

const initialState = {
    collections: SHOP_DATA
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
