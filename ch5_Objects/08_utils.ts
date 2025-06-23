/* Dynamic Keys
 *
 * You can define dynamic keys using an index signature:
 *
 *   type UserMetrics = {
 *     [key: string]: number;
 *   };
 *
 * This type says "this object
 * can have any number of properties
 * if the keys are strings
 * and the values are numbers".
 *
 * Assignment
 * Fix the MailPreferences type.
 * The setPreference function uses it
 * to store a mapping of key/value pairs.
 */

export type MailPreferences = {
  [key: string]: boolean;
};

// don't touch below this line

export function setPreference(
  preferences: MailPreferences,
  key: string,
  value: boolean,
) {
  const exists = key in preferences;
  preferences[key] = value;
  return exists;
}

