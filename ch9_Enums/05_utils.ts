/* Enums vs Unions
 *
 * Unions are what you use for complex types,
 * so it feels consistent to use them
 * for primitives as well. They don't add any
 * additional runtime code, and are less verbose to write.
 *
 * Enums are slightly easier to refactor. They have reverse
 * mapping in some cases.
 *
 * Unions are used the most everywhere and they should be.
 *
 * Assignment
 * You've decided to refactor some of Support.ai's old API pricing code.
 *
 * Convert the existing enum named ApiTier into a union type named ApiTier.
 * Update the getRateLimitForTier function to work with the new union type.
 */

export type ApiTier = "Free" | "Basic" | "Pro" | "Enterprise";

export function getRateLimitForTier(tier: ApiTier) {
  switch (tier) {
    case "Free":
      return 10;
    case "Basic":
      return 100;
    case "Pro":
      return 1000;
    case "Enterprise":
      return 10000;
  }
}
