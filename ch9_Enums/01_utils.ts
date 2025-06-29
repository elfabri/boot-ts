/* Enums
 * Sets of defined and unique constants. They can be manually defined
 * or will be automatically defined with integers.
 *
 * Numeric enums are bidirectional, which just means you can easily
 * convert from the underlying value to the name and vice versa
 *
 * Assignment
 * Support.ai has an internal system that calculates
 * the severity of customer support requests,
 * so that they can prioritize the most important requests first.
 *
 * Create and export an enum named RequestSeverity,
 * the enum members should be in order:
 *
 *  * Low,
 *  * Medium
 *  * High
 *  * Critical
 *
 * Let TypeScript handle setting the unique values by default.
 *
 * Complete the isCritical function.
 * It should return true if the given SupportRequest's severity
 * is equal to the enum's Critical value, and false otherwise.
 */

export type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

// don't touch above this line

export enum RequestSeverity {
  Low,
  Medium,
  High,
  Critical,
}

export function isCritical(request: SupportRequest) {
  return request.severity === 3;
}
