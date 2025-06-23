import { describe, it, assert, withSubmit } from "../unit_test";
import { MailPreferences, canContact } from "./09_utils";

describe("canContact", () => {
  const runCases: {
    preferences: MailPreferences;
    expected: boolean;
  }[] = [
    {
      preferences: {
        doNotDisturb: false,
        outOfOffice: false,
        theme: "dark",
      },
      expected: true,
    },
    {
      preferences: {
        doNotDisturb: true,
        outOfOffice: false,
        delayDelivery: true,
      },
      expected: false,
    },
  ];

  const submitCases = runCases.concat([
    {
      preferences: {
        doNotDisturb: false,
        outOfOffice: true,
        formatOnSave: true,
      },
      expected: false,
    },
    {
      preferences: {
        doNotDisturb: true,
        outOfOffice: true,
        signature: "Miss All-Sunday",
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
      const result = canContact(preferences);
      console.log("Expected:", expected);
      console.log("Actual:  ", result);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
