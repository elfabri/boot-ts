import { describe, it, assert, withSubmit } from "../unit_test";
import { formatAddresses, Address } from "./05_utils";

describe("formatAddresses", () => {
  const runCases: {
    addresses: Address[];
    expected: string;
  }[] = [
    {
      addresses: [
        {
          kind: "external",
          username: "mario",
          domain: "plumberbros.com",
        },
        {
          kind: "internal",
          firstName: "princess",
          lastName: "peach",
        },
      ],
      expected: `mario@plumberbros.com, princess.peach@support.ai`,
    },
    {
      addresses: [
        {
          kind: "external",
          username: "luigi",
          domain: "plumberbros.com",
        },
        {
          kind: "internal",
          firstName: "toad",
          lastName: "stool",
        },
      ],
      expected: `luigi@plumberbros.com, toad.stool@support.ai`,
    },
  ];

  const submitCases = runCases.concat([
    {
      addresses: [
        {
          kind: "internal",
          firstName: "donkey",
          lastName: "kong",
        },
        {
          kind: "internal",
          firstName: "rosalina",
          lastName: "luma",
        },
      ],
      expected: `donkey.kong@support.ai, rosalina.luma@support.ai`,
    },
    {
      addresses: [
        {
          kind: "external",
          username: "bowser",
          domain: "koopas.com",
        },
        {
          kind: "external",
          username: "wario",
          domain: "warioware.com",
        },
      ],
      expected: `bowser@koopas.com, wario@warioware.com`,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { addresses, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const result = formatAddresses(addresses);
      console.log("Inputs:");
      addresses.forEach((address, i) => {
        console.log(`Address #${i}`);
        console.log("  - kind:", address.kind);
        if (address.kind === "internal") {
          console.log("  - firstName:", address.firstName);
          console.log("  - lastName:", address.lastName);
        }
        if (address.kind === "external") {
          console.log("  - username:", address.username);
          console.log("  - domain:", address.domain);
        }
      });
      console.log("Expected:");
      console.log(expected);
      console.log("");
      console.log("Actual:");
      console.log(result);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
