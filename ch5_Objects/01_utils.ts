/* Support.ai is adding an internal email service
 * for communication between workers and customers.

 * Run the code as-is to see the error.

 * Fix the code by exporting a new Mail type
 * in utils.ts, it should match the shape
 * of processMail's input type.

 * Update processMail to use the Mail type
 * as its input parameter.
 */

export type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
}

export function processMail(mail: Mail) {
  return `FROM: ${mail.from}
TO: ${mail.to}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}
