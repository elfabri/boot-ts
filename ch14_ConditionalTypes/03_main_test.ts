import { describe, it, assert, withSubmit } from "../unit_test";
import type { Blank } from "./03_utils";
import { resetForm } from "./03_utils";

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

describe("resetForm", () => {
  type PermitForm = {
    applicant: string;
    licenseType: "farming" | "fishing" | "mining";
    yearsRequested: number;
  };

  type ExpectedBlank = {
    applicant: null;
    licenseType: null;
    yearsRequested: null;
  };

  const filledForm: PermitForm = {
    applicant: "Abigail",
    licenseType: "mining",
    yearsRequested: 2,
  };

  const blankedOutForm: ExpectedBlank = {
    applicant: null,
    licenseType: null,
    yearsRequested: null,
  };

  const runCases: [any, any][] = [
    [filledForm, blankedOutForm],
    [{ field: "value" }, { field: null }],
  ];

  const submitCases = runCases.concat([
    [
      { field1: 123, field2: true },
      { field1: null, field2: null },
    ],
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  it("Blank<T> produces expected null-valued structure", () => {
    type _Test = Expect<Equal<Blank<PermitForm>, ExpectedBlank>>;
  });

  it("Blank<T> works with empty object", () => {
    type _Test = Expect<Equal<Blank<{}>, {}>>;
  });

  it("resetForm does not mutate input", () => {
    const copy = { ...filledForm };
    resetForm(filledForm);
    assert.deepEqual(filledForm, copy);
  });

  for (let i = 0; i < testCases.length; i++) {
    const [input, expected] = testCases[i];
    it(`Test ${i}`, () => {
      const result = resetForm(input);
      assert.deepEqual(result, expected);
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
