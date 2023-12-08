// transaction.js
class Transaction {
    static executeTransaction(account, amount, type) {
        switch (type) {
            case 'deposit':
                account.deposit(amount);
                break;
            case 'withdraw':
                account.withdraw(amount);
                break;
            default:
                console.log("Invalid transaction type");
        }
    }
}

module.exports = Transaction;
