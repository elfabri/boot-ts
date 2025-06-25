import { describe, it, assert, withSubmit } from "../unit_test";
import { MailPreferences, newMailPreferences } from "./13_utils";

describe("newMailPreferences", () => {
  const runCases: {
    preferences: MailPreferences;
    expected: MailPreferences;
  }[] = [
    {
      preferences: { ...newMailPreferences },
      expected: {
        doNotDisturb: false,
        outOfOffice: false,
        signature: "Boots, Support.ai Wizard Bear",
        theme: "dark",
      },
    },
    {
      preferences: {
        doNotDisturb: true,
        outOfOffice: false,
        signature: newMailPreferences.signature,
      },
      expected: {
        doNotDisturb: true,
        outOfOffice: false,
        signature: "Boots, Support.ai Wizard Bear",
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      preferences: {
        doNotDisturb: false,
        outOfOffice: true,
        theme: newMailPreferences.theme,
      },
      expected: {
        doNotDisturb: false,
        outOfOffice: true,
        theme: "dark",
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { preferences, expected } = testCases[i];
    it(`Test ${i}`, () => {
      console.log("Expected:");
      for (const pref in expected) {
        console.log(`  - ${pref}: ${expected[pref]}`);
      }
      console.log("");
      console.log("Actual:");
      for (const pref in preferences) {
        console.log(`  - ${pref}: ${preferences[pref]}`);
      }
      assert.deepEqual(preferences, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
