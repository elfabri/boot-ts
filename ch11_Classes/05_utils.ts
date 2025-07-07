/* Abstract Classes and Members
 *
 * An abstract class is a class that cannot be instantiated
 * directly. It's a template for inheritance, forcing subclasses
 * to implement specific methods or properties.
 *
 * Within an abstract class, abstract methods are those which
 * do not have an implementation, because the implementation
 * must be provided by the subclass.
 *
 * However, it can still have regular methods which are then
 * shared by all subclasses.
 *
 * Assignment
 * We'll never use Customer objects directly in our Support.ai - it's
 * just a template class for subclasses to inherit from.
 *
 * Enforce this behavior at compile time.
 */

export abstract class Customer {
  firstName: string;
  lastName: string;
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
    super(firstName, lastName, balance)
  }

  getBalance(): number {
    return this.balance;
  }
}
