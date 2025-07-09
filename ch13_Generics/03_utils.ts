/* Generic Constraints
 *
 * Constraints are just interfaces that allow us
 * to write generics that only operate
 * within the constraints of a given interface type.
 * Default is the "any" type constraint, which means
 * no constraints at all.
 *
 * We can use the "extends" keyword to constrain
 * the type parameter to have certain properties.
 *
 * Interfaces containing a set of specific properties
 * can be used to constrain the generics types,
 * filtering those generics that fulfill the interface.
 *
 * Assignment
 * Marketing wants to send a campaign
 * to everyone with an email address on file.
 *
 * Complete the pluckEmails function. It should:
 *   * Accept an array of objects of type T,
 *   but only if they include an email: string property
 *
 *   * Return a new array of just the email addresses
 */

interface HasEmail {
  email: string
}

export function pluckEmails<T extends HasEmail>(arr: T[]) {
  let emailAdds: string[] = [];

  for (const e of arr) {
    emailAdds.push(e.email);
  }

  return emailAdds;
}
