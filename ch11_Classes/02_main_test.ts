import { describe, it, assert, withSubmit } from "../unit_test";
import { Customer } from "./02_utils";

describe("Customer purchase", () => {
  const runCases = [
    {
      customer: new Customer("John", "Wick", 9999),
      purchaseAmount: 1500,
      expectedName: "John Wick",
      expectedRemainingBalance: 8499,
    },
    {
      customer: new Customer("Jason", "Bourne", 1000),
      purchaseAmount: 250,
      expectedName: "Jason Bourne",
      expectedRemainingBalance: 750,
    },
  ];
  const submitCases = runCases.concat([
    {
      customer: new Customer("James", "Bond", 500),
      purchaseAmount: 500,
      expectedName: "James Bond",
      expectedRemainingBalance: 0,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { customer, purchaseAmount, expectedName, expectedRemainingBalance } =
      testCases[i];
    it(`Test ${i}`, () => {
      const actualName = customer.getFullName();
      assert.strictEqual(actualName, expectedName);

      const remainingBalance = customer.purchase(purchaseAmount);
      assert.strictEqual(remainingBalance, expectedRemainingBalance);

      assert.strictEqual((customer as any).balance, undefined);

      assert.strictEqual(Object.keys(customer).length, 2);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
