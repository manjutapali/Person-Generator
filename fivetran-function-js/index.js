const functions = require('@google-cloud/functions-framework');

functions.http('main', (req, res) => {
    let [insertTransactions, deleteTransactions, newTransactionsCursor] = apiResponse();

    console.log("Returning the response...")
    
    // Populate records and state
    res.send({
        state: {
            transactionsCursor: newTransactionsCursor
        },
        insert: {
            transactions: insertTransactions
        },
        delete: {
            transactions: deleteTransactions
        },
        schema : {
            transactions : {
                primary_key : ['order_id', 'date']
            }
        },
        hasMore : false
    });
});


function apiResponse() {
    var insertTransactions = [
            {"date":'2017-12-31T05:12:05Z', "order_id":1001, "amount":'$1200', "discount":'$12'},
            {"date":'2017-12-31T06:12:04Z', "order_id":1001, "amount":'$1200', "discount":'$12'},
    ];
    var deleteTransactions = [
            {"date":'2017-12-31T05:12:05Z', "order_id":1000, "amount":'$1200', "discount":'$12'},
            {"date":'2017-12-31T06:12:04Z', "order_id":1000, "amount":'$1200', "discount":'$12'},
    ];
    return [insertTransactions, deleteTransactions, '2018-01-01T00:00:00Z'];
}
