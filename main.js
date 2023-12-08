// main.js
const Account = require('./account');
const Transaction = require('./transaction');

// Create an account
const myAccount = new Account('A001', 1000);

// Perform transactions
Transaction.executeTransaction(myAccount, 500, 'deposit');
Transaction.executeTransaction(myAccount, 200, 'withdraw');
Transaction.executeTransaction(myAccount, 1500, 'withdraw');

// Display account information
myAccount.displayInfo();
