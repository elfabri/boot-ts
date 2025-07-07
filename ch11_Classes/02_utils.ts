/* Private Class Members
 *
 * Private Class Members are delcared with '#', and are supported since
 * ES2022.
 *
 * Assignment
 * Add a private balance (number) property
 * and include it in the constructor.
 *
 * Complete the purchase() method. It subtracts
 * the cost from the balance and returns the new balance.
 */

export class Customer {
  firstName: string;
  lastName: string;
  #balance: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#balance = balance;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  purchase(cost: number): number {
    return this.#balance -= cost;
  }
}
