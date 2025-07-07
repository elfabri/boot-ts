import { describe, it, assert, withSubmit } from "../unit_test";
import { importConfig, Config } from "./04_utils";

type testCase = {
  input: Config;
  expected: Readonly<Config>;
};

describe("Readonly Utility Type", () => {
  const runCases: testCase[] = [
    {
      input: {
        apiUrl: "http://localhost:8080",
        timeout: 100,
        debug: true,
      },
      expected: {
        apiUrl: "http://localhost:8080",
        timeout: 100,
        debug: true,
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      input: {
        apiUrl: "https://api.example.com",
        timeout: 500,
        debug: false,
      },
      expected: {
        apiUrl: "https://api.example.com",
        timeout: 500,
        debug: false,
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];

    it(`Test ${i}: should return a config object with the correct values`, () => {
      const config = importConfig(input);
      assert.strictEqual(config.apiUrl, expected.apiUrl);
      assert.strictEqual(config.timeout, expected.timeout);
      assert.strictEqual(config.debug, expected.debug);
      // @ts-expect-error
      config.apiUrl = "something else";
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
