import { describe, it, assert, withSubmit } from "../unit_test";
import { User, stripID } from "./07_utils";

describe("Omit Utility Type", () => {
  const user: User = {
    id: "394",
    name: "Jack",
    email: "jack@gmail.com",
    age: 20,
  };
  const strippedID = stripID(user);

  const runTests = [
    {
      test: "name",
      expected: true,
    },
    {
      test: "email",
      expected: true,
    },
  ];

  const submitTests = runTests.concat([
    {
      test: "age",
      expected: true,
    },
    {
      test: "id",
      expected: false,
    },
  ]);

  let tests = runTests;
  if (withSubmit) {
    tests = submitTests;
  }

  for (let i = 0; i < tests.length; i++) {
    const { test, expected } = tests[i];
    it(`Test ${i}`, () => {
      assert.strictEqual(test in strippedID, expected);
    });
  }

  const numSkipped = submitTests.length - tests.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
