let response;

const {getCurrencyExchangeRate} = require('./external-api-calls/currencyExchangeRate');
const {getLocalCurrency} = require('./external-api-calls/getLocalCurrency');
const {convertProductPrice} = require('./controllers/convertPriceToCurrencyRate');

exports.lambdaHandler = async (event, context) => {
    try {
        const localCurrency = await getLocalCurrency(event);
        const rate = await getCurrencyExchangeRate(localCurrency)
        const convertedProductPrice = convertProductPrice(rate)
    
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                'local_currency': localCurrency,
                'usd_to_local_rate': rate,
                'converted_price': convertedProductPrice,
                'version': '1'
            })
        }
    } catch (err) {
        console.log(err);
        response = {
            'statusCode': 400,
            'body': JSON.stringify({
            'message': 'ERROR - View Cloud Watch for more information'    
            })
        }
    }

    return response
};
