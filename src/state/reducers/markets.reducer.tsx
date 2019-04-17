import { marketsConstants } from '../constants/markets.constants'

const initialState = {
    assets: [],
    isLoading: true,
    error: null
};

const payments = (state = initialState, action:any) => {
    switch(action.type) {
        case marketsConstants.GET_MARKET_PRICES_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case marketsConstants.GET_MARKET_PRICES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                assets: action.assets
            };
        case marketsConstants.GET_MARKET_PRICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
    }

    return state
};

export default payments
