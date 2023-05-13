"use strict";
//Access modifier
class BankAccount1 {
    constructor(id, name, balance, bankType) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankType = bankType;
    }
    //getter
    get balance() {
        return this._balance;
    }
    // getBalance():number {
    //  return this._balance;
    // }
    //setter
    set deposite(amount) {
        this._balance = this._balance + amount;
    }
}
// class StudentAccount extends BankAccount1 {
//   test() {}
// }
const myAccount2 = new BankAccount1(100001, 'john Bou', 200, 'saving account');
// console.log(myAccount2.getBalance());
console.log('Orginal Balance: ' + myAccount2.balance);
myAccount2.deposite = 100;
console.log('new balance is: ' + myAccount2.balance);
