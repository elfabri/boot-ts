import { describe, it, assert, withSubmit } from "../unit_test";
import { MailPreferences } from "./11_utils";

function testReadonly() {
  const prefs: MailPreferences = {
    doNotDisturb: true,
    outOfOffice: false,
  };

  // These lines should cause TypeScript errors if properties are readonly
  // @ts-expect-error
  prefs.doNotDisturb = false;
  // @ts-expect-error
  prefs.outOfOffice = true;
}
testReadonly();

describe("resetDefaults", () => {
  const runCases: {
    preferences: MailPreferences;
    expected: MailPreferences;
  }[] = [
    {
      preferences: {
        doNotDisturb: true,
        outOfOffice: true,
        serial: true,
        name: true,
      },
      expected: {
        doNotDisturb: true,
        outOfOffice: true,
        serial: false,
        name: false,
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      preferences: {
        doNotDisturb: false,
        outOfOffice: true,
        serial: true,
        name: false,
      },
      expected: {
        doNotDisturb: false,
        outOfOffice: true,
        serial: false,
        name: false,
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
      console.log("Inputs:");
      for (const pref in preferences) {
        console.log(`  - ${pref}: ${preferences[pref]}`);
      }
      console.log("Updating optional preferences to false...");
      preferences.serial = false;
      preferences.name = false;
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
