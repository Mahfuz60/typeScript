//Access modifier
class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;
  public bankType: string;

  constructor(id: number, name: string, balance: number, bankType: string) {
    this.id = id;
    this.name = name;
    this._balance = balance;
    this.bankType = bankType;
  }
  getBalance() {
    console.log(`My current Balace is: ${this._balance} tk`);
  }

  addDeposite(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(100001, 'john Bou', 2002, 'saving account');
// console.log(myAccount);
myAccount.getBalance();
