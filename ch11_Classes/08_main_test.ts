import { describe, it, assert, withSubmit } from "../unit_test";
import { RegularCustomer } from "./08_utils";

type testCase = {
  firstName: string;
  lastName: string;
  balance: number;
  queries: number;
  expected: number;
};

describe("calculateTotal", () => {
  const runCases: testCase[] = [
    {
      firstName: "John",
      lastName: "Wick",
      balance: 9999,
      queries: 1,
      expected: 1,
    },
    {
      firstName: "Jason",
      lastName: "Bourne",
      balance: 1000,
      queries: 2,
      expected: 2,
    },
  ];
  const submitCases = runCases.concat([
    {
      firstName: "Jake",
      lastName: "Peralta",
      balance: 1,
      queries: 0,
      expected: 0,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { firstName, lastName, balance, queries, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const customer = new RegularCustomer(firstName, lastName, balance);
      for (let i = 0; i < queries; i++) {
        customer.getBalance();
      }
      assert.strictEqual(customer.getBalanceQueries(), expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});

