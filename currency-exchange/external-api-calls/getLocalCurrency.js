const axios = require('axios')

async function getLocalCurrency(event){
    try{
        const requestWANIP = event.requestContext.identity.sourceIp;
        const API_URL = `https://ipapi.co/${requestWANIP}/json/`;
        const promise = axios.get(API_URL)
        const data = promise.then((response) => response.data);
        const localCurrency = data.then((data) => data.currency);
        
        return localCurrency;
    } catch {
        console.log(error);
        return error;
    }
    
}

module.exports = {getLocalCurrency};