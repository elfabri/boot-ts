/* Mapped Type with Conditionals
 *
 * Mapped types can use conditionals to filter the properties
 * from other types.
 *
 * Assignment
 * The compliance team at Support.ai is reviewing
 * what user-visible data can be edited,
 * and what should be locked.
 *
 * Complete the EditableFields<T> type. It should:
 *   * Return a new type with the same keys as T
 *   * Replace all function or object fields with never
 *   * Keep primitives (string, number, boolean, etc.) as-is
 */

export type EditableFields<T> = {
  [K in keyof T]: T[K] extends Function | object ? never : T[K];
};
