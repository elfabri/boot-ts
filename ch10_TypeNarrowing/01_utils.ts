/* Type Narrowing
 * The simple process of making a type
 * more and more specific as you write your code.
 *
 * Assignment
 * Support.ai provides 2 plans: regular and premium.
 * Regular customers have a limit of 10 tickets,
 * premium users do not.
 *
 * Take a look at the openTicket function
 * and notice that its current state produces a compiler error.
 *
 * Fix the bug using type narrowing.
 * The compiler should know that aboveLimit
 * exists on the customer when it does that specific check.
 */

type RegularCustomer = {
  plan: "regular";
  tickets: number;
  aboveLimit: boolean;
};

type PremiumCustomer = {
  plan: "premium";
  tickets: number;
};

export type Customer = RegularCustomer | PremiumCustomer;

export function openTicket(customer: Customer): number {
  if (customer.plan === "regular") {
    if (customer.aboveLimit) {
      return -1;
    }
    if (customer.tickets >= 9) {
      customer.aboveLimit = true;
    }
  }
  return customer.tickets + 1;
}
