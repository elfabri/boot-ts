/* Named Tuples
 * You can label tuple elements. This labels are
 * quite literally just names for the TypeScript tooling,
 * they don't change how the values are accessed, so the names
 * won't be consider while destructuring named tuples.
 *
 * Assignment
 *
 * The formatTicket function accepts a Ticket tuple and returns
 * a formatted string describing the ticket.
 *
 * Fix the destructuring of the tuple.
 *
 * Expected format: "#1 Your app stinks! [WONTFIX]"
 */

export type Ticket = readonly [id: number, comment: string, label: string];

// don't touch above this line

export function formatTicket(ticket: Ticket) {
  const [id, comment, label] = ticket;
  return `#${id} ${comment} [${label}]`;
}
