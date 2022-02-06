// const { default: fetch } = await import('node-fetch')
const axios = require('axios')

async function getCurrencyExchangeRate(localCurrency){
    const FOREX_API_KEY = process.env.FOREX_API_KEY;
    const API_URL = `http://api.currencylayer.com/live?format=1&access_key=${FOREX_API_KEY}&${localCurrency}`;
    const promise = axios.get(API_URL)
    const currencyConvertTo = localCurrency;
    const currencyConvertFrom = 'USD';
    const currencyRate = promise.then((response) => response.data.quotes[`${currencyConvertFrom}${currencyConvertTo}`]);

    return currencyRate;
    
}

module.exports = {getCurrencyExchangeRate};