import { describe, it, assert, withSubmit } from "./unit_test";
import { collectSupportData } from "./05_utils";

describe("collectSupportData", () => {
  const runCases = [
    {
      id: 1984,
      resolved: true,
      expected: ["Support session started", 1984, true],
    },
    {
      id: 1138,
      resolved: false,
      expected: ["Support session started", 1138, false],
    },
  ];

  const submitCases = runCases.concat([
    {
      id: 2001,
      resolved: true,
      expected: ["Support session started", 2001, true],
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { id, resolved, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = collectSupportData(id, resolved);

      console.log("Inputs:");
      console.log(`- Ticket ID: ${id}`);
      console.log(`- Resolved: ${resolved}`);

      console.log("Expected:");
      actual.forEach((item, _) => {
        console.log(` - ${item} (${typeof item})`);
      });
      console.log("Actual:");
      expected.forEach((item, _) => {
        console.log(` - ${item} (${typeof item})`);
      });

      assert.deepEqual(actual, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
