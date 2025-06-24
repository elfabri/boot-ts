import { describe, it, assert, withSubmit } from "../unit_test";
import { defaultPreferences } from "./12_utils";

describe("defaultPreferences", () => {
  it("should be immutable at compile time", () => {
    try {
      // @ts-expect-error
      defaultPreferences.doNotDisturb = true;
    } catch (error) {
      // its fine here if this throws
    }
    assert.strictEqual(true, true);
  });
  if (withSubmit) {
    it("should be immutable at runtime", () => {
      assert.strictEqual(
        Object.isFrozen(defaultPreferences),
        true,
        "defaultPreferences should be frozen at runtime not just compile time",
      );
    });
  }
});

