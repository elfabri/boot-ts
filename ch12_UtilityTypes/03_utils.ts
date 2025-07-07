/* Required Utility Type
 *
 * The Required<T> utility type does the opposite of
 * Partial<T> - it forces all properties of a type
 * to be required, even those that were originally optional.
 *
 * As with Partial<T>, the Required<T> utility type
 * is not recursive, it only affects the top-level properties.
 *
 * Assignment
 * Our users' emails and phone numbers are usually
 * optional but become required when it's time to make a purchase.
 *
 * Complete the addBillingInfo function:
 *
 * Use Required to enforce that the ContactInfo properties
 * are required.
 * 
 * Return the string
 * billing info: {EMAIL}, {PHONE}
 * replacing {EMAIL} {PHONE} with the respective fields.
 */

export interface ContactInfo {
  email?: string;
  phoneNumber?: string;
}

export function addBillingInfo(info: Required<ContactInfo>) {
  return `billing info: ${info.email}, ${info.phoneNumber}`;
}
