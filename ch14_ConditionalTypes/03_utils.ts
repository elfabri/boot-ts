/* Mapped Types
 *
 * Mapped types are a way to create new types
 * with dynamic properties based on existing types.
 *
 * Mapped types are really useful for making
 * properties optional or readonly, but it's
 * an incredibly powerful (and potentially
 * dangerously confusing) tool. You can also use them
 * to change the value type of properties.
 *
 * Assignment
 * The QA team at Support.ai needs to reset form data
 * to a clean state before each test run. You’ve been asked to:
 *
 * Complete the Blank<T> type. It keeps all the original keys of T,
 * but forces them to all be null
 *
 * Complete the resetForm function that:
 *   * Accepts an object of type T
 *
 *   * Returns a new object with the same keys and
 *   all values set to null
 *
 *   * Does not mutate the original input object.
 */

export type Blank<T> = {
  [K in keyof T]: null;
};

export function resetForm<T>(form: T): Blank<T> {
  let out = { ...form } as Blank<T>;
  
  for (const key in form) {
    if (Object.prototype.hasOwnProperty.call(form, key)) {
      out[key as keyof T] = null;
    }
  }
  return out;
}
