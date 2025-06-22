import { describe, it, assert, withSubmit } from "../unit_test";
import { getFileLength } from "./07_utils";

describe("getFileLength", () => {
  const runCases = [
    {
      files: new Map<string, string>([
        ["treasure.txt", "He left it all in One Piece"],
        ["ships_log.txt", "Weather: sunny"],
      ]),
      filename: "ships_log.txt",
      expected: 14,
    },
    {
      files: new Map<string, string>([
        ["treasure.txt", "He left it all in One Piece"],
        ["ships_log.txt", "Weather: sunny"],
        ["flags.txt", "🏴‍☠️, 🏴‍☠️, 🏴‍☠️"],
      ]),
      filename: "flags.txt",
      expected: 43,
    },
  ];

  const submitCases = runCases.concat([
    {
      files: new Map<string, string>(),
      filename: "luffy.csv",
      expected: 0,
    },
    {
      files: new Map<string, string>([
        ["map.txt", "---->X"],
        ["ships_log.txt", "Weather: stormy"],
      ]),
      filename: "strawhat.pdf",
      expected: 0,
    },
    {
      files: new Map<string, string>([
        ["mainline_pass.pdf", "Permission granted"],
        ["cargo_manifest.txt", "coconuts"],
      ]),
      filename: "cargo_manifest.txt",
      expected: 8,
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { files, filename, expected } = testCases[i];
    it(`Test ${i}`, () => {
      const actual = getFileLength(files, filename);
      console.log("Inputs:");
      console.log("- Files:");
      for (const [name, contents] of files) {
        console.log(`  - ${name}: "${contents}"`);
      }
      console.log("- Filename:", filename);

      console.log("Expected:", expected);
      console.log("Actual:  ", actual);

      assert.strictEqual(actual, expected);
    });
    console.log("---------------------------------");
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
