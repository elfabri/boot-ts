/* Partial Utility Type
 *
 * There are several built-in utility types
 * that transform existing types into new ones.
 * One of the most useful is Partial<T>,
 * which makes all properties of a type optional.
 *
 * Instead of copy/pasting the type definition,
 * the Partial<T> utility type allows us to generate
 * a new type based on an existing one. That also means
 * if the original is ever updated, the new type
 * created with Partial<T> type will automatically
 * have those changes!
 *
 * When the type has nested objects on a property,
 * a partial type will only make optional the top level
 * properties. If a property like the one mentioned, is
 * not null, it will require to have all of its nested
 * properties, not just some of them, since they will
 * not be optionals.
 *
 * Assignment
 * Fix the compile-time bug in the updateUser function.
 * It should accept a User object,
 * but where each property is optional.
 */

export interface User {
  id: string;
  email: string;
}

export function updateUser(user: Partial<User>) {
  if (user.id) {
    return "can't update id";
  }
  if (user.email) {
    return `updating email to ${user.email}`;
  }
  return "nothing to update";
}
