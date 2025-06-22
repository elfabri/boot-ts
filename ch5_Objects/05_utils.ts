/* Discriminated Unions
 *
 * Support.ai is expanding the support
 * for address formatting. The internal
 * addresses of the staff should use
 * a person's first and last names,
 * while the external addresses should have
 * the username and domain of the email.
 *
 * Run the code as-is to see the errors.
 * Create the missing types so that Address forms
 * a discriminated union of them.
 * You'll find the expected properties
 * in the body of the formatAddresses function.
 *
 * It is a convention to use "kind"
 */

type InternalAddress = {
    kind: "internal";  // discriminat property
    firstName: string;
    lastName: string;
};

type ExternalAddress = {
    kind: "external";  // discriminat property
    username: string;
    domain: string;
};

// don't touch below this line

export type Address = InternalAddress | ExternalAddress;

export function formatAddresses(addresses: Address[]) {
  let formatted = "";
  for (const address of addresses) {
    if (address.kind === "internal") {
      formatted += `${address.firstName}.${address.lastName}@support.ai, `;
    }
    if (address.kind === "external") {
      formatted += `${address.username}@${address.domain}, `;
    }
  }
  return formatted.slice(0, -2);
}
