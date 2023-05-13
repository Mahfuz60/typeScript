"use strict";
//Access modifier
class BankAccount {
    constructor(id, name, balance, bankType) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankType = bankType;
    }
    getBalance() {
        console.log(`My current Balace is: ${this._balance} tk`);
    }
    addDeposite(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(100001, 'john Bou', 2002, 'saving account');
// console.log(myAccount);
myAccount.getBalance();
