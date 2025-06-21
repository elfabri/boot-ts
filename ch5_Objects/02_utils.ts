/* Extra properties
 *
 * When you pass an object to a function
 * in TypeScript, it's:
 *
 * * Okay to have more properties than those
 *   defined in the function's parameter type
 *
 * * Not okay to have missing properties
 *
 * Support.ai management asked
 * to be copied on all emails...
 *
 * Run the code as-is to see the error.
 * Fix the Mail type.
 * Add the missing properties
 * used by the processMail function.
 */

export type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
  cc: string[];
};

// don't touch below this line

export function processMail(mail: Mail) {
  return `FROM: ${mail.from}
TO: ${mail.to.join(", ")}
CC: ${mail.cc.join(",")}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}

