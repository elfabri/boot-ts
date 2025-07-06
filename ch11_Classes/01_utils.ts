/* Classes
 *
 * JavaScript classes, but with the added benefit of static typing.
 * One of the biggest differences is that you'll see
 * type annotations on all the class properties
 * at the top level of the class declaration.
 *
 * Assignment
 * The manager needs us to refactor the user logic
 * to follow an object-oriented structure.
 *
 * Create a Customer class:
 *
 *   * Add 2 string properties: firstName and lastName
 *
 *   * Write a constructor that sets the 2 properties you specified
 *
 *   * Complete the getFullName method.
 *   It should return a full name by concatenating
 *   the customer's first and last names
 *   (with a space in the middle).
 */

export class Customer {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
