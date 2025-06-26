/* Readonly
 * To keep the tuple's length constant, you have to
 * declare them as readonly variables, and keep in mind
 * that "readonly" is TypeScript specific, which means
 * it's enforced at compile-time but not at run-time.
 *
 * Assignment
 *
 * The Ticket tuple now has a fourth property: "resolved"
 * a boolean indicating whether the ticket has already
 * been resolved.
 *
 * Fix the resolveTicket function. It takes as input a
 * Ticket tuple and returns a newly resolved Ticket. 
 *
 * Update the resolveTicket function to instead return
 * a new copy instead of trying to modify the original.
 */

export type Ticket = readonly [number, string, boolean, boolean];

// don't touch above this line

export function resolveTicket(ticket: Ticket) {
  return [ticket[0], ticket[1], ticket[2], true] as Ticket;
}
