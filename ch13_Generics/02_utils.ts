/* Multi Type Parameters
 * Generic Type Parameters can be more than one.
 *
 * Short capital letters like T, U, V, etc.
 * are the most common convention for generic type parameters.
 *
 * Assignment
 * The Support.ai data engineering team needs to prepare
 * LLM training data by creating arrays
 * of loosely-structured pairs.
 * 
 * Complete the pair function. It takes two arrays:
 *
 *   * One with inputs of type A
 *   * One with outputs of type B
 *
 * Return a list of training pairs (tuples) [A, B],
 * one for each index until the shorter list runs out.
 *
 * For example, training data for people's favorite databases:
 *
 *   * A:
 *     * lane
 *     * hunter
 *     * allan
 *     * dan
 *
 *   * B:
 *     * postgres
 *     * mysql
 *     * db.txt
 *     * roll-your-own
 *
 *   * Output:
 *     * ['lane', 'postgres']
 *     * ['hunter', 'mysql']
 *     * ['allan', 'db.txt']
 *     * ['dan', 'roll-your-own']
 */

export function pair<A, B>(a: A[], b: B[]): [A, B][] {
  const out: [A, B][] = [];
  if (a.length >= b.length) {
    for (let i = 0; i < b.length; i++) {
      out.push([a[i], b[i]]);
    }
    return out;
  }

  for (let i = 0; i < a.length; i++) {
    out.push([a[i], b[i]]);
  }
  return out;
}
