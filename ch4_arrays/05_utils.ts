/*
 * Evolving Any
 * any[] can accept any type into.
 * The evolving any stops evolving when it's passed around.
 * When you return an any[] it becomes a typed[] and
 * can not be pushed with new types it does not already includes.
 *
 * Support.ai is collecting data about
 * customer interactions as
 * a performance metric.

 * Complete the collectSupportData function.
 * It takes an id number and resolved boolean
 * and returns a static array:

    * Index 0: "Support session started" string
    * Index 1: The id number
    * Index 2: resolved boolean

Start with an empty array, and push each value into it before returning it.
*/

export function collectSupportData(id: number, resolved: boolean) {
  const supportData: any[] = [];
  supportData.push("Support session started");
  supportData.push(id);
  supportData.push(resolved);
  return supportData;
}

