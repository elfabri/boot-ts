/* Sets
 * Built-in type to have a collection of unique values.
 * Arrays can be converted to sets which automatically
 * removes duplicate values.
 *
 * Some methods are: delete(), has(), forEach(), size
 *
 * Assignments
 * Complete the findNumUniqueLabels function.
 * It takes an array of strings
 * and returns the number of unique values
 * in the array.
 *
 * Use a set to remove duplicates
 */
export function findNumUniqueLabels(formattedAddresses: string[]) {
  const s = new Set<string>(formattedAddresses);
  return s.size;
}
