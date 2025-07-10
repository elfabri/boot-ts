/* Infer
 *
 * The infer keyword, when used inside a conditional type,
 * lets us use the type of a value from the true branch.
 *
 * Assignment
 * Support.ai is building a form preview tool.
 * It lets developers generate mock inputs for
 * internal functions—but first, it needs to know
 * what kind of input each function expects.
 *
 * Create and export a generic InputTypeOf type that:
 *   * Extracts the type of the first parameter
 *   from a function type T. The function can return any type.
 *
 *   * Falls back to unknown if T isn’t a function or
 *   takes no parameters.
 */

export type InputTypeOf<T> = T extends (first: infer R, ... args: any[]) => any ? R : unknown;
