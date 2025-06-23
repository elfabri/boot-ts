import { describe, it, assert, withSubmit } from "../unit_test";
import { BIOMETRIC_LOCK, TWO_FACTOR, MailPreferences, isSecure } from "./10_utils";

describe("isSecure", () => {
  const runCases: {
    preferences: MailPreferences;
    expected: boolean;
  }[] = [
    {
      preferences: {
        doNotDisturb: false,
        outOfOffice: false,
        [BIOMETRIC_LOCK]: true,
        [TWO_FACTOR]: true,
        bloodType: "A+",
        organDonor: true,
      },
      expected: true,
    },
    {
      preferences: {
        doNotDisturb: true,
        outOfOffice: false,
        [BIOMETRIC_LOCK]: true,
        [TWO_FACTOR]: false,
        signature: "Jonathan Harker",
        lawyer: true,
      },
      expected: true,
    },
  ];

  const submitCases = runCases.concat([
    {
      preferences: {
        doNotDisturb: false,
        outOfOffice: true,
        [BIOMETRIC_LOCK]: false,
        [TWO_FACTOR]: true,
        template: "To whom it may concern",
      },
      expected: true,
    },
    {
      preferences: {
        doNotDisturb: true,
        outOfOffice: true,
        [BIOMETRIC_LOCK]: false,
        [TWO_FACTOR]: false,
        theme: "dracula",
      },
      expected: false,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { preferences, expected } = testCases[i];
    it(`Test ${i}`, () => {
      console.log("Inputs:");
      console.log("- Mail Preferences:");
      for (const pref in preferences) {
        console.log(`  - ${pref}: ${preferences[pref]}`);
      }
      const result = isSecure(preferences);
      console.log("Expected:", expected);
      console.log("Result:  ", result);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
