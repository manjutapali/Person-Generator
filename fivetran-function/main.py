from faker import Faker

def main(request):
    (insertTransactions, deleteTransactions, newTransactionCursor) = generateProfile()
    insert = {}
    insert['transactions'] = insertTransactions
    delete = {}
    delete['transactions'] = deleteTransactions
    state = {}
    state['transactionsCursor'] = newTransactionCursor
    transactionsSchema = {}
    transactionsSchema['primary_key'] = ['username', 'sex']
    schema = {}
    schema['transactions'] = transactionsSchema
    response = {}
    # Add updated state to response
    response['state'] =  state
    response['insert'] = insert
    response['delete'] = delete
    response['schema'] = schema
    response['hasMore'] = False
    return response

def generateProfile():
    fake = Faker();
    profile = fake.simple_profile();
    insertTransactions = []
    insertTransactions.append(profile);
    newTransactionCursor=1
    return (insertTransactions, [], newTransactionCursor)
