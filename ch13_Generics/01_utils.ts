/* Generics
 * Generic Types allow you to create reusable logic
 * that works with many types rather than a single one.
 *
 * TypeScript's utility types are all generics.
 *
 * T is the name of the type parameter. T is just
 * a variable name, we could call it anything,
 * but T is a common convention.
 *
 * Assignment
 * At Support.ai, we store all support requests
 * in a queue. We also store emails, numbers,
 * and payments in queues... it's a legacy thing.
 *
 * Complete the getFirst utility function.
 * It should be a generic function that returns
 * the first item in a list—or undefined if the list is empty. 
 */

export function getFirst<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}
