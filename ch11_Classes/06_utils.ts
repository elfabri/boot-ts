/* Classes Implement Interfaces
 * Classes can implement interfaces using the implements clause.
 * This enforces that the class adheres
 * to the structure defined by the interface.
 *
 * Assignment
 * Let's refactor the code to use interfaces.
 *
 * Run the code as-is. Notice that the methods
 * in the RegularCustomer class are not returning
 * the types the test suite expects.
 *
 * Ensure that the RegularCustomer class implements
 * the Customer and User interfaces - this should
 * give you some new type hinting information
 * to show you what format the data should be returned in.
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

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getBalance() {
    return this.balance;
  }
}
