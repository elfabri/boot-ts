/* String Enums
 * Numeric Enums have slightly better performance
 * but String Enums are easier to work with when
 * are used as labels, as they can be serialized
 * as they are, instead of serializing numbers on
 * jsons or databases, where the meaning of those
 * numbers may be less intuitive than literal labels.
 *
 * Assignment
 * It's hard to tell the severity of a request record
 * in the Support.ai database, because it's just a number.
 * Lets convert them to more readable strings.
 *
 * Update the RequestSeverity enum to use string values
 * instead of the default number values. The values
 * should match the enum member names
 * but should be entirely in uppercase.
 *
 * Complete the convertSeverityToLabel function.
 *
 * It should take an old severity number value
 * and return the corresponding RequestSeverity string value.
 * If the given severity number doesn't match
 * one of the labels, it should throw a new error
 * with the message: "Unknown severity"
 */

export type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

// don't touch above this line

export enum RequestSeverity {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Critical = "CRITICAL"
};

export function convertSeverityToLabel(severity: number) {
  switch (severity) {
    case 0:
      return "LOW";
    case 1:
      return "MEDIUM";
    case 2:
      return "HIGH";
    case 3:
      return "CRITICAL";
    default:
      throw new Error("Unknown severity");
  }
}
