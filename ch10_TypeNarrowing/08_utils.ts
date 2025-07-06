/* Type Assertion
 * With the keyword "as", it is possible to force typeScript into
 * treating a value as a certain type without the type checking or
 * narrowing it.
 *
 * An alternative way to do this is with the <type> before the value,
 * when is being used.
 *
 * Type Assertions are used as assumtions and are not safer than
 * conditional narrowings.
 *
 * Assignment
 * We use a 3rd party service for handling payments,
 * and although we can't have type safety on incoming data,
 * we do expect that it comes in a consistent format.
 *
 * Fix the function handleSuccessfulOrder by asserting
 * that the orderResponse is, in fact, some OrderData.
 * Leave the unknown in the function signature.
 */
export type OrderData = {
  id: string;
  accountType: "free" | "premium";
  amount: number;
  contact: {
    email: string;
    phone: string;
  };
};

export function handleSuccessfulOrder(orderResponse: unknown): string {
  const { accountType, contact } = <OrderData>orderResponse;
  // const { accountType, contact } = orderResponse as OrderData;

  let welcome: string;
  switch (accountType) {
    case "free":
      welcome = "Welcome to Support.ai!";
      break;
    case "premium":
      welcome = "Thanks for giving us money!";
      break;
  }

  return `To ${contact.email}: ${welcome}`;
}
