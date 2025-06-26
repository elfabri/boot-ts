/* Tuples
 * A tuple is a special kind of array where
 * each position has a specific, known type.
 *
 * The length is fixed and the type of index is known,
 * so it is safe to use on small collections.
 *
 * You need to provide explicit typing with touples.
 *
 * Assignment
 * Support.ai is adding support ticket automation.
 * We need each ticket to be a sequence of data types.
 *
 * Complete the createTicket function.
 * It takes a prevTicket number and comment string
 * as inputs and returns a tuple.
 *
 * Return a tuple with the following values in this order:
 *
 *   Increment the prevTicket
 *   The comment
 *   A boolean for if the comment contains
 *   the word critical (case insensitive!)
 *
 */

export function createTicket(
  prevTicket: number,
  comment: string,
): [number, string, boolean] {
  return [++prevTicket, comment, comment.toLowerCase().includes("critical")];
}
