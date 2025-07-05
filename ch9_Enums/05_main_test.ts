import { describe, it, assert, withSubmit } from "../unit_test";
import { getRateLimitForTier } from "./05_utils";
import type { ApiTier } from "./05_utils";

type Expect<T extends true> = T;
type IsExactly<T, U> =
  (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2
    ? true
    : false;

type TestCase = {
  tier: string;
  expected: number;
};

describe("ApiTier", async () => {
  await it("should be a union", () => {
    type Expected = "Free" | "Basic" | "Pro" | "Enterprise";
    type Test = Expect<IsExactly<ApiTier, Expected>>;
  });
});
console.log();

describe("getRateLimitForTier", async () => {
  await it("getRateLimitForTier should take ApiTier union as a parameter", () => {
    type Expected = "Free" | "Basic" | "Pro" | "Enterprise";
    type Test = Expect<
      IsExactly<Parameters<typeof getRateLimitForTier>[0], Expected>
    >;
  });
  console.log();

  const runCases: TestCase[] = [
    { tier: "Free", expected: 10 },
    { tier: "Basic", expected: 100 },
    { tier: "Pro", expected: 1000 },
    { tier: "Enterprise", expected: 10000 },
  ];

  const submitCases: TestCase[] = [
    { tier: "Free", expected: 10 },
    { tier: "Enterprise", expected: 10000 },
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = runCases.concat(submitCases);
  }

  for (const test of testCases) {
    await it(`should return ${test.expected} for tier "${test.tier}"`, () => {
      const result = getRateLimitForTier(test.tier as any);

      console.log(`Tier:     ${test.tier}`);
      console.log(`Expected Limit: ${test.expected}`);
      console.log(`Actual Limit:   ${result}`);

      assert.strictEqual(result, test.expected);
    });
    console.log();
  }

  const numSkipped = submitCases.length - (testCases.length - runCases.length);
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
