/* Empty Object Type
 *
 *
 * Support.ai needs better support
 * for formatting the addresses
 * of their messages... because
 * what use is a message
 * if it doesn't go anywhere?
 *
 * Run the code as-is and look at the errors.
 *
 * Fix the Address type
 * to get rid of these errors.
 */

export type Address = {
    name: string;
    domain: string;
};

// don't touch below this line

export type Mail = {
  from: Address;
  to: Address[];
  subject: string;
  body: string;
  urgent: boolean;
  cc?: Address[];
};

export function processMail(mail: Mail) {
  let addressees = "";
  for (const addressee of mail.to) {
    addressees += `${addressee.name}@${addressee.domain}, `;
  }
  addressees = addressees.slice(0, -2);

  let copies = "";
  if (mail.cc) {
    copies = "\nCC: ";
    for (const addressee of mail.cc) {
      copies += `${addressee.name}@${addressee.domain}, `;
    }
    copies = copies.slice(0, -2);
  }

  return `FROM: ${mail.from.name}@${mail.from.domain}
TO: ${addressees}${copies}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}
