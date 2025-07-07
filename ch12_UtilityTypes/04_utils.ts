/* Readonly Utility Type
 *
 * The Readonly<T> utility creates a new type
 * where all the top-level properties are readonly,
 * preventing them from being reassigned after initialization.
 *
 * Assignment
 * Let's make sure the API config
 * imported by our server can't be modified.
 *
 * Complete the importConfig() function.
 * It should return the given config object
 * with all properties marked as readonly.
 */

export interface Config {
  apiUrl: string;
  timeout: number;
  debug: boolean;
}

export function importConfig(config: Readonly<Config>) {
  return config;
}
