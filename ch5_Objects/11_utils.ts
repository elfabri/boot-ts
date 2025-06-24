/* Readonly Modifier
 * very similar to const, to mark object's properties as readonly
 *
 * Assignment
 * Support.ai interns introduced a bug
 * in our preferences logic. Fix it!
 *
 * Run the code as-is to see the error.
 * Only doNotDisturb and outOfOffice should be readonly.
 */

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  readonly doNotDisturb: boolean;
  readonly outOfOffice: boolean;
};
