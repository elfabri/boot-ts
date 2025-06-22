/* Maps
 * Built-in, collections of key-value pairs.
 * Important methods are: has(), get(), delete() and size
 *
 * Assignment
 * Let's add file sharing to Support.ai's internal email system.
 *
 * Complete the getFileLength function. It takes:
 *
 * * A Map<string, string> that represents filenames -> fileContents
 * * A specific filename to get the length of
 * * It returns the number of bytes in the file's contents.
 *
 * Use the TextEncoder class and its encode method
 * to encode the file contents (a string)
 * into a Uint8Array, and return the length
 * of the resulting array.
 */

export function getFileLength(files: Map<string, string>, filename: string) {
  if (files.has(filename)) {
    const encoded = new TextEncoder;
    return encoded.encode(files.get(filename)).length;
  }
  return 0;
}
