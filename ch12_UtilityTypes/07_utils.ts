/* Omit Utility Type
 *
 * The Omit<T, K> utility type is the opposite of Pick<T, K>.
 * It creates a new type by excluding a set of properties
 * from an existing type.
 *
 * It can be very useful when removing sensitive or
 * unnecessary properties from a type.
 * For example, maybe you need to remove
 * a password field from a user object
 * before responding to an API request.
 *
 * Assignment
 * Fix the bug in the UserWithoutID type
 * by omitting the id property.
 */

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

export type UserWithoutID = Omit<User, "id">;

export function stripID(user: User): UserWithoutID {
  const { name, email, age } = user;
  return { name, email, age };
}
