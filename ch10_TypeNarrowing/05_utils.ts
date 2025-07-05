/* Type Predicates
 *
 * Sometimes the built-in type guards (typeof, instanceof, etc.) aren't enough.
 *
 * TypeScript allows you to create your own type guards using type predicates.
 * We do that by creating a function that:
 *   * Accepts a wide type that we want to narrow
 *
 *   * Returns a boolean indicating if the value is of the desired type
 *
 *   * Uses the type predicate syntax value is Type in the return type
 *
 * Type predicates become really useful when the logic to check the type
 * is complex, for example, when a type shares properties with several
 * other types.
 *
 * Assignment
 * We support multiple LLMs, those per-token prices
 * aren't gonna arbitrage themselves...
 * 
 * Anyhow, we need to write code to activate a specific model
 * when starting a chat with a customer.
 * 
 *   * Fix isModelSkippity: it should be a type predicate function.
 *   * Fix isModelJean by also making it a type predicate function.
 *
 *   * Complete the activateModel function:
 *
 *     * If the given model is Skippity,
 *     return the string
 *     Activated model Skippity version {VERSION} with searching {STATUS}
 *
 *       * {VERSION} is simply the version property
 *       * {STATUS} is either enabled or disabled based on the search property
 *
 *     * If the given model is Jean, return the string
 *     Activated model Jean version {VERSION} with thinking {STATUS}
 *
 *       * {VERSION} is simply the version property
 *       * {STATUS} is either enabled or disabled based on the think property
 */

type ModelSkippity = {
  version: "3.5" | "4" | "4s";
  search: boolean;
};

type ModelJean = {
  version: "2" | "3" | "3.14";
  think: boolean;
};

export type Model = ModelSkippity | ModelJean;

function isModelSkippity(model: Model): model is ModelSkippity {
  return (
    "search" in model &&
    (model.version === "3.5" || model.version === "4" || model.version === "4s")
  );
}

function isModelJean(model: Model): model is ModelJean {
  return (
    "think" in model &&
    (model.version === "2" || model.version === "3" || model.version === "3.14")
  );
}

export function activateModel(model: Model) {
  if (isModelSkippity(model)) {
    return `Activated model Skippity version ${model.version} with searching ${ model.search ? "enabled" : "disabled" }`;
  } else if (isModelJean(model)) {
    return `Activated model Jean version ${model.version} with thinking ${ model.think ? "enabled" : "disabled" }`;
  }
}
