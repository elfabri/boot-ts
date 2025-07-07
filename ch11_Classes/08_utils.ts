/* The "this" Type
 *
 * The only question more difficult than "what is
 * the meaning of life?" is "what is the value of this?".
 *
 * TypeScript can infer the type of "this" very well,
 * it can also be set explicitly by adding the "this" 
 * parameter on the methods, and setting it's type.
 *
 * Assignment
 * We need to add some code to keep track of the number
 * of times a RegularCustomer checks their balance.
 *
 * Add a private balanceQueries property (number).
 *
 * Each time getBalance() is called, increment the count.
 * Add a getter for the new private field
 */

interface User {
  firstName: string;
  lastName: string;
  
  getFullName(): string;
}

interface Customer {
  getBalance(): number;
}

export class RegularCustomer implements User, Customer {
  firstName: string;
  lastName: string;
  protected balance: number;
  #balanceQueries: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.#balanceQueries = 0;
  }
  
  // getFullName(): string { <- this is infer
  getFullName(this: RegularCustomer): string {  // this is explicitly typed
    return `${this.firstName} ${this.lastName}`;
  }

  // getBalance(): number {
  getBalance(this: RegularCustomer): number {
    this.#balanceQueries++;
    return this.balance;
  }

  // getBalanceQueries(): number {
  getBalanceQueries(this: RegularCustomer): number {
    return this.#balanceQueries;
  }
}
