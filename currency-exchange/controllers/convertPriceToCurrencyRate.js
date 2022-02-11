// GET product data
const DATA = {
    'id': 10001,
    'product_name': 'Black Reebok T-Shirt',
    'product_price': 70.49
}

function convertProductPrice(exchangeRate){
    const product = DATA.product_price;
    const convertedPrice = product * exchangeRate;
    
    return convertedPrice;
    
}

module.exports = {convertProductPrice};