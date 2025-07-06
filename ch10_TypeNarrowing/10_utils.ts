/* Non-Null Assertion
 *
 * You can assert that a value is not null or undefined
 * with the non-null assertion (!) operator.
 * It tells the compiler that a value cannot be null or undefined,
 * even when the type system thinks it might be.
 *
 * It also works with optional properties that you know are defined.
 *
 * Lane Wagner (boot.dev):
 * Only use non-null assertions when you're crazy-confident
 * that the value can't be null or undefined.
 * Just use a conditional guard clause if there is any uncertainty.
 * This is always safer, albeit more verbose
 *
 * Assignment
 * We need to write some code that pulls the data of customer orders
 * and calculates their sum.
 *
 * Complete the sumOrders function. It takes an OrderData[]
 * and returns a sum of the order amounts
 *
 * Complete the reportOrders function:
 *   * Call sumOrders on the given orders. Assert that
 *   the given orders aren't null,
 *   but don't change the function signature.
 *
 *   * Return the string Total amount for orders: {SUM},
 *   replacing {SUM} with the calculated sum
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

function sumOrders(orders: OrderData[]): number {
  let total = 0;
  for (const order of orders) {
    total += order.amount;
  }
  return total;
}

export function reportOrders(orders: OrderData[] | null): string {
  let total = sumOrders(orders!);
  return `Total amount for orders: ${total}`;
}
