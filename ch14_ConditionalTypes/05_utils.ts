/* Extracting Keys from Types
 *
 * Mapped Types can be use to extract keys
 *
 * Assignment
 * Support.ai is building a “signal weighting” tool.
 * They want to automatically pull numeric fields
 * from a given type and let engineers assign weights to them.
 *
 * Create and export a NumberKeys<T> type that:
 *
 *   * Iterates over keys of T
 *   * Filters to only keys whose values are number
 *   * Evaluates to a union of just those keys
 *
 */

export type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T]
