/* Type Parameters for Types
 *
 * Type parameters aren't just limited to functions and methods.
 * You can use type parameters to create generic types as well.
 *
 * Assignment
 * The infra team at Support.ai is building
 * a shared job queue for internal systems—model retraining,
 * cache invalidation, moderation sync, and more.
 *
 * Take a look at the createQueue function
 * that's been created for you.
 * It creates a new generic JobQueue data structure.
 *
 * Define a new JobQueue<T> type with:
 *   * A push method that matches the implementation in createQueue
 *   * A next method that matches the implementation in createQueue
 *
 * Write and export a new generic runNext function.
 * It simply accepts a JobQueue, calls its next method
 * and returns the result.
 */

type JobQueue<T> = {
  push(job: T): void,
  next(): T | undefined,
}

export function runNext<T>(jobQ: JobQueue<T>) {
  return jobQ.next()
}

export function createQueue<T>(): JobQueue<T> {
  const jobs: T[] = [];
  return {
    push(job) {
      jobs.push(job);
    },
    next() {
      return jobs.shift();
    },
  };
}
