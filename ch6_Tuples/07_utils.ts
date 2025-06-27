/* Tuple Rest Elements
 * TypeScript allows tuples to have a variable number
 * of elements of a specific type using rest elements.
 * This is nice when you want a tuple to have
 * a fixed-length beginning but a flexible-length ending
 *
 * Remember, the whole point of a great type system
 * is to more accurately (and narrowly)
 * model the valid states of your program.
 *
 * Assignment
 * LLMs process tokens to understand inputs
 * and generate outputs. They are kind of like words,
 * and for the sake of this lesson, we'll just assume
 * they are.
 *
 * Complete the tokenize function. It takes an input string
 * and returns a [number, ...string] tuple, where
 * the first element is the cost of the tokens
 * and the rest are the tokens themselves.
 *
 *  Split the input on spaces ( ) to form an array of tokens.
 *
 *  Calculate the cost of the tokens by dividing
 *  the number of words by 100.
 *
 *  Return the expected tuple.
 */

export function tokenize(input: string): [number, ...string[]] {
  const tokens = input.split(' ');
  const cost = tokens.length / 100;
  return [cost, ...tokens];
}
