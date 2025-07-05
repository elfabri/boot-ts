/* Narrowing Using In
 *
 * The in operator checks if a property exists in an object,
 * which is fantastic for type narrowing in object literals.
 *
 * This is an alternative to using extra properties to discriminate
 * the types of diffrent objects.
 *
 * Assignment
 * Complete the processAttachment function.
 * It should return a string based on the given Attachment,
 * using the in operator to check the type:
 *
 *   * Image: Return the string Attached image,
 *   size: {SIZE}, dimensions: {WIDTH}x{HEIGHT},
 *   replacing {SIZE}, {WIDTH}, and {HEIGHT}
 *   with the respective fields.
 *
 *   * Document: Return the string Attached document,
 *   size: {SIZE}, pages: {NUMPAGES}, replacing {SIZE}
 *   and {NUMPAGES} with the respective fields.
 *
 *   * Otherwise, return the string Attached file, size: {SIZE}
 */

type ImageAttachment = {
  fileSize: number;
  width: number;
  height: number;
};

type DocumentAttachment = {
  fileSize: number;
  numPages: number;
};

type FileAttachment = {
  fileSize: number;
};

export type Attachment = ImageAttachment | DocumentAttachment | FileAttachment;

export function processAttachment(attachment: Attachment) {
  if ("width" in attachment) {
    return `Attached image, size: ${attachment.fileSize}, dimensions: ${attachment.width}x${attachment.height}`;
  } else if ("numPages" in attachment) {
    return `Attached document, size: ${attachment.fileSize}, pages: ${attachment.numPages}`;
  }
  return `Attached file, size: ${attachment.fileSize}`;
}
