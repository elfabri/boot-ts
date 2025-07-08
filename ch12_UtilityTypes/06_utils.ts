/* Pick Utility Type
 * The Pick<T, K> utility type creates a new type
 * by selecting a subset of properties from an existing type.
 *
 * Pick is very useful for creating quick types
 * for functions that don't need everything
 * from the original type.
 *
 * Assignment
 * Fix the bug in the UserWithoutID type
 * so that it has the 3 properties it needs.
 */

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

export type UserWithoutID = Pick<User, "name" | "email" | "age">;

export function stripID(user: User): UserWithoutID {
  const { name, email, age } = user;
  return { name, email, age };
}
