/* Protected Data Members
 * The "protected" keyword is unique to TypeScript, it limits the access
 * to values, properties and/or methods, like the "private" keyword or
 * the '#' in JavaScript, but unlike them, the protected variables can still
 * be accessed from sub classes.
 *
 * Assignment
 * A RegularCustomer is just a more specific type of Customer
 * where their balance needs to be accessible via the getBalance method.
 *
 * Complete the RegularCustomer's constructor. It should simply
 * call its parent's constructor.
 * Notice that the getBalance method is trying to access a private field.
 *
 * Fix the error by updating the Customer class
 * to make the balance field protected, not private.
 */

export class Customer {
  firstName: string;
  lastName: string;
  // #balance: number;
  protected balance: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class RegularCustomer extends Customer {
  constructor(firstName: string, lastName: string, balance: number) {
    super(firstName, lastName, balance);
  }

  getBalance() {
    return this.balance;
  }
}
