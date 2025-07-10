/* Generic Classes
 *
 * Classes can have Generic types that can be used
 * on its properties and methods as well.
 *
 * Assignment
 * Support.ai is launching experiments again.
 * You’ve been asked to implement a class
 * that manages feature flags by name.
 * At Support.ai we commit to features.
 * Once a flag is enabled, there's no going back.
 *
 * Complete the FeatureFlag class.
 * It should keep track of all the enabled flags,
 * and allow users of the class to enable
 * new flags and check if a flag is enabled.
 *
 */

export class FeatureFlag<T extends string> {
  #flags: Set<T>;

  constructor() {
    this.#flags = new Set<T>();
  }

  enable(flag: T): void {
    if (!this.isEnabled(flag)) {
      this.#flags.add(flag);
    }
  }

  isEnabled(flag: T) {
    return this.#flags.has(flag);
  }
}
