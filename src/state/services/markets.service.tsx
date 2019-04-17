import { AppSettings } from '../../helpers/AppSettings'
const MarketClient = require('kraken-api');
const market = new MarketClient(AppSettings.getMarketKey(), AppSettings.getMarketSecret());

export const marketsService = {
    getMarketPrices
};

async function getMarketPrices () {
    return await market.api('Assets');
}
