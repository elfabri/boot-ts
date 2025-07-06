import { describe, it, assert, withSubmit } from "../unit_test";
import type { OrderData } from "./10_utils";

import { reportOrders } from "./10_utils";

type TestCase = {
  orders: OrderData[] | null;
  expected: string;
};

describe("reportOrders", () => {
  const runCases: TestCase[] = [
    {
      orders: [
        {
          id: "19045",
          accountType: "free",
          amount: 2,
          contact: {
            email: "shelly@doubler.com",
            phone: "0123456789",
          },
        },
        {
          id: "13948",
          accountType: "free",
          amount: 4,
          contact: {
            email: "norma@doubler.com",
            phone: "0223356789",
          },
        },
      ],
      expected: "Total amount for orders: 6",
    },
  ];

  const submitCases = runCases.concat([
    {
      orders: [],
      expected: "Total amount for orders: 0",
    },
    {
      orders: [
        {
          id: "19045",
          accountType: "free",
          amount: 0,
          contact: {
            email: "shelly@doubler.com",
            phone: "0123456789",
          },
        },
        {
          id: "28991",
          accountType: "premium",
          amount: 99,
          contact: {
            email: "ben@oneyedjacks.com",
            phone: "0111226789",
          },
        },
        {
          id: "31772",
          accountType: "premium",
          amount: 149,
          contact: {
            email: "sarah@example.com",
            phone: "0555666777",
          },
        },
      ],
      expected: "Total amount for orders: 248",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { orders, expected } = testCases[i];

    it(`Test ${i + 1}`, () => {
      const actual = reportOrders(orders);
      assert.strictEqual(actual, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
