/* "As Const" and Object.freeze
 *
 * The "as const" assertion creates a read only
 * type using literal values.
 *
 * It works great with objects and unlike most utility
 * types and Object.freeze, it automatically makes
 * all nested structures readonly as well
 *
 * The Object.freeze() is a built-in JavaScript
 * function that prevents modification to the top level
 * of an object at runtime. It makes the object immutable,
 * but it does not affect TypeScript's type system.
 *
 * Assignment
 * Support.ai default mail preferences
 * (the ones each new user starts with)
 * should be locked so they can't be mistakenly changed.
 *
 * Fix the exported defaultPreferences object.
 *
 * Run the test as-is and notice it is not compile-time 
 * immutable.
 *
 * Make it compile-time immutable.
 *
 * Take a look at the tests... while the "run test"
 * expects compile-time immutability, the "submit tests"
 * also expects run-time immutability.
 *
 * Make defaultPreferences both compile-time and 
 * run-time immutable.
 */

export const defaultPreferences = Object.freeze({
  name: "Kreese",
  doNotDisturb: false,
  outOfOffice: false,
} as const);
