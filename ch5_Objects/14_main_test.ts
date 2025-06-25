import { describe, it, assert, withSubmit } from "../unit_test";
import { MailPreferences, configurePreferences } from "./14_utils";

describe("configurePreferences", () => {
  const runCases: {
    input:
      | [boolean, boolean]
      | [boolean, string]
      | [boolean, boolean, boolean, string]
      | [boolean, string, boolean, string];
    expected: MailPreferences;
  }[] = [
    {
      input: [false, true],
      expected: {
        doNotDisturb: false,
        outOfOffice: true,
      },
    },
    {
      input: [true, false, true, "catppuccin"],
      expected: {
        doNotDisturb: true,
        outOfOffice: false,
        useSystemTheme: true,
        theme: "catppuccin",
      },
    },
  ];

  const submitCases = runCases.concat([
    {
      input: [true, "tokyonight", true, "dark"],
      expected: {
        doNotDisturb: false,
        outOfOffice: false,
        useSystemTheme: true,
        theme: "tokyonight",
      },
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    it(`Test ${i}`, () => {
      console.log("Inputs:");
      console.log("- Mail Preferences:");
      //for (const pref in input) {
      //console.log(`  - ${pref}: ${input[pref]}`);
      //}

      const result = configurePreferences(
        ...(input as Parameters<typeof configurePreferences>),
      );

      console.log("Expected:");
      for (const pref in expected) {
        console.log(`  - ${pref}: ${expected[pref]}`);
      }
      console.log("");
      console.log("Actual:");
      for (const pref in result) {
        console.log(`  - ${pref}: ${result[pref]}`);
      }

      assert.deepEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
