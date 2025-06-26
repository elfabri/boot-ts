/* Optional Elements in Tuples
 *
 * You can make optional tuple elements using the ? modifier.
 *
 * Similar to optional function parameter, all required elements must come
 * before optional elements.
 *
 * When you have a bunch of optional properties,
 * it's recommended to just use an object type most of the time.
 *
 * Assignment
 *
 * Fix the type bug. The id number and comment string
 * should be required while label should be optional.
 *
 * Fix the formatTicket function. It should always
 * print an id (because it's required), but the [LABEL] part
 * should only print if the label is given.
 *
 * For example, these are both valid:
 *   #3 Send a dog
 *   #4 Give me my tuna! [REFUND]
 */

export type Ticket = readonly [id: number, comment: string, label?: string];

export function formatTicket(ticket: Ticket): string {
  const [id, comment, label] = ticket;
  const formattedL = label ? ` [${label}]` : "";
  return `#${id} ${comment}${formattedL}`;
}
