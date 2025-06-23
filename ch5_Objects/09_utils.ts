/* Dynamic default properties
 *
 * type FormData = {
 *   [field: string]: string;
 *   email: string;
 *   password: string;
 * };
 *
 * You use this syntax to require
 * certain properties, in this case,
 * email and password. The type above says:
 *
 *   The object must have an email
 *   and password property,
 *   and it can have any number
 *   of additional string properties.
 *
 * Only use dynamic keys when you
 * truly need unknown keys.
 * If you have optional keys,
 * just use the ? operator.
 *
 * Assignment
 * Support.ai needs to communicate whether or not
 * someone is available, so they've added
 * the doNotDisturb and outOfOffice properties
 * to MailPreferences... but someone introduced a bug!
 *
 * Run the code as-is to see the error(s).
 * Fix the MailPreferences type. In addition
 * to the required properties, it should allow
 * any string to map to a boolean or string.
 */
export type MailPreferences = {
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [other: string]: boolean | string;
};

// don't touch below this line

export function canContact(preferences: MailPreferences): boolean {
  return !(preferences.doNotDisturb || preferences.outOfOffice);
}

