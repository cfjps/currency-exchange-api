const axios = require('axios')

let currencyRate;

async function getCurrencyExchangeRate(localCurrency){
    try{
        const FOREX_API_KEY = process.env.FOREX_API_KEY;
        const API_URL = `http://api.currencylayer.com/live?format=1&access_key=${FOREX_API_KEY}&currencies=${localCurrency}`;
        const promise = axios.get(API_URL)
        
        if(localCurrency === 'USD') {
            currencyRate = 1;
            
        } else {
            const currencyConvertTo = localCurrency;
            const currencyConvertFrom = 'USD';
            currencyRate = promise.then((response) => response.data.quotes[`${currencyConvertFrom}${currencyConvertTo}`]);
        }

        return currencyRate;

    } catch (err) {
        console.log(error);
        return error;
    }
    
}

module.exports = {getCurrencyExchangeRate};