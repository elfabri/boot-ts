/* The Unknown Type
 *
 * Similar to type "any" but requires type assertion before use
 * 
 * Unknown is a fantastic alternative to any
 * when it comes to dealing with values that are coming
 * into your program from the outside world
 * (e.g. user input, API responses, etc.). It forces you
 * to add type checks at that I/O boundary so that
 * you can then be confident working with the data
 * inside your program.
 *
 * Assignment
 * Support.ai needs a roboust message parser that can
 * handle email inputs, which are received as strings,
 * or chat inputs, which are received as arrays of strings.
 *
 * Complete the parserCustomerMessage function. It receives
 * an unknown input and returns a CustomerMessage:
 *   * if the input is a string:
 *     * source should be "email".
 *     * content should be the input string.
 *
 *   * if the input is an array:
 *     * source should be "chat".
 *     * content should be the strings in the input .join()ed
 *       together with a newline character (\n).
 *   
 *   * otherwise:
 *     * source should be the string "unknown".
 *     * content should be an empty string.
 */

export type CustomerMessage = {
  content: string;
  source: "chat" | "email" | "unknown";
}

export function parseCustomerMessage(input: unknown): CustomerMessage {
  const ctmMsg: CustomerMessage = {
    content: "",
    source: "unknown"
  };

  if (typeof input === "string") {
    ctmMsg.source = "email";
    ctmMsg.content = input;
  }

  if (Array.isArray(input)) {
    ctmMsg.source = "chat";
    ctmMsg.content = input.join('\n');
  }

  return ctmMsg;
}
