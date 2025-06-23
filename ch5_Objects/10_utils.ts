/* PropertyKey
 * Built-in type that represents all possible property
 * key types:
 *
 *   type PropertyKey = string | number | symbol;
 * 
 * A symbol is a unique and immutable data type
 * that may be used as an object property name.
 * It's kinda like a string,
 * but it's guaranteed to be unique.
 *
 * Now we can allow number and symbol keys
 * (the JS default).
 *
 * Assignment
 * New optional security features were added
 * to Support.ai preferences. Management
 * wants all mail users to enable
 * at least one security method.
 *
 * Complete the isSecure function. It takes
 * a MailPreferences as input and returns a boolean.
 *
 * If the preferences enable either two-factor
 * authentication or biometric lock, return true.
 *
 * Otherwise, return false.
 */

export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [TWO_FACTOR]: boolean;
  [BIOMETRIC_LOCK]: boolean;
};

// don't touch above this line

export function isSecure(preferences: MailPreferences) {
  return preferences[TWO_FACTOR] || preferences[BIOMETRIC_LOCK];
}
