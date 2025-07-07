/* Record Utility Type
 *
 * Partial<T>, Required<T>, and Readonly<T> are useful
 * for changing the kinds of properties in a type,
 * but there are also utility types that change
 * the shape of a type. The Record<K, T> utility type
 * creates a type with a set of properties K of type T.
 *
 * One of the more practical use cases for Record
 * is to ensure that all specified keys in a union
 * are present in the object.
 *
 * It's fantastic for exhaustive lookup tables
 * and configuration objects.
 *
 * Assignment
 * Run the code as-is and notice the compiler error.
 * Fix the bug in getStatusMessage() function.
 */

export type ModelStatus = "waiting" | "thinking" | "responding";

const waitingMessage = "Awaiting prompt";
const thinkingMessage = "Cooking";
const respondingMessage = "Sending response";

export function getStatusMessage(status: ModelStatus) {
  const map: Record<ModelStatus, string> = {
    waiting: waitingMessage,
    thinking: thinkingMessage,
    responding: respondingMessage,
  };

  return map[status];
}
