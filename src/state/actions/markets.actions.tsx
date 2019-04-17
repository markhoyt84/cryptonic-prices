import { marketsConstants } from '../constants/markets.constants'
import { marketsService } from '../services/markets.service'

export const advancesActions = {
    getMarketPrices
};

function getMarketPrices () {
    return (dispatch: any) => {
        dispatch(request());
        marketsService.getMarketPrices()
            .then(
                response => {
                    alert(JSON.stringify(response));
                    dispatch(success(response))
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request () { return { type: marketsConstants.GET_MARKET_PRICES_REQUEST } }
    function success (assets: any) { return { type: marketsConstants.GET_MARKET_PRICES_SUCCESS, assets } }
    function failure (error: any) { return { type: marketsConstants.GET_MARKET_PRICES_FAILURE, error } }
}
