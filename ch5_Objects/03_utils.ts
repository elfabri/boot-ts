/* Optional Object Parameters
 *
 * optional properties can be added to
 * an object type with the "?" operator
 * It will mean said properties have a value
 * or are undefined, which implicitly
 * adds that type to the property and it will
 * need to be checked before reading it's value.
 *
 * After being copied on all emails
 * and being overwhelmed,
 * Support.ai management doesn't want
 * to be copied on all mail
 * all of the time,
 * only some mail sometimes...
 *
 * Run the code as-is to see the error.
 * Fix the Mail type, it looks like
 * one of the properties isn't required.
 *
 */

export type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
  cc?: string[];  // optional property
};

// don't touch below this line

export function processMail(mail: Mail) {
  return `FROM: ${mail.from}
TO: ${mail.to}${!mail.cc ? "" : "\nCC: " + mail.cc}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}
