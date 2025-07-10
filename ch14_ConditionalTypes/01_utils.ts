/* Conditional Types
 *
 * Conditional Types are used to create new types based on
 * conditions within the type system.
 *
 * Some built-in conditional types are:
 *
 *   * type Extract<T, U> = T extends U ? T : never;
 *   * type Exclude<T, U> = T extends U ? never : T;
 *   * type NonNullable<T> = T extends null | undefined ? never : T;
 *
 * Assignment
 * Support.ai is experimenting with auto-replies—but
 * only for tickets that seem emotionally safe.
 *
 * Create and export a SentimentString utility type
 * that evaluates to:
 *   * "mad" | "furious" if T includes { angry: true }
 *   * "content" | "happy" otherwise
 */

export type SentimentString<T> = T extends { angry: true } ? "mad" | "furious" : "content" | "happy";
