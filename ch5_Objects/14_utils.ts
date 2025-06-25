/* Function Overloads
 * We can constrain the function to only allow
 * certain combinations of parameters
 * by using function overloads.
 *
 * The signature of the functions have to be
 * declared above the implementation
 *
 * Assignment
 * Preferences can be configured in one of two ways:
 *
 * By specifying:
 * doNotDisturb (boolean)
 * outOfOffice (boolean)
 *
 * Or, by specifying:
 * doNotDisturb (boolean)
 * outOfOffice (boolean | string)
 * useSystemTheme (boolean)
 * theme (string)
 *
 * Run the code as-is to see the error.
 *
 * Fix the compile-time bug by updating
 * the incorrect overload signature.
*/

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

export function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean,
): MailPreferences;

// Do not touch below this line

export function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean | string,
  useSystemTheme?: boolean,
  theme?: string,
): MailPreferences {
  if (typeof outOfOffice === "string") {
    return {
      doNotDisturb: false,
      outOfOffice: false,
      useSystemTheme: doNotDisturb,
      theme: outOfOffice,
    };
  } else if (useSystemTheme !== undefined && theme !== undefined) {
    return {
      doNotDisturb: doNotDisturb,
      outOfOffice: outOfOffice,
      useSystemTheme: useSystemTheme,
      theme: theme,
    };
  } else {
    return {
      doNotDisturb: doNotDisturb,
      outOfOffice: outOfOffice,
    };
  }
}
