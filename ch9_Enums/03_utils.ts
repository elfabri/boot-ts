/* Enum Compilation
 * Enums do not exist on JavaScript, therefore
 * at transpilation, TypeScript will create an object
 * to use as a map.
 *
 * In the case of numbers, the map is bi-directional,
 * but when using strings as values, it will be a simple map.
 *
 * Assignment
 * Support.ai uses custom numeric error codes
 * to track different kinds of internal errors.
 * These codes are logged across systems,
 * but for debugging, we want to display
 * more information about the error.
 *
 * Create and export a new function named getErrorLabel.
 * It should take a error code number as input
 * and return a string.
 *
 * It should use reverse mapping
 * on the InternalErrors enum to get the error name
 * and return a string in this format:
 *
 * CODE: NAME
 *
 * With CODE and NAME replaced by the actual error code
 * and error name.
 *
 * If the given error code is not a value
 * on the InternalErrors enum, it should return
 * in the same format but with the error name "Unknown error".
 *
 */

export enum InternalErrors {
  InvalidPrompt = 1001,
  ContextWindowOverflow = 1004,
  ModelOverload = 1420,
  EthicalGuardrailTriggered = 2233,
  TokenLimitExceeded = 2401,
  SelfAwarenessAchieved = 9999,
}

// don't touch above this line

export function getErrorLabel(err: InternalErrors): string {
  switch (err) {
    case 1001:
    case 1004:
    case 1420:
    case 2233:
    case 2401:
    case 9999:
      return `${err}: ${InternalErrors[err]}`;
    default:
      return `${err}: Unknown error`;
  }
}
