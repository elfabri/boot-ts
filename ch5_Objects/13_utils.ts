/* Satisfies
 *
 * The satisfies operator validates that a value
 * matches a specific type without changing its 
 * inferred type.
 *
 * It's used to create a type of literals, based on
 * an explicit type.
 *
 * Assignment
 * The Lead architect at Support.ai (me!) created
 * the MailPreferences type so that no one would
 * accidentally create malformed mail preferences
 * objects.
 *
 * ... someone did it anyways, but at least
 * TypeScript cought it!
 *
 *   1 - Run the code as-is to see the failing
 *       "satisfies" check
 *
 *   2 - Fix the typo(s)
 */

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

// don't touch above this line

export const newMailPreferences = {
  // doDisturb: false,
  doNotDisturb: false,
  // outOOffice: false,
  outOfOffice: false,
  signature: "Boots, Support.ai Wizard Bear",
  theme: "dark",
} satisfies MailPreferences;
