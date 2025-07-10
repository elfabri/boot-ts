/* Generic Type Inference
 *
 * In most contexts, TypeScript can infer type parameters
 * by the actual parameters you pass in,
 * so you won't need to specify them.
 *
 * Assignment
 * The feedback API at Support.ai returns multiple types
 * of records—chat logs, feedback forms, moderation reports.
 * They all include a text field,
 * and we need a shared way to extract it.
 *
 * You’ve been given a transform function that accepts
 * an array and a "transformation" function.
 * It returns a new array of transformed values.
 *
 * Complete the summarizeFeedback function. It should:
 *
 *   * Accept an array of objects that include a text: string property
 *   * Use the transform function to extract the text values
 *   * Return an array of just the transformed text values
 *
 * Don't pass type arguments to "transform". Let
 * TypeScript infer them.
 */

export function summarizeFeedback<T extends { text: string }>(
  data: T[],
): string[] {
  return transform(data, (item) => {
    return item.text;
  });
}

// don't touch below this line

function transform<T, R>(inputs: T[], fn: (item: T) => R): R[] {
  const result: R[] = [];
  for (const item of inputs) {
    result.push(fn(item));
  }
  return result;
}
